import React from 'react';

const BlogCategoriesPage = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='max-container padding-container-sm'>
        <h1 className='text-3xl font-bold mb-2'>Blog Categories</h1>
        <p className='mb-6'>Choose a category to read about the latest developments in IVF and fertility.</p>
        <div className='max-w-xl'>
          <Categories />
        </div>
      </div>
    </section>
  );
};

const categories = [
  { name: 'Best IVF Center', count: 65 },
  { name: 'Blastocyst', count: 7 },
  { name: 'Celebrity Stories', count: 5 },
  { name: 'Cosmetic Gynecology', count: 1 },
  { name: 'Cryopreservation', count: 0 },
  { name: 'Egg Freezing', count: 9 },
  { name: 'Embryo Glue', count: 3 },
  { name: 'Endometriosis', count: 2 },
  { name: 'Fallopian Tube', count: 6 },
  { name: 'Female Infertility', count: 127 },
  { name: 'Fertility Treatment', count: 81 },
  { name: 'Fertility Workup', count: 2 },
  { name: 'Fibroids', count: 1 },
  { name: 'Franchise', count: 0 },
  { name: 'Genetics', count: 0 },
];

const Categories = () => {
  return (
    <aside className='p-4'>
      <h2 className='text-xl font-semibold text-gray-900 mb-4'>Categories</h2>
      <ul className='space-y-2'>
        {categories.map((category, index) => (
          <li key={index} className='text-gray-700 flex justify-between items-center'>
            <span>{category.name}</span>
            <span className='text-gray-500'>({category.count})</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogCategoriesPage;
