import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps } from '@/types';

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/obstetrics-and-gynecology-banner.webp',
  subtitle: 'Gifting Couples The Joy of Parenthood',
  title: {
    normal: 'Consult the Best Gynaecologist in Gurgaon',
    colored: 'Dr. Bindu Garg',
  },
  description:
    'Dr. Bindu Garg is known as the best Gynaecologist in Gurgaon. Although she also has expertise in obstetrics and fertility treatments. You can consider Dr. Bindu for the treatment of Obs-Gynae-related problems along with fertility issues.',
  primaryButtonText: 'Schedule Your Appointment',
};

export const testimonialData: ITestimonialProps = {
  subtitle: "What Dr. Bindu Garg's Patients Say About Her",
  title: 'Patient Testimonials',
  testimonials: [
    {
      date: '2024-05-01',
      stars: 5,
      description:
        'I m extremely satisfied with the treatment provided by Dr. Bindu Garg to my wife. She has helped us a lot during her pregnancy. We have been blessed with a girl child at Neelkanth Hospital under the care of Dr. Bindu. Thanks to her',
      person: 'Arjun Sharma',
      location: 'Gurgaon',
    },
    {
      date: '2024-10-02',
      stars: 5,
      description:
        'Best Gynecologist in Gurgaon. I had a consultation with Dr. Bindu for my PCOS problem. She is very polite and handles the gynae case smoothly. Her 43 years of excellent experience make her popular among people.',
      person: 'Sakshi Singh',
      location: 'Gurgaon',
    },
    {
      date: '2024-03-06',
      stars: 5,
      description:
        'Thanks to Dr. Bindu Garg for their support during my partners high-risk pregnancy. She provided personalized care and ensured the safety and well-being of both my wife and my baby.',
      person: 'Rahul Kumar',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'How can I book an appointment with Dr. Bindu Garg?',
    answer: 'You can call us at 076690 54615 or visit the Book Appointment page.',
  },
  {
    question: 'What is the consultation fee of Dr. Bindu Garg for gyne-related treatments?',
    answer: 'The Consultation fee of Dr. Bindu Garg for gyne-related treatments is Rs. 1000/-',
  },
  {
    question: 'What should I expect during my first visit to Dr. Bindu Garg?',
    answer:
      'During your first visit, Dr. Bindu Garg will likely review your medical history, ask for physical tests, and discuss any concerns or questions you may have about your reproductive health.',
  },
  {
    question: 'What gynecology service does Dr. Bindu Garg provide in Gurgaon?',
    answer: {
      beforeList: 'She provides the following gynecological services in Gurgaon:',
      list: [
        'Prenatal and pregnancy care',
        'High-Risk pregnancies',
        'Routine gynecological check-ups',
        'Management of menstrual disorders',
        'Treatment for pelvic pain and discomfort',
        'Diagnosis and management of gynecological infections',
        'Contraceptive counseling and family planning services',
        'Evaluation and management of ovarian cysts',
        'Management of uterine fibroids',
        'Polycystic ovarian syndrome (PCOS)',
        'Menopause management and hormone replacement therapy',
        'Screening for gynecological cancers, such as cervical, ovarian, and uterine cancer',
        'Evaluation and treatment of infertility issues in expectant mother',
        'Pregnancy planning and preconception counseling',
        'and many more…',
      ],
    },
  },
  {
    question: 'How much experience does Dr. Bindu Garg has?',
    answer: 'Dr. Bindu Garg has overall 43 years of experience in Gynecology, Obstetrics, and Fertility & IVF treatments.',
  },
  {
    question: 'In which hospital does doctor Bindu practice?',
    answer:
      'Dr. Bindu Garg practice in Neelkanth Hospital, Gurgaon. She owns this hospital and is the head of the Obs-Gynae and Infertility department.',
  },
  {
    question: 'Why should I choose Dr. Bindu Garg as a Gyno?',
    answer:
      'Dr. Bindu Garg is a highly experienced gynecologist and obstetrician in Gurgaon. She has an overall experience of 43 years (39+ Years as a specialist) in the field of gynecology-obstetrics, and infertility. In her bright and long career, she has helped many couples to overcome the problem of infertility. Her expertise also lies in various assisted reproductive technologies (ART) including IUI, ICSI, and IVF.',
  },
  {
    question: 'Who are the best gynecologists in Gurgaon?',
    answer: 'Dr. Bindu Garg is the most senior and one of the best IVF doctors in Gurgaon.',
  },
  {
    question: 'What is the difference between gynecology and obstetrics?',
    answer:
      "The main difference between gynecology and obstetrics is in their focus areas within women's health care. Gynecology primarily deals with the diagnosis and treatment of issues related to the female reproductive system, such as vaginal or uterine infections, menstrual disorders, and infertility problems. Obstetrics, on the other hand, focuses specifically on the care of pregnant women, labor, and the immediate postpartum period.",
  },
  {
    question: 'What is the difference between gynecologists and obstetricians?',
    answer:
      "Obstetricians are responsible for managing pregnancies, delivering through vaginal birth or cesarean section, and caring for both the mother and the newborn during the prenatal, delivery, and postpartum stages. In short, while gynecologists address a wide range of women's health issues beyond pregnancy, obstetricians specialize in the management of pregnancy and childbirth.",
  },
  {
    question: 'How can I choose the best gynecologist in Gurgaon?',
    answer:
      'Before choosing any gynecologist you must do your research and make your own decision. You can check experience, expertise, patient reviews, testimonials, achievements awards, etc. After all these, you will be able to choose the best gynecologists for you.',
  },
];

export const ContentArea = () => {
  return (
    <section className='bg-gray-50'>
      <div className='padding-container-sm max-container'>
        {/* top-column */}
        <div className='w-full text-center'>
          <p className='section-subtitle mb-2'>Book An Appointment With The Most Trusted Gyno in Gurgaon</p>
          <h2 className='section-title'>Gynecology and Obstetrics Services: Explained By Dr. Bindu Garg</h2>
        </div>
        {/* /top-column */}

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              {/* single-card */}
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                <b className='text-xl font-semibold text-primaryColor-900'>1. Symptoms of Obstetrics and Gynecological Issues</b>
                <p className='text-gray-700'>
                  The most senior gynecologist in Gurgaon Dr. Bindu Garg has suggested some common symptoms of issues related to obstetrics and
                  gynecology are:
                </p>
                <ul className='list-disc pl-5 text-gray-700 mb-8'>
                  <li>Abnormal vaginal bleeding or discharge</li>
                  <li>Pelvic pain or pressure</li>
                  <li>Urinary problems or infections</li>
                  <li>Itching, burning, swelling, or soreness in the genital area</li>
                  <li>Lumps or sores in the genital area</li>
                  <li>Infertility or difficulty conceiving</li>
                  <li>Menstrual cramps or irregular periods</li>
                  <li>Breast disorders or changes</li>
                  <li>Menopause symptoms</li>
                </ul>
                <p className='text-gray-700 mb-4'>
                  These symptoms can indicate various conditions, such as infection, endometriosis, fibroids, polycystic ovary syndrome, ovarian cyst,
                  ectopic pregnancy, miscarriage, premature delivery, preeclampsia, cervical cancer, uterine cancer, ovarian cancer, breast cancer,
                  etc.
                </p>
                <p className='text-gray-700 mb-8'>
                  If you experience any of these symptoms, you should consult an obstetrician-gynecologist (OB-GYN) for diagnosis and treatment. An
                  OB-GYN is a doctor who is trained and certified in both obstetrics and gynecology.
                </p>

                <b className='text-xl font-semibold text-primaryColor-900'>2. Treatments Offered By the best Gynecologist in Gurgaon</b>
                <p className='text-gray-700 mb-4'>
                  There are many treatments offered by the best Gynecologist in Gurgaon. They offer a wide range of OB-GYN services, from routine
                  checkups to complex procedures, for women of all ages. The expert gynecologists are dedicated to providing personalized care for
                  pregnant women and reproductive health needs. Whether you need help with PCOS/PCOD, infertility, menopause, high-risk pregnancy, or
                  any other women-related problem, we are here to help you with the best possible treatment options.
                </p>
                <p className='text-gray-700 mb-8'>
                  Same as we are committed to supporting women during their pregnancy and delivery. We provide prenatal counseling to help women
                  understand and manage their health conditions while they are pregnant. We also ensure the well-being of both mother and baby after
                  birth with comprehensive postnatal care. With our holistic gynecology and obstetrics services and our long-term experience of over
                  42 years, we are a trusted partner for women's health in Gurgaon and beyond.
                </p>

                <b className='text-xl font-semibold text-primaryColor-900'>3. List of Other Obs & Gynae Treatments at Our Centre</b>
                <p className='font-bold text-gray-700'>Obstetrics Services:</p>
                <ul className='list-disc pl-5 text-gray-700 mb-4'>
                  <li>Pregnancy Planning & Contraception</li>
                  <li>Pre-Natal Services</li>
                  <li>Painless Delivery</li>
                  <li>Baby well-being Ultrasound/ tests</li>
                  <li>C-sections Delivery</li>
                  <li>High Risk Pregnancies</li>
                  <li>Budget and Low Cost Deliveries</li>
                  <li>Unplanned Deliveries</li>
                </ul>

                <p className='font-bold text-gray-700'>Gynecology Treatments:</p>
                <ul className='list-disc pl-5 text-gray-700 mb-4'>
                  <li>Early or delayed puberty</li>
                  <li>Heavy bleeding</li>
                  <li>Frequent bleeding</li>
                  <li>Absent menstrual periods</li>
                  <li>Menstrual pain</li>
                  <li>Fallopian tubes Related Problems</li>
                  <li>Genital infection or pain</li>
                  <li>Genital skin conditions</li>
                  <li>Abnormal pap smears</li>
                  <li>Ovarian cysts</li>
                  <li>Pelvic pain</li>
                  <li>Endometriosis</li>
                  <li>Absent vagina and/or uterus</li>
                  <li>Imperforate hymen</li>
                  <li>Endocrine problems</li>
                  <li>Polycystic Ovarian Syndrome (PCOS)</li>
                  <li>Excess facial and body hair (hirsutism)</li>
                  <li>Pregnancy-related problems in adolescents</li>
                  <li>Tubal (ectopic) pregnancy</li>
                  <li>Unintended pregnancy</li>
                  <li>Miscarriage</li>
                  <li>Contraception</li>
                  <li>Birth control for teens with complex medical problems</li>
                </ul>

                <p className='font-bold text-gray-700'>Gynecological Surgeries:</p>
                <ul className='list-disc pl-5 text-gray-700 mb-8'>
                  <li>Hysteroscopy</li>
                  <li>Cystoscopy</li>
                  <li>Treatment of cervical abnormalities</li>
                  <li>Hysterectomy</li>
                  <li>Laparoscopic surgery</li>
                  <li>Pelvic Floor Surgery</li>
                  <li>Screening for gynecological cancers</li>
                  <li>postpartum care</li>
                </ul>

                <b className='text-xl font-semibold text-primaryColor-900'>4. Cost of Obstetrics & Gynaecology Treatments in Gurgaon</b>
                <p className='text-gray-700'>
                  The cost of obstetrics and gynecology treatment in Gurgaon may depend on various factors, such as type of treatment, hospital,
                  doctor, city, and insurance coverage. Here are some average costs of some common treatments, according to web search results:
                </p>
                <ul className='list-disc pl-5 text-gray-700 mb-4'>
                  <li>Hysterectomy: ₹ 1,00,000 - ₹ 2,00,000</li>
                  <li>Ovarian Cyst Removal: ₹ 50,000 - ₹ 1,00,000</li>
                  <li>Myomectomy: ₹ 75,000 - ₹ 1,50,000</li>
                  <li>C-section delivery: ₹ 40,000 - ₹ 1,50,000</li>
                  <li>General Delivery: ₹ 20,000 - ₹ 80,000</li>
                  <li>IVF: ₹ 1,50,000 - ₹ 2,50,000</li>
                </ul>
                <p className='text-gray-700 mb-8'>
                  <b>Note:</b> These are only approximate ranges and may vary from hospital to hospital.
                </p>

                <b className='text-xl font-semibold text-primaryColor-900'>5. Common Tests A Gynecologist Can Suggest</b>
                <ul className='list-disc pl-5 text-gray-700 mb-8'>
                  <li>Blood Tests</li>
                  <li>Speculum Examination</li>
                  <li>Colposcopy</li>
                  <li>Endocervical Curettage (ECC)</li>
                  <li>Cervical Cancer Screening</li>
                  <li>Pelvic Exam</li>
                  <li>Loop Electrosurgical Excision Procedure</li>
                  <li>Vulvar Biopsy</li>
                  <li>Endometrial Biopsy</li>
                  <li>Sonography (Ultrasound)</li>
                  <li>Hysteroscopy (HSC)</li>
                  <li>Hysterosalpingography (HSG)</li>
                </ul>
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
