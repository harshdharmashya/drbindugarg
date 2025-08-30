import { ArrowRight } from 'lucide-react';

const obsGynaeServices = [
  {
    title: "Women's Healthcare",
    description:
      "Dr. Bindu takes care of all types of women's health issues and provides treatments related to their reproductive health at her hospital Neelkanth Gurgaon.",
  },
  {
    title: 'Pre Natal and Pregnancy Care',
    description:
      'As the most experienced gynecologist in Gurgaon, Dr. Bindu also provides careful prenatal, postnatal, and pregnancy care to her patients.',
  },
  {
    title: 'ART Procedures',
    description:
      'Dr. Bindu Garg also has excellent expertise in performing all types of ART (Assisted Reproductive Technology) procedures for the treatment of infertility and helps couples to become parents.',
  },
  {
    title: 'Gynecological Surgeries',
    description:
      'At her hospital, Dr. Bindu also performs postpartum care, Hysterectomy, Laparoscopy, Hysteroscopy, Myomectomy, Endometrial biopsy, Ovarian cystectomy, Fibroid Removal, Vaginal Surgery, Hysteroscopic Surgery, and more.',
  },
  {
    title: 'High Risk Pregnancy',
    description:
      'High risk pregnancy refers to conditions that increase the likelihood of complications for the mother or baby, requiring specialized medical care and monitoring Dr, Bindu manages all these very well with the help of her 42+ years of experience.',
  },
  {
    title: 'Adolescent Care',
    description:
      'Adolescent care by Dr. Bindu Garg in Gurgaon includes complete support for the specific needs of adolescents, including reproductive health education, mental health counseling, and guidance on promoting healthy lifestyle habits.',
  },
  {
    title: 'Infertility Treatments',
    description:
      'Get all types of fertility treatments in one place whether they are IVF, IUI, ICSI, fertility workup, or fertility medications along with gynecology and obstetrics treatments.',
  },
];

const TreatmentsCards = () => {
  return (
    <section className='bg-gradient-to-b from-gray-100 via-gray-50 to-white'>
      <div className='max-container padding-container-sm'>
        <div className='text-center mb-12'>
          <p className='section-subtitle'>Treatments Provided By Dr. Bindu Garg</p>
          <h2 className='section-title'>Gynecology and Obstetrics Treatments</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {obsGynaeServices.map((service, index) => (
            <div
              key={index}
              className='relative bg-gradient-to-tr from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2'
            >
              <div className='absolute -top-6 left-4 w-12 h-12 bg-gradient-to-r from-primaryColor-500 to-primaryColor-600 text-white flex items-center justify-center rounded-full shadow-md'>
                <span className='text-lg font-bold'>{index + 1}</span>
              </div>
              <h3 className='text-2xl font-semibold text-primaryColor-600 mb-4'>{service.title}</h3>
              <p className='text-gray-700 leading-relaxed mb-6'>{service.description}</p>
              <div className='border-t border-gray-300 pt-4'>
                <button
                  className='inline-flex items-center gap-2 bg-gradient-to-r from-primaryColor-500 to-primaryColor-600 text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:from-primaryColor-600 hover:to-primaryColor-700 transition-transform transform hover:scale-105'
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More <ArrowRight className='w-5 h-5' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsCards;
