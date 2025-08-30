import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps, WhyChooseUsDynamicProps } from '@/types';

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/fertility-workup.webp',
  subtitle: 'Gifting Couples The Joy of Parenthood',
  title: {
    normal: 'Fertility Workup Treatment In',
    colored: 'Gurgaon',
  },
  description:
    'Fertility workup involves a set of diagnostic plans and tests that help determine the cause of infertility in patients. The tests are done based on medical history, symptoms and physical examination.',
  primaryButtonText: 'Schedule Your Appointment',
  mobileImage: '/images/banner/Fertilityworkup_mv.webp',
  mobileImageAlt: 'Fertility Workup Procedure with Text "Fertility Workup Treatment"- Mobile Banner Image',
};

export const whyChooseUsData: WhyChooseUsDynamicProps = {
  title: 'Why Choose Dr. Bindu Garg for Your IVF Needs?',
  description: `Dr. Bindu Garg is the most reputed and experienced IVF & Fertility Doctor in Gurgaon. Along with her expertise in IVF, IUI, ICSI, and Surrogacy, she is also famous as a renowned Obstetrician-Gynecologist. She has been practicing and researching for 42+ years in the field of reproductive health.\n\nTill the latest update, she has helped deliver 20000+ babies through various treatment processes and normally. She has been awarded many honors by different institutions for their contribution to the field of reproductive health and medicine.`,
  pointsBefore: '',
  points: [
    { bold: '42+ Years Of Excellent Experience', normal: '' },
    { bold: '20000+ Babies Delivered', normal: '' },
    { bold: 'Expertise in IVF, IUI, ICSI, Surrogacy', normal: '' },
    { bold: 'Renowned Obstetrician & Gynecologist', normal: '' },
    { bold: 'Awarded With Many Honors', normal: '' },
  ],
  imgUrl: '/images/why-choose-us.webp',
  imgAlt: 'Dr. Bindu Garg - Top Fertility Specialist in Gurgaon',
};

export const testimonialData: ITestimonialProps = {
  subtitle: "What Dr. Bindu Garg's Patients Say About Her",
  title: 'Patient Testimonials',
  testimonials: [
    {
      date: '2023-10-05',
      stars: 5,
      description:
        'Our journey with Dr. Bindu Garg for a fertility workup was transformative. Her comprehensive approach and attention to detail helped uncover the root cause of our fertility challenges. Her expertise and genuine care made the process less daunting. Today, we are expecting our first child, and we credit Dr. Garg for guiding us toward this joyous chapter in our lives.',
      person: 'Sneha Joshi',
      location: 'Gurgaon',
    },
    {
      date: '2023-05-25',
      stars: 5,
      description:
        "Dr. Bindu Garg's fertility workup services exceeded our expectations. Her commitment to understanding our unique situation and conducting a thorough assessment were instrumental. Her recommendations were clear, and her empathetic approach made a significant difference. We are grateful for her expertise and the positive results we achieved through her guidance.",
      person: 'Anika Kapoor',
      location: 'Gurgaon',
    },
    {
      date: '2023-06-05',
      stars: 5,
      description:
        'Choosing Dr. Bindu Garg for our fertility workup was a pivotal decision. Her meticulous evaluation and personalized attention brought clarity to our fertility journey. Her expertise, combined with a compassionate approach, made the process more manageable. Today, we are happy parents, and we owe a debt of gratitude to Dr. Garg for navigating us through this challenging but ultimately rewarding path.',
      person: 'Arvind Gupta',
      location: 'Gurgaon',
    },
    {
      date: '2023-06-20',
      stars: 5,
      description:
        'Our experience with Dr. Bindu Garg for fertility workup services was nothing short of excellent. Her thorough assessments and clear communication helped us understand our options. Her dedication to addressing our concerns and finding solutions made a significant impact on our fertility journey. We highly recommend her to anyone seeking expert guidance and support.',
      person: 'Rajat Singhania',
      location: 'Gurgaon',
    },
    {
      date: '2023-07-02',
      stars: 5,
      description:
        "Dr. Bindu Garg's fertility workup services were a turning point for us. Her expertise and personalized care were evident throughout the process. Her ability to tailor the workup to our specific needs and explain each step made us feel supported. Today, we are grateful parents, and Dr. Garg played a crucial role in making our dream of having a family a reality.",
      person: 'Varun Sharma',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'What is a fertility workup, and why is it necessary?',
    answer:
      'A fertility workup is a series of tests and assessments conducted to identify factors affecting fertility in both men and women. It helps determine the underlying causes of infertility and guides the development of a personalized treatment plan.',
  },
  {
    question: 'When should couples consider undergoing a fertility workup?',
    answer:
      'Couples are advised to consider a fertility workup if they have been actively trying to conceive for a year without success (or six months if the woman is over 35). If there are known fertility issues or concerns, seeking a fertility workup earlier is recommended.',
  },
  {
    question: 'What tests are typically included in a fertility workup?',
    answer:
      "A fertility workup may include a range of tests such as hormone assessments, semen analysis, ovarian reserve testing, hysterosalpingography (HSG), and imaging studies. The specific tests depend on the individual's medical history and circumstances.",
  },
  {
    question: 'How long does it take to complete a fertility workup?',
    answer:
      'The duration of a fertility workup varies based on the complexity of the case and the number of tests required. On average, it may take a few weeks to complete the necessary assessments and receive results.',
  },
  {
    question: 'Can a fertility workup identify all potential fertility issues?',
    answer:
      'While a fertility workup is comprehensive, it may not identify every potential fertility issue. In some cases, additional specialized tests or procedures may be recommended based on the initial findings. A fertility specialist will interpret the results and provide guidance on the next steps.',
  },
];

export const ContentArea = () => {
  return (
    <section className='bg-gray-50'>
      <div className='padding-container-sm max-container'>
        {/* top-column */}
        <div className='w-full text-center'>
          <p className='section-subtitle mb-2'>Our Expertise</p>
          <h2 className='section-title'>Advanced Fertility Treatments - Best Fertility Workup Treatment In Gurgaon</h2>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                {/* Infertility Treatment */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Infertility Treatment In Gurgaon</b>
                  <p className='text-gray-700 mt-3'>
                    Infertility is a condition or disease of the reproductive system that is diagnosed in couples who are not able to get pregnant
                    even after performing unprotected intercourse for more than 12 months. This process is called Infertility Treatment. To get the
                    detailed infromation about infertility treatment in Gurgaon, consult with Dr. Bindu Garg. She is an expert in infertility
                    treatments at Neelkanth Hospital.
                  </p>
                </div>

                {/* What is Fertility Exam */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>What Is A Fertility Exam?</b>
                  <p className='text-gray-700 mt-3'>
                    Fertility workup includes a set of diagnostic plans and tests that help to determine the cause of infertility in patients. The
                    tests are performed based on information provided by the patients, their medical history, symptoms, and physical examination. The
                    diagnostic tests comprise the standard infertility workup that helps to determine the cause of infertility. The tests performed at
                    the best infertility treatment centre in Gurgaon, Neelkanth Hospitals Private Limited, Gurgaon, help to evaluate the potential
                    fertility of the female and male partners. Fertility tests are very important for evaluating fertility and treatment and help the
                    doctor discover what is preventing the couples from achieving pregnancy.
                  </p>
                </div>

                {/* Female Tests */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Test Performed On Female Patients</b>
                  <p className='text-gray-700 mt-3'>
                    <strong>In case of women, the following the diagnostic tests are performed to know the exact cause of infertility:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>AMH (Anti-Müllerian hormone)</li>
                    <li>FSH (Follicle-stimulating hormone)</li>
                    <li>E2 (Estrogen)</li>
                    <li>LH (Luteinizing hormone)</li>
                    <li>RH test</li>
                    <li>Hepatitis B surface antigen</li>
                    <li>HIV RPR serology</li>
                    <li>Rubella titer</li>
                    <li>Endometrial Biopsy</li>
                    <li>Laparoscopy for Evaluating Unexplained Infertility</li>
                    <li>Prolactin Testing in women with regular menstrual cycles</li>
                    <li>Basic gynecological exam</li>
                    <li>Prolactin, estradiol (E2) level test</li>
                    <li>Sexually transmitted disease testing</li>
                    <li>Ultrasound for polycystic ovaries, larger ovarian cysts, and fibroids</li>
                    <li>Basic gynecological exam</li>
                  </ul>
                </div>

                {/* Male Tests */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Test Performed In Male Patients</b>
                  <p className='text-gray-700 mt-3'>
                    <strong>In case of men, the following tests are performed to know the exact cause of infertility:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>A general physical exam by a urologist</li>
                    <li>Testicular biopsy</li>
                    <li>Vasography</li>
                    <li>Infectious disease testing</li>
                    <li>
                      Specialised semen analysis- This test helps evaluate sperm potential to fertilize an egg. This detects sperm count, morphology,
                      and motility
                    </li>
                    <li>Ultrasound test to check organs like seminal vesicles and scrotum</li>
                    <li>Retrograde ejaculation check with urine testing</li>
                    <li>A simple blood test to detect infectious disease both male and female partner</li>
                    <li>HIV</li>
                    <li>Hepatitis B surface antigen test</li>
                    <li>RPR serology test</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* right-column */}
          <div className='w-full lg:w-4/12'>
            <CardWrapper subtitle='Schedule a Consultation' title='Book Your Appointment!'>
              <CTAMiniForm />
            </CardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
