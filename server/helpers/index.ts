import 'server-only';

import { Model } from 'mongoose';

interface AggregateQueryManagerOptions {
  model: Model<any>;
  baseAggregation: any[];
  queryString: any;
}

export class AggregateQueryManager {
  private model: Model<any>;
  private pipeline: any[];
  private queryString: any;
  private filterStage: any = {};
  private sortStage: any = { $sort: { createdAt: -1 } };
  private projectStage: any = { $project: { __v: 0 } };
  private skipStage: any = { $skip: 0 };
  private limitStage: any = { $limit: 10 };

  constructor({ model, baseAggregation, queryString }: AggregateQueryManagerOptions) {
    this.model = model;
    this.pipeline = baseAggregation;
    this.queryString = queryString;

    for (let key in this.queryString) {
      if (!this.queryString[key]) {
        delete this.queryString[key];
      }
    }
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit'];
    excludedFields.forEach((field) => delete queryObj[field]);

    if (queryObj.dateRangeFrom || queryObj.dateRangeTo) {
      const startDate = queryObj.dateRangeFrom ? new Date(queryObj.dateRangeFrom) : null;

      if (startDate) {
        startDate.setUTCHours(0, 0, 0, 0);
      }

      const endDate = queryObj.dateRangeTo ? new Date(queryObj.dateRangeTo) : null;

      if (endDate) {
        endDate.setUTCHours(23, 59, 59, 999);
      }

      if (startDate && endDate) {
        this.filterStage.createdAt = { $gte: startDate, $lte: endDate };
      } else if (startDate) {
        this.filterStage.createdAt = { $gte: startDate };
      }

      delete queryObj.dateRangeFrom;
      delete queryObj.dateRangeTo;
    }

    if (this.queryString.searchField && this.queryString.searchValue) {
      if (this.isFieldValid(this.queryString.searchField)) {
        this.filterStage[this.queryString.searchField] = { $regex: this.queryString.searchValue, $options: 'i' };
      }

      delete queryObj.searchField;
      delete queryObj.searchValue;
    }

    Object.keys(queryObj).forEach((key) => {
      if (this.isFieldValid(key)) {
        if (typeof queryObj[key] === 'object') {
          Object.keys(queryObj[key]).forEach((operator) => {
            queryObj[key][`$${operator}`] = queryObj[key][operator];
            delete queryObj[key][operator];
          });
        }
        this.filterStage[key] = queryObj[key];
      }
    });

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortFields = this.queryString.sort.split(',').reduce((acc: any, field: string) => {
        const [key, order] = field.split(':');
        acc[key] = order === 'desc' ? -1 : 1;
        return acc;
      }, {});
      this.sortStage = { $sort: sortFields };
    }
    return this;
  }

  paginate() {
    const page = parseInt(this.queryString.page, 10) || 1;
    const limit = parseInt(this.queryString.limit, 10) || 10;
    const skip = (page - 1) * limit;

    this.skipStage = { $skip: skip };
    this.limitStage = { $limit: limit };

    return this;
  }

  async execute() {
    this.pipeline.push({ $match: this.filterStage }, this.sortStage, this.projectStage, this.skipStage, this.limitStage);

    return await this.model.aggregate(this.pipeline);
  }

  async getPaginationMetadata() {
    const countPipeline = [...this.pipeline.slice(0, -2), { $count: 'total' }];

    const [countResult] = await this.model.aggregate(countPipeline);
    const totalResults = countResult ? countResult.total : 0;

    const limit = parseInt(this.queryString.limit, 10) || 10;
    const totalPages = Math.ceil(totalResults / limit) || 1;
    const currentPage = parseInt(this.queryString.page, 10) || 1;

    return {
      totalResults,
      totalPages,
      currentPage,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }

  private isFieldValid(field: string): boolean {
    return Object.keys(this.model.schema.paths).includes(field);
  }
}
