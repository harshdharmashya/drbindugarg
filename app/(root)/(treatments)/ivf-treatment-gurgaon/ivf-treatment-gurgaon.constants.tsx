import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps, TreatmentSectionProps, WhyChooseUsDynamicProps } from '@/types';

export const treatmentOfferingsData: TreatmentSectionProps = {
  title: 'Available IVF Treatments In Gurgaon',
  treatments: [
    'Frozen Embryo Transfer (FET)',
    'IVF + Elective Single Embryo Transfer (eSET)',
    'IVF + Intracytoplasmic Sperm Injection (ICSI)',
    'IVF + Egg Donor',
    'IVF + Donor Sperm',
    'IVF + PESA (Percutaneous Epididymal Sperm Aspiration)',
    'IVF + TESA (Testicular Sperm Aspiration)',
    'IVF + TESE (Testicular Sperm Extraction)',
    'IVF + PGS (Preimplantation Genetic Screening)',
    'IVF + PGD (Preimplantation Genetic Diagnosis)',
    'Mini IVF (Minimal Stimulation)',
  ],
};

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/ivf.webp',
  subtitle: 'An Advanced Treatment to Fill Parenthood Dream',
  title: {
    normal: 'IVF (In Vitro Fertilization) Treatment In ',
    colored: 'Gurgaon',
  },
  description:
    'Start your successful journey to parenthood through IVF treatment in Gurgaon. The procedure will be done by Dr. Bindu Garg at Neelkanth IVF Hospital. Consult Now!.',
  primaryButtonText: 'Schedule Your Appointment',
  mobileImage: '/images/banner/ivf_mv.webp',
  mobileImageAlt: 'IVF treatment in Gurgaon',
};

export const whyChooseUsData: WhyChooseUsDynamicProps = {
  title: 'Personalized IVF Treatment For Couples in Gurgaon',
  description: `In the Gurgaon location, there are many fertility clinics, fertility experts, and hospitals with cutting-edge technology. All the facilities offer personalized treatment plans according to the couple's current medical history and requirements. Couples suffering from infertility can choose IVF treatment to fulfill their dream of parenthood. For it a personalized treatment plan can help them a lot to increase success rate of the IVF procedure.`,
  pointsBefore: 'Benefits of personalized IVF treatment —',
  points: [
    { bold: 'Increased success rates', normal: 'When treatment is tailored to your specific needs, you are more likely to have a successful cycle.' },
    { bold: 'Reduced costs', normal: 'By avoiding unnecessary procedures, you can save money on your treatment.' },
    {
      bold: 'Improved emotional well-being',
      normal: 'Personalized care can help you feel more supported and empowered throughout your fertility journey.',
    },
  ],
  imgUrl: '/images/why_choose_us_ivf_treatments.webp',
  imgAlt: 'a man with her pregnant wife',
};

export const testimonialData: ITestimonialProps = {
  subtitle: 'What do patients say about IVF treatment in Gurgaon?',
  title: 'Patient Testimonial',
  testimonials: [
    {
      date: '2024-04-15',
      stars: 5,
      description:
        'It is a pleasure to find the best IVF treatment in Gurgaon for people living or looking for an IVF doctor or IVF hospital in Gurgaon. Under the guidance of Dr. Bindu Garg and other IVF doctors, many patients have fulfilled their dream of becoming parents.',
      person: 'Sarda Awasthi',
      location: 'Gurgaon',
    },
    {
      date: '2024-02-12',
      stars: 5,
      description:
        'If we are talking about Gurgaon, there are many options for IVF treatment. It has a top fertility specialized hospital, clinic, and highly experienced fertility specialists. Now, anyone who is living in Gurgaon or nearby locations can easily get in-vitro fertilization treatment at an affordable price.',
      person: 'Vaibhav Singh',
      location: 'Gurgaon',
    },
    {
      date: '2024-03-30',
      stars: 5,
      description:
        'I had opted for IVF treatment under the guidance of Dr. Bindu - an IVF expert in Gurgaon and was blessed with a son with the help of an IVF procedure. The hospital is nearby from my location which is why it was very easy for me to visit for consultation and procedure.',
      person: 'Umesh Nakshetri',
      location: 'Gurgaon',
    },
    {
      date: '2024-01-28',
      stars: 5,
      description:
        'Gurgaon is one of the best places for IVF treatment for infertile couples. If you are a childless couple and live in Gurgaon, you can start your fertility treatment or opt for IVF in reputed and most revied hospitals.',
      person: 'Suresh Ranjan',
      location: 'Gurgaon',
    },
    {
      date: '2024-05-05',
      stars: 5,
      description:
        'No doubt, gradually Gurgaon is becoming popular for IVF treatment because you can easily find the top fertility centers with the most experienced reproductive health doctors, gynecologists, and infertility specialists.',
      person: 'Deepa Sahu',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'Can I get pregnant through IVF treatment?',
    answer:
      'Yes, IVF (In Vitro Fertilization) treatment can help you conceive a child when natural conception is not possible or successful. However, it is important to consult a fertility specialist to discuss this in detail.',
  },
  {
    question: 'What is the cost of IVF treatment in Gurgaon?',
    answer:
      "The cost of IVF in Gurgaon lies between the range of ₹ 1,00,000/ to ₹ 1,50,000 depending on the clinic/hospital, the doctor's expertise and experience, and their success rate in IVF.",
  },
  {
    question: 'Which is the highest quality in IVF Centre Gurgaon?',
    answer:
      'Neelaknth IVF Hospital owned by Dr. Bindu Garg is considered the highest quality IVF center in Gurgaon because this has all the facilities available required for IVF treatment.',
  },
  {
    question: 'How much does 1 cycle of IVF cost?',
    answer:
      'The cost of 1 cycle of IVF starts from ₹ 75,000/- to ₹ 1,00,000/-. It can defer from patient to patient according to their personalized treatment plan.',
  },
  {
    question: 'Who is the No. 1 IVF doctor in India?',
    answer:
      'Dr. Bindu Garg is considered to be the No. 1 IVF doctor in India due to her excellent experience, 43 years of expertise, and having delivered more than 20000 babies.',
  },
  {
    question: 'Who is the most experienced IVF doctor in Gurgaon?',
    answer:
      'With over 43 years of experience, Dr. Bindu Garg is the <a class="primary-link" href="https://www.lamidas.com/blog-details/the-most-experienced-ivf-doctors-in-gurgaon" target="_blank">most experienced IVF doctor</a> in Gurgaon.',
  },
  {
    question: 'I have a low sperm count. Does IVF treatment help me to become a parent?',
    answer:
      'Yes, IVF can be a possible solution for individuals with low sperm counts who wish to become parents. In cases of male infertility, techniques such as intracytoplasmic sperm injection (ICSI) can be used along with IVF. With ICSI, a sperm is injected directly into the egg to facilitate fertilization. This method may be particularly beneficial for individuals with low sperm counts or poor sperm motility. However, the success of IVF with ICSI can vary depending on individual circumstances, so it is essential to consult a fertility specialist to discuss your options and chances of success.',
  },
  {
    question: 'What happens during the Ovarian stimulation process?',
    answer:
      "Ovarian stimulation usually involves the administration of gonadotropin injections containing follicle-stimulating hormone (FSH) and sometimes luteinizing hormone (LH). These hormones stimulate the growth and development of numerous follicles in the ovaries, each of which contains an egg. FSH injections are usually given for approximately 8 to 14 days, depending on the individual's response, until the follicles reach the optimal size for egg retrieval. The goal of this procedure is to increase the number of mature eggs available for fertilization during assisted reproductive procedures such as in vitro fertilization (IVF).",
  },
  {
    question: 'What is the egg retrieval process?',
    answer:
      'During egg retrieval, the doctor inserts a thin needle into each follicle, which contains an egg, and gently sucks the egg and surrounding fluid into the needle. This liquid is then transferred to a test tube. This process is repeated for each follicle in both ovaries. The procedure usually takes about 30-60 minutes to complete. <a href="https://med.emory.edu/departments/gynecology-obstetrics/patient-care/patient-education/oocyte-retrieval/index.html" target="_blank" class="primary-link">[1]</a>',
  },
  {
    question: 'How does sperm retrieval work?',
    answer: {
      beforeList:
        "Sperm retrieval is a medical procedure used to collect sperm directly from a man's testicles or epididymis. This sperm can be used in assisted reproductive technologies (ART) such as in vitro fertilization (IVF) or intracytoplasmic sperm injection (ICSI) to help the couple conceive.",
      list: [
        'Percutaneous epididymal sperm aspiration (PESA): This minimally invasive procedure uses a fine needle to extract sperm directly from the epididymis, the coiled tube behind the testicle where sperm is stored. PESA is commonly used for men with blockage in the epididymis.',
        'Testicular sperm extraction (TESE): This surgical procedure involves making a small incision in the scrotum and removing a tissue sample from the testicle. The tissue sample is then examined under a microscope to detect sperm. TESE is typically used for men who have no sperm in their ejaculate due to problems with sperm production.',
      ],
    },
  },
  {
    question: 'What is the process of Fertilization in IVF treatment?',
    answer: {
      beforeList:
        'In IVF, fertilization, which is the fusion of sperm and egg to form an embryo, occurs in a controlled laboratory environment outside the body. Here are details of the fertilization process in IVF:',
      list: [
        'Sperm preparation: A sperm sample is collected from the partner or donor. The sperm go through a process to separate the healthiest and most motile sperm.',
        'Insemination or ICSI: There are two main methods of achieving fertilization:Conception: This is similar to natural conception. The prepared sperm are mixed with the eggs obtained in a special dish and incubated. The sperm is allowed to fertilize the egg on its own.',
        'Intracytoplasmic sperm injection (ICSI): In some cases, especially when there are concerns about sperm quality or fertilization rates, a single sperm is injected directly into the cytoplasm of each mature egg using a fine needle.',
        'Monitoring and development: The eggs are closely monitored to see whether fertilization occurs. If fertilization is successful, the fertilized egg will begin to divide and develop into an embryo.',
      ],
      afterList:
        "The entire fertilization process usually takes about 1-2 days. The doctor will then closely monitor the embryo's development for a few days before transferring the embryo into the uterus.",
    },
  },
  {
    question: 'How does Embryo develop in the IVF lab?',
    answer: {
      beforeList:
        "In an IVF lab, the embryo's development is carefully monitored and nurtured in a controlled environment designed to mimic the fallopian tube. Here is a description of the specific stages of embryo development after fertilization:",
      list: [
        'Day 1: Fertilization - Within 14–19 hours after insemination or ICSI, the embryologist checks for signs of fertilization. A fertilized egg is called a zygote. It should contain two pronuclei – one from the sperm and one from the egg – indicating successful fertilization.',
        'Days 2-3: Rift Stage - The zygote begins to divide rapidly into many cells. By the second day, a normal embryo may contain 2–6 cells, and by the third day, there may be 7–9 cells. These dividing cells are called blastomeres.',
        'Day 4: Morula Stage - The blastomeres continue to divide and become more compact, forming a solid ball of cells called a morula.',
        'Days 5-6: Blastocyst stage - This is an important step. The morula develops a fluid-filled cavity inside, which turns into a blastocyst.',
        'Trophectoderm: These outer cells will contribute to the formation of the placenta.',
        'Inner cell mass: These inner cells will eventually develop into the embryo. Not all embryos develop into blastocysts, and some may arrest (stop developing) at an early stage.',
        'After day 5 - The blastocyst is the preferred stage for transferring the embryo back to the uterus as it has a high implantation success rate.',
        'Important Factors: The entire development process takes place in a special incubator that maintains a constant temperature, humidity, and gas composition to mimic the natural environment inside the fallopian tube.',
      ],
    },
  },
  {
    question: 'How does an IVF expert transfer an embryo?',
    answer:
      "In IVF, embryo transfer is the final step where a fertilized egg, now an embryo, is placed in the woman's uterus. The doctor uses ultrasound guidance to insert a thin tube (catheter) through the cervix and into the uterus to deposit the embryo in the optimal location for implantation. It is a short, outpatient procedure with minimal discomfort. The number of embryos transferred depends on factors such as age and quality of the embryos.",
  },
  {
    question: 'Which are the best IVF and fertility centre in gurgaon?',
    answer: {
      beforeList: 'Here are some of the reputed IVF centers in Gurgaon that you can consider:',
      list: ['Neelkanth IVF Hospital', 'Cloudnine Fertility', 'Nova IVF Fertility', 'Prime IVF', 'ART Fertility Clinics'],
    },
  },
  {
    question: 'Who are the best IVF doctors in Gurgaon?',
    answer: {
      beforeList:
        'Here are some of the reputed <a href="https://www.drbindugarg.com/blog/top-10-fertility-specialists-in-gurgaon">IVF Experts in Gurgaon</a> that you can consider:',
      list: [
        'Dr. Bindu Garg',
        'Dr. Swati Mani',
        'Dr. Pooja Mehta',
        'Dr. Parul Jain',
        'Dr. Deepika Aggarwal',
        'Dr. Astha Dayal',
        'Dr. Reubina Singh',
        'Dr. Renu Keshan Mathur',
        'Dr. Dipika Dhingra',
        'Dr. Pallavi Vasal',
      ],
    },
  },
];

export const ContentArea = () => {
  return (
    <section className='bg-gray-50'>
      <div className='padding-container-sm max-container'>
        {/* top-column */}
        <div className='w-full text-center'>
          <p className='section-subtitle mb-2'>Our Expertise</p>
          <h2 className='section-title'>Let's Explore The In Vitro Fertilization (IVF)</h2>
        </div>
        {/* /top-column */}

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              {/* single-card */}
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                <b className='text-xl font-semibold text-primaryColor-900'>About IVF (In Vitro Fertilization) Treatment?</b>
                <p className='text-gray-700 mb-8'>
                  IVF, or in vitro fertilization, is an assisted reproductive technology (ART) that helps conceive a child with the process of
                  fertilizing an egg with sperm outside the body in a laboratory environment. In Gurgaon, this IVF treatment is performed by Dr. Bindu
                  Garg with a high success rate of 85%.
                  <br />
                  <br />
                  In vitro fertilization treatment is an advanced option used to help couples to start a parenthood journey in case they are not able
                  to conceive a child due to fertility-related issues. In this process, an egg released by a woman is fertilized with sperm outside
                  the body in the lab.
                  <br />
                  <br />
                  So in today's world, IVF is considered a boon for individuals and couples who are struggling with infertility issues and are not
                  able to conceive.
                </p>

                <b className='text-xl font-semibold text-primaryColor-900'>Conditions When IVF is suggested by Fertility Experts?</b>
                <p className='text-gray-700'>
                  There are many reasons why IVF treatment may be suggested by a fertility doctor. But before considering IVF, a gynaecologist
                  performs various fertility tests on the man and woman to identify the actual problems in conceiving. Here we have listed some
                  important conditions suggested by Senior Fertility Expert and Gynecologist in Gurgaon Dr. Bindu Garg. In these conditions, IVF may
                  be suggested-
                </p>
                <ul className='list-disc pl-5 text-gray-700 mb-8'>
                  <li>Preservation of fertility due to cancer or other health conditions</li>
                  <li>Uterine fibroids</li>
                  <li>Sperm-related issues in men</li>
                  <li>Low sperm count</li>
                  <li>Zero(Nill) sperm count</li>
                  <li>Unexplained infertility</li>
                  <li>Genetic disorders</li>
                  <li>Due to a damaged or blocked Fallopian Tube</li>
                  <li>Endometriosis</li>
                  <li>Ovulation disorders</li>
                  <li>Previous surgery to prevent pregnancy (tubal ligation)</li>
                </ul>

                <b className='text-xl font-semibold text-primaryColor-900'>Major Procedures involved in IVF Treatment</b>
                <p className='text-gray-700'>
                  IVF treatment involves several procedures. You should be aware of all the steps and prepare for it. Here, to help patients, Dr.
                  Bindu has briefly explained the essential steps involved in each phase.
                </p>

                <h4 className='font-bold text-gray-700 mt-4'>First Step: The Pre IVF Treatment Checkups</h4>
                <p className='text-gray-700'>
                  Before starting an IVF treatment your IVF specialist performs some screening tests that can be said to be Pre-treatment checkups.
                  These tests help doctors make your IVF treatment more successful. Here is the list of the possible tests-
                </p>
                <ul className='list-disc pl-5 text-gray-700 mb-4'>
                  <li>Semen analysis</li>
                  <li>Ovarian reserve testing</li>
                  <li>Infectious disease screening</li>
                  <li>Tubal ligation</li>
                  <li>Blood test</li>
                  <li>Mock embryo transfer</li>
                  <li>Prolactin test</li>
                  <li>Pelvic exam</li>
                  <li>Uterine exam</li>
                  <li>Transvaginal ultrasound</li>
                  <li>TSH (Thyroid-stimulating hormone)</li>
                  <li>Medical evaluation</li>
                  <li>Preimplantation genetic testing</li>
                </ul>
                <p className='text-gray-700 mb-4'>
                  <b>Note:</b> Not all the above tests will be suggested to you, only some of them may be suggested by your doctor, who will give
                  preference as per the individual case.
                </p>

                <h4 className='font-bold text-gray-700'>Second Step: Start Of the First IVF Cycle</h4>
                <p className='text-gray-700'>
                  After all check-ups, the first IVF cycle begins which usually takes about 2 to 3 weeks. In individual cases, more than one cycle may
                  be required. There are many stages involved in an IVF cycle.
                </p>

                <p className='font-bold text-gray-700'>Here are the 7 stages involved in an IVF procedure:</p>
                <ol className='list-decimal pl-5 text-gray-700 mb-4'>
                  <li>Ovarian stimulation</li>
                  <li>Egg retrieval</li>
                  <li>Sperm retrieval</li>
                  <li>Fertilization</li>
                  <li>Embryo development</li>
                  <li>Embryo transfer</li>
                  <li>Pregnancy</li>
                </ol>

                <h4 className='font-bold text-gray-700'>Third Step: After Completion Of IVF Procedure</h4>
                <p className='text-gray-700'>
                  After Completing a successful embryo transfer your IVF procedure is almost complete. Now you have to take care of yourself while
                  doing your daily work. Follow the below instructions to make your pregnancy successful through IVF treatment.
                </p>

                <p className='font-bold text-gray-700'>List of the instructions you must follow after embryo transfer:</p>
                <ol className='list-decimal pl-5 text-gray-700 mb-4'>
                  <li>Maintain a healthy diet</li>
                  <li>Avoid lifting heavy weights</li>
                  <li>Take care of yourself for a couple of days</li>
                  <li>Take your medications on schedule</li>
                  <li>Avoid Sex</li>
                  <li>Quit smoking</li>
                  <li>Don't intake Alcohol</li>
                  <li>Take Folic Acid Supplement</li>
                  <li>Keep Taking Your Medications</li>
                  <li>Take a Pregnancy Test Right Away</li>
                </ol>

                <h4 className='font-bold text-gray-700'>Preparation for IVF Treatment</h4>
                <p className='text-gray-700 mb-8'>
                  As per the above guide, you need to prepare yourself to start the parenthood journey through the IVF (In Vitro Fertilization)
                  process. You have to be prepared mentally and physically for the <b>required screening tests,</b> and{' '}
                  <b>stages involved in your IVF treatment</b> mentioned above. For more information on how to prepare yourself for IVF, you must
                  consult your IVF doctor once. You can also <b>consult IVF Expert Dr. Bindu Garg.</b>
                </p>

                <b className='text-xl font-semibold text-primaryColor-900'>Cost Of IVF Treatment</b>
                <p className='text-gray-700'>
                  The cost of IVF treatment in India depends on various factors. Some doctors or clinics charge more while others charge less. There
                  are many reasons behind this which we should know so that we can decide whether the expense of IVF treatment is reasonable or not.
                </p>

                <h4 className='font-bold text-gray-700'>Consider the following points while deciding on IVF treatment cost-</h4>
                <ul className='list-disc pl-5 text-gray-700 mb-4'>
                  <li>Location of IVF hospital or clinic</li>
                  <li>IVF Doctor's expertise and experience</li>
                  <li>The success rate of the IVF process</li>
                  <li>Text or video reviews from real patients</li>
                  <li>Popularity or reputation of hospital/clinic/doctors</li>
                  <li>Features and available technologies</li>
                  <li>Maximum need for consultation within the IVF period</li>
                </ul>

                <p className='text-gray-700'>
                  The cost of IVF treatment in Gurgaon also depends on the above factors. But for the special location of Gurgaon, we have talked to
                  the management of many IVF clinics, IVF hospitals, and IVF doctors after which we have got some range of IVF costs mentioned below.
                  This is also used by our hospital and also Dr. Bindu Garg for the IVF procedure.
                </p>

                <div className='overflow-x-auto'>
                  <table className='w-full border-collapse border border-gray-300 mb-4'>
                    <thead>
                      <tr className='bg-gray-100'>
                        <th className='border border-gray-300 p-2'>Procedure</th>
                        <th className='border border-gray-300 p-2'>Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-300 p-2'>IVF</td>
                        <td className='border border-gray-300 p-2'>₹1,00,000 - ₹1,50,000</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>IVF with ICSI</td>
                        <td className='border border-gray-300 p-2'>₹1,20,000 - ₹2,00,000</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>IVF with FET</td>
                        <td className='border border-gray-300 p-2'>₹1,60,000 - ₹2,30,000</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>IVF with PESA, TESA, or TESE</td>
                        <td className='border border-gray-300 p-2'>₹1,50,000 - ₹2,20,000</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>IVF with PGS/PGD</td>
                        <td className='border border-gray-300 p-2'>₹2,20,000 - ₹4,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className='text-gray-700'>
                  On average, the cost of an IVF cycle in Gurgaon can range from INR 1,50,000 to INR 3,00,000 or more. This cost usually includes
                  counseling, fertility drugs, doctor's fees, procedure costs, and many more.
                </p>
                <p className='text-gray-700 mb-8'>
                  <b>Note:</b> This cost may differ according to the needs and treatment requirements of individual patients. It may be low or high
                  from the chart.
                </p>

                <b className='text-xl font-semibold text-primaryColor-900'>Success Rate Of IVF Treatment in Gurgaon</b>
                <p className='text-gray-700'>
                  When we talk about the success rate of IVF treatment in Gurgaon, we have to go through the success rate of IVF done by individual
                  doctors, or we have to go through the success rate of IVF done in hospitals and clinics in Gurgaon. It is rather difficult to get
                  organized data on the success rate of any doctor or particular hospital or clinic accurately from a particular location.
                </p>
                <p className='text-gray-700'>But here we have driven the data of IVF success rate on the basis of age criteria-</p>

                <div className='overflow-x-auto'>
                  <table className='w-full border-collapse border border-gray-300 mb-4'>
                    <thead>
                      <tr className='bg-gray-100'>
                        <th className='border border-gray-300 p-2'>Age Group</th>
                        <th className='border border-gray-300 p-2'>Average Success Rate of IVF</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-300 p-2'>28 years</td>
                        <td className='border border-gray-300 p-2'>45-55%</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>31 years</td>
                        <td className='border border-gray-300 p-2'>40-50%</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>Under 35 Years</td>
                        <td className='border border-gray-300 p-2'>35-45%</td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2'>Over 40 years</td>
                        <td className='border border-gray-300 p-2'>15-20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className='text-gray-700'>
                  <b>Note:</b> The data on the age-wise success rate of IVF treatment should not be considered a guarantee. It is an average data. So
                  it is highly possible that the individual's IVF success rates may be different depending on several factors.
                </p>
              </div>
            </div>
          </div>
          {/* /left-column */}

          {/* right-column */}
          <div className='w-full lg:w-4/12'>
            <CardWrapper subtitle='Schedule a Consultation' title='Book your Appointment!'>
              <CTAMiniForm />
            </CardWrapper>
          </div>
          {/* /right-column */}
        </div>
      </div>
    </section>
  );
};
