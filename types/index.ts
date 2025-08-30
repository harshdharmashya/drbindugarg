export interface ICategory {
  title: string;
  image: string;
  link: string;
  description?: string;
  icon?: React.ElementType;
}

export interface INavLinkItem {
  name: string;
  href?: string;
  icon?: React.ElementType;
  description?: string;
  external?: boolean;
  content?: INavLinkItem[];
}

export interface IFAQ {
  question: string;
  answer:
    | string
    | {
        beforeList: string;
        list: string[];
        afterList?: string;
      };
}

export interface HeroSectionProps {
  bgImage: string;
  subtitle: string;
  title:
    | string
    | {
        normal: string;
        colored: string;
      };
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  mobileImage?: string;
  mobileImageAlt?: string;
}

export interface TreatmentSectionProps {
  title: string;
  treatments: string[];
}

export interface WhyChooseUsDynamicProps {
  title: string;
  description: string;
  pointsBefore: string;
  points: { bold: string; normal: string }[];
  imgUrl: string;
  imgAlt: string;
}

export interface ITestimonialProps {
  subtitle: string;
  title: string;
  testimonials: {
    date: string;
    stars: number;
    description: string;
    person: string;
    location: string;
  }[];
}
