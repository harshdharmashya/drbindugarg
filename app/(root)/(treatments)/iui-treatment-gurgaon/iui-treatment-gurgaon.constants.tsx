import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps, WhyChooseUsDynamicProps } from '@/types';

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/iui.webp',
  subtitle: 'Consult Top IUI Experts To Start Your Parenthood',
  title: {
    normal: 'IUI (Intrauterine Insemination) Treatment In',
    colored: 'Gurgaon',
  },
  description:
    "Get the best IUI treatment in Gurgaon by senior fertility specialist Dr. Bindu Garg. The IUI (intrauterine insemination) procedure helps to inject sperm directly into the uterus, allowing healthy sperm to get closer to the woman's egg.",
  primaryButtonText: 'Schedule Your Appointment',
  mobileImage: '/images/banner/iui_mv.webp',
  mobileImageAlt: 'IUI Procedure with text "IUI (Intrauterine Insemination) Treatment" - Mobile Banner Image',
};

export const whyChooseUsData: WhyChooseUsDynamicProps = {
  title: 'Top Fertility Doctor for IUI Treatment in Gurgaon?',
  description: `Dr. Bindu Garg is the most experienced fertility specialist and gynecologist-obstetrician who has expertise in all kinds of ART procedures like IVF, IUI, and ICSI treatments. There are 20000+ babies delivered under the guidance of Dr. Bindu, which is the highest for any fertility doctor in North India. You can also know about the IVF treatment in Gurgaon provided by her.`,
  pointsBefore: 'Here are a few more reasons to choose Dr. Bindu for IUI treatment in Gurgaon:',
  points: [
    { bold: '42+ Years Of Excellent Experience', normal: '' },
    { bold: '20000+ Babies Delivered', normal: '' },
    { bold: 'Expertise in IVF, IUI, ICSI, Surrogacy, Gynecology-Obstetrics', normal: '' },
    { bold: 'Renowned Obstetrician & Gynecologist', normal: '' },
    { bold: 'Awarded With Many Honors', normal: '' },
  ],
  imgUrl: '/images/why-choose-us.webp',
  imgAlt: 'Dr. Bindu Garg - Top Fertility Doctor in Gurgaon',
};

export const testimonialData: ITestimonialProps = {
  subtitle: "What Dr. Bindu Garg's Patients Say About Her",
  title: 'Patient Testimonials',
  testimonials: [
    {
      date: '2024-04-20',
      stars: 5,
      description:
        'I am extremely grateful to Dr. Bindu Garg for her expertise and care during my IUI journey. After struggling with infertility for years, we (me and my husband) decided on IUI treatment. Thanks to her guidance and the successful IUI procedure, we are now proud parents to a beautiful baby girl. We highly recommend Dr. Bindu Garg to anyone facing fertility challenges.',
      person: 'Sudha Aggarwal',
      location: 'Gurgaon',
    },
    {
      date: '2024-04-18',
      stars: 5,
      description:
        "Choosing Dr. Bindu Garg for the IUI was the best decision, although the treatment was suggested by her. When we walked into her hospital, we felt assured by her expertise and experience which we heard from other patients. Today, we're overjoyed to share that we're expecting our first child, all thanks to Dr. Garg's expertise and support.",
      person: 'Vibha Pandit and Akasha Pandit',
      location: 'Gurgaon',
    },
    {
      date: '2024-04-16',
      stars: 5,
      description:
        "I was very puzzled due to the multiple failures of my pregnancy, and then I was suggested to go with the IUI treatment by a gynecologist. Although she didn't perform IUI she recommended Dr. Bindu in Gurgaon. I am happy that my IUI procedure was successful and now I am pregnant for 5 months.",
      person: 'Sunita Goswami',
      location: 'Gurgaon',
    },
    {
      date: '2024-04-14',
      stars: 5,
      description:
        'I always love to recommend Dr. Bindu because she is really very helpful for childless couples with ART procedures to fulfill their dream of parenthood. At her hospital, she has a complete and advanced setup of IVF, IUI, and ICSI treatments. There she performs all these with her dedicated team of fertility experts and gynecologists.',
      person: 'Akshay Jaiswal',
      location: 'Gurgaon',
    },
    {
      date: '2024-04-01',
      stars: 5,
      description:
        'Dr. Bindu Garg is one of the best IUI doctors in Gurgaon. Along with the IUI, she also has expertise in IVF and ICSI procedures. I and my wife adopted the IUI procedure to have a child after no option left for a successful pregnancy. We are happy that finally we were blessed with a girl baby through IUI performed by Dr. Bindu. Thanks to her!',
      person: 'Saurabh Rana',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'What is IUI (Intrauterine Insemination) treatment?',
    answer:
      "IUI, or intrauterine insemination, is an ART (Assisted Reproductive Technology) procedure for fertility treatment where sperm is directly placed into the uterus during the woman's fertile window to increase the chances of fertilization.",
  },
  {
    question: 'How does IUI differ from IVF (In Vitro Fertilization)?',
    answer:
      'IUI involves placing sperm directly into the uterus, whereas IVF involves fertilizing eggs with sperm outside the body and then transferring the resulting embryo(s) into the uterus.',
  },
  {
    question: 'Who is a suitable candidate for IUI treatment?',
    answer:
      'IUI is often recommended for couples with unexplained infertility, mild male factor infertility, cervical factor infertility, or ovulatory disorders.',
  },
  {
    question: 'What are the steps involved in the IUI process?',
    answer:
      'The steps typically involve ovarian stimulation, monitoring of follicular growth, timing of insemination, and the actual insemination procedure.',
  },
  {
    question: 'Is there any preparation required before undergoing IUI?',
    answer:
      'Yes, preparation may include fertility testing for both partners, ovarian reserve testing, and sometimes medication to stimulate egg production.',
  },
  {
    question: 'How successful is IUI in achieving pregnancy?',
    answer:
      'Success rates vary depending on factors such as age, cause of infertility, and the number of cycles attempted, but typically range from 10% to 20% per cycle.',
  },
  {
    question: 'Are there any risks or side effects associated with IUI?',
    answer: 'Risks and side effects are minimal but may include cramping, spotting, or a slight risk of infection.',
  },
  {
    question: 'How many cycles of IUI might be needed before achieving pregnancy?',
    answer: 'On average, it may take three to six cycles of IUI before achieving pregnancy, although this can vary for each individual.',
  },
  {
    question: 'What factors can affect the success of IUI treatment?',
    answer: 'Factors such as age, cause of infertility, sperm quality, and ovarian reserve can all influence the success of IUI treatment.',
  },
  {
    question: 'How soon after IUI can a pregnancy test be taken?',
    answer: 'A pregnancy test can typically be taken about two weeks after the IUI procedure.',
  },
  {
    question: 'What happens if IUI is not successful?',
    answer: 'If IUI is not successful, the doctor may recommend further testing or alternative fertility treatments such as IVF.',
  },
  {
    question: "Does Dr. Bindu Garg's Neelkanth Hospital offer any additional support or services alongside IUI treatment?",
    answer: 'Yes, the hospital may offer counseling, support groups, and additional fertility services to support patients throughout their journey.',
  },
  {
    question: 'What is the cost of IUI treatment at the hospital?',
    answer:
      "The cost of IUI treatment can vary depending on factors such as medication, monitoring, and additional services required. It's best to consult with the hospital for specific pricing. However, generally it costs between Rs. 5000/- to Rs. 50000/-",
  },
  {
    question: 'Are there any financial assistance options available for IUI treatment?',
    answer:
      'Dr. Bindu Garg offers payment plans or financial assistance programs to help patients afford fertility treatments. It\'s advisable to inquire about such options directly at <a class="primary-link" href="tel:+917669054615">076690 54615</a>.',
  },
  {
    question: 'Who are the best IUI treatment doctors in Gurgaon?',
    answer: {
      beforeList: 'Best Intrauterine Inseminations Doctors In Gurgaon:',
      list: [
        'Dr. Bindu Garg',
        'Dr. Pallavi Vasal',
        'Dr. Meenakshi Sauhta',
        'Dr. Parul Jain',
        'Dr. Pooja Mehta',
        'Dr. Anu Sidana',
        'Dr. Deepika Tiwari',
        'Dr. Arti Gupta',
        'Dr. Anjali Bugga',
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
          <p className='section-subtitle mb-2'>Our Expertise Helps You Start Parenthood</p>
          <h2 className='section-title'>Know All About IUI Treatment</h2>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                {/* About IUI Treatment */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>About IUI Treatment</b>
                  <p className='text-gray-700 mt-3'>
                    Intrauterine insemination (IUI) therapy is a type of assisted reproductive technology (ART) that is used to get pregnant women in
                    case of infertility problems. It involves injecting sperm directly into a woman's uterus to facilitate fertilization at the time
                    of her ovulation. This increases the chances of the egg being fertilized by the sperm. It's also called artificial insemination or
                    donor insemination.
                  </p>
                </div>

                {/* Conditions */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Conditions When IUI Treatment is Recommended</b>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <h4 className='font-bold'>Unexplained infertility</h4>
                      <p>
                        This occurs when a couple has been trying to conceive for a year (or 6 months if the woman is over 35) without success, and
                        all the tests done show no clear reason for infertility.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Mild endometriosis</h4>
                      <p>
                        In the case of{' '}
                        <a
                          className='text-primaryColor-600 hover:underline'
                          target='_blank'
                          href='https://www.who.int/news-room/fact-sheets/detail/endometriosis'
                        >
                          endometriosis
                        </a>
                        , tissue similar to the lining of the uterus grows outside the uterus. Mild endometriosis refers to a less severe stage of the
                        condition, with minimal implants causing little to no disruption to fertility.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Low sperm count or motility</h4>
                      <p>Sperm count refers to the number of sperm in a man's ejaculate. Low sperm count means there are fewer sperm than normal.</p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Low Sperm Motility</h4>
                      <p>
                        Sperm motility is the movement of the sperm. Low motility means the sperm are not swimming as well as they should, making it
                        harder for them to reach and fertilize an egg.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Cervical mucus problems</h4>
                      <p>
                        <a
                          className='text-primaryColor-600 hover:underline'
                          target='_blank'
                          href='https://my.clevelandclinic.org/health/body/21957-cervical-mucus'
                        >
                          Cervical mucus
                        </a>{' '}
                        is a fluid produced by the cervix that changes throughout the menstrual cycle. It can be thick and sticky during infertile
                        times, making it difficult for sperm to pass through.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Same-sex female couples using donor sperm</h4>
                      <p>
                        This refers to couples where both partners are female and they are using sperm donation to conceive. Donor sperm can be used
                        through various fertility treatments like IUI or IVF.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Single women using donor sperm</h4>
                      <p>
                        Similar to same-sex female couples, this refers to single women who are choosing to have a child using sperm donation. Donor
                        sperm can be used with fertility treatments to help them conceive.
                      </p>
                    </li>
                  </ol>
                  <p className='mt-4'>
                    <strong>Note:</strong> If you are considering IUI, it is important to talk to your doctor about the risks and benefits of this
                    treatment.
                  </p>
                </div>

                {/* Steps */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Steps Involve in the IUI Procedure</b>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <h4 className='font-bold'>Ovulation Induction</h4>
                      <p>
                        Depending on the woman's menstrual cycle and fertility issues, she may undergo{' '}
                        <a
                          className='text-primaryColor-600 hover:underline'
                          target='_blank'
                          href='https://www.hopkinsmedicine.org/gynecology-obstetrics/specialty-areas/fertility-center/infertility-services/ovulation-induction-intercourse'
                        >
                          ovulation induction
                        </a>
                        . This involves taking fertility medications to stimulate the ovaries to produce multiple eggs, increasing the chances of
                        conception.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Monitoring Ovulation</h4>
                      <p>
                        Throughout the menstrual cycle, the woman's reproductive health is monitored closely using ultrasounds and blood tests. This
                        helps determine the optimal time for the IUI procedure when ovulation is about to occur.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Sperm collection</h4>
                      <p>
                        This can be done through masturbation at a clinic or at home, or retrieved during intercourse using a special condom. In some
                        cases, sperm may be extracted from a urine sample in a lab.
                      </p>
                    </li>
                    <li>
                      <h4 className='font-bold'>Sperm washing</h4>
                      <p>
                        The collected sperm sample goes through a process to separate the sperm from seminal fluid and other substances. This improves
                        the quality of the sperm by concentrating healthy, motile sperm and removing components that might cause cramping in the
                        woman.
                      </p>
                    </li>
                  </ol>
                </div>

                {/* The IUI Procedure */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>The IUI Procedure</b>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Positioning:</strong> You'll lie comfortably on an exam table, similar to a Pap smear procedure.
                    </li>
                    <li>
                      <strong>Speculum insertion:</strong> A speculum is inserted into the vagina to hold it open and allow clear visualization of the
                      cervix.
                    </li>
                    <li>
                      <strong>Catheter insertion:</strong> A thin, flexible catheter is carefully inserted through the cervix and into the uterus.
                    </li>
                    <li>
                      <strong>Sperm insemination:</strong> The washed sperm is then injected through the catheter directly into the lower part of the
                      uterus.
                    </li>
                  </ol>
                </div>

                {/* After IUI Procedure */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>After IUI Procedure</b>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>The catheter is removed, and you may rest for a few minutes before resuming normal activities.</li>
                    <li>You might experience some mild cramping after the procedure, which is usually temporary.</li>
                    <li>Your doctor may prescribe medications to support ovulation and implantation of a fertilized egg.</li>
                    <li>You'll need to wait two weeks after IUI to take a pregnancy test.</li>
                  </ul>
                  <p className='mt-4'>
                    The entire IUI procedure typically takes only a few minutes and is generally considered a well-tolerated and minimally invasive
                    outpatient procedure.
                  </p>
                </div>

                {/* Success Factors */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Factors That Can Affect Success Of IUI Treatment</b>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Age:</strong> A woman's age is an important factor. Fertility naturally decreases with age, reducing egg quality. This
                      means that younger women generally have higher IUI success rates than older women.
                    </li>
                    <li>
                      <strong>Sperm quality:</strong> The health of the sperm used in IUI plays an important role. Factors such as sperm count,
                      motility (movement), and morphology (shape) affect the sperm's ability to reach and fertilize the egg.
                    </li>
                    <li>
                      <strong>Timing:</strong> The exact timing of IUI around ovulation is important. The doctor will monitor your cycle and determine
                      the optimal window for conception to maximize the chances of the sperm meeting the egg.
                    </li>
                    <li>
                      <strong>Underlying medical conditions:</strong> Some medical conditions can affect the success of IUI.
                    </li>
                    <li>
                      <strong>Unexplained infertility:</strong> When a couple has been tested and no obvious cause for infertility is found.
                    </li>
                    <li>
                      <strong>Mild endometriosis:</strong> The presence of endometrial tissue outside the uterus can affect implantation.
                    </li>
                    <li>
                      <strong>Cervical mucus problems:</strong> Thick or repugnant cervical mucus can obstruct the passage of sperm.
                    </li>
                    <li>
                      <strong>Ovulatory issues:</strong> If ovulation is irregular or absent, it may be difficult to time IUI effectively. Sometimes
                      fertility drugs may be used to stimulate ovulation.
                    </li>
                    <li>
                      <strong>Lifestyle factors:</strong> Maintaining a healthy lifestyle with a balanced diet, regular exercise, and stress
                      management can improve overall health and potentially increase IUI success rates.
                    </li>
                  </ol>
                  <p className='mt-4'>
                    <strong>Note:</strong> It is important to remember that IUI success rates vary depending on individual circumstances. Doctors can
                    provide personalized estimates based on your specific factors.
                  </p>
                </div>

                {/* Risk Factors */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Risk Factors Associated With IUI Treatment</b>
                  <p className='text-gray-700 mt-3'>
                    IUI is generally considered a safe procedure with minimal risks. But there are some factors which we have to be aware of:
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Infection:</strong> While the use of sterile instruments minimizes the risk, there's a slight chance of developing a
                      pelvic infection following IUI.
                    </li>
                    <li>
                      <strong>Multiple pregnancy:</strong> If fertility medications are used to stimulate ovulation, there's an increased risk of
                      conceiving multiples (twins, triplets, etc.). This is because more than one egg may be released and fertilized. Your doctor will
                      carefully monitor ovulation with blood tests and ultrasounds to try and prevent this.
                    </li>
                    <li>
                      <strong>Ovarian hyperstimulation syndrome (OHSS):</strong> This is a rare but serious side effect of fertility medications used
                      to stimulate ovulation. OHSS causes the ovaries to overreact and become enlarged and painful.
                    </li>
                    <li>
                      <strong>Discomfort:</strong> You might experience some mild cramping or spotting after the IUI procedure. These are usually
                      temporary and subside on their own.
                    </li>
                    <li>
                      <strong>Emotional stress:</strong> Infertility and fertility treatments can be emotionally challenging. IUI may not be
                      successful in every cycle, which can cause stress and disappointment. Talking to a counselor or therapist specializing in
                      infertility can be helpful.
                    </li>
                  </ul>
                  <p className='mt-4'>
                    <strong>Note:</strong> If you're considering IUI, discuss these potential risks with your doctor. They can address your specific
                    concerns and explain the likelihood of these risks in your case.
                  </p>
                </div>

                {/* Cost */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Cost of IUI Treatment in Gurgaon</b>
                  <p className='text-gray-700 mt-3'>
                    The cost of IUI treatment in Gurgaon ranges between ₹5,500 to ₹50,000 at Dr. Bindu Garg's Hospital.
                  </p>
                  <p className='text-gray-700 mt-2'>However, the following factors can affect the overall cost:</p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Facility fees:</strong> The clinic or hospital where you undergo IUI will have its own set of fees for the procedure,
                      including the use of its facilities, staff, and equipment.
                    </li>
                    <li>
                      <strong>Medications used:</strong> If you require medications to stimulate ovulation, these will add to the overall cost.
                    </li>
                    <li>
                      <strong>Number of IUI cycles required:</strong> Success rates with IUI are not as high as IVF, so you may need multiple cycles
                      of IUI to achieve pregnancy. The cost will increase with each additional cycle.
                    </li>
                    <li>
                      <strong>Donor sperm costs (if applicable):</strong> If you're using donor sperm, there will be additional fees associated with
                      sperm acquisition and processing.
                    </li>
                  </ul>
                  <p className='mt-4'>
                    <strong>Note:</strong> Based on the above factors IUI Costs may vary from patient to patient. So before starting the treatment
                    consult your doctor for the cost estimation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right-column */}
          <div className='w-full lg:w-4/12'>
            <CardWrapper subtitle='Schedule a Consultation' title='Book your Appointment!'>
              <CTAMiniForm />
            </CardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
