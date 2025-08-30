import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps, WhyChooseUsDynamicProps } from '@/types';

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/icsi.webp',
  subtitle: 'Consult Top Fertility Experts To Start Your Parenthood',
  title: {
    normal: 'ICSI (Intracytoplasmic Sperm Injection) Treatment In',
    colored: 'Gurgaon',
  },
  description:
    'Get advanced ICSI (intracytoplasmic sperm injection) treatment in Gurgaon by Dr. Bindu Garg. ICSI helps couples struggling with infertility conceive and become parents by increasing the chances of fertilization.',
  primaryButtonText: 'Schedule Your Appointment',
  mobileImage: '/images/banner/icsi_mv.webp',
  mobileImageAlt: 'ICSI Procedure with text "ICSI (Intracytoplasmic Sperm Injection) Treatment" - Mobile Banner Image',
};

export const whyChooseUsData: WhyChooseUsDynamicProps = {
  title: 'Top Fertility Doctor for ICSI Treatment in Gurgaon?',
  description: `Dr. Bindu Garg is one of the top IVF specialists and gynecologist-obstetricians in Gurgaon who has expertise in all kinds of ART procedures like IVF, IUI, and ICSI treatments along with other fertility treatments. She has performed 20000+ deliveries through IVF, normal and C-section which is the highest in North India by a doctor. You can also know about the IVF treatment in Gurgaon provided by her.`,
  pointsBefore: 'Here are a few more reasons to choose Dr. Bindu for ICSI treatment in Gurgaon.`,',
  points: [
    { bold: '42+ Years Of Excellent Experience', normal: '' },
    { bold: '20000+ Babies Delivered', normal: '' },
    { bold: 'Expertise in IVF, IUI, ICSI, Surrogacy, Gynecology-Obstetrics', normal: '' },
    { bold: 'Renowned Obstetrician & Gynecologist', normal: '' },
    { bold: 'Awarded With Many Honors', normal: '' },
  ],
  imgUrl: '/images/about-us.webp',
  imgAlt: 'Dr. Bindu Garg - Top Fertility Specialist in Gurgaon',
};

export const testimonialData: ITestimonialProps = {
  subtitle: "What Dr. Bindu Garg's Patients Say About Her",
  title: 'Patient Testimonials',
  testimonials: [
    {
      date: '2024-01-01',
      stars: 5,
      description:
        "We had been trying to conceive for over 5 years and had almost given up hope. Then we heard about ICSI treatment by Dr. Bindu Garg in Gurgaon. She is very supportive and explains the entire process clearly. We're grateful to share that thanks to ICSI, we are now proud parents of a beautiful baby girl.",
      person: 'Meena & Rajiv',
      location: 'Gurgaon',
    },
    {
      date: '2023-12-01',
      stars: 5,
      description:
        'We tried IUI treatment several times without success. Then Dr. Bindu Garg recommended ICSI and this time it worked! We are so grateful for their expertise and guidance. ICSI gave us the gift of parenthood that we had longed for.',
      person: 'Priya Anand',
      location: 'Gurgaon',
    },
    {
      date: '2023-11-01',
      stars: 5,
      description:
        'At my age, I thought I had missed my chance to have children. But thanks to the advanced ICSI techniques at Neelkanth Hospital, I was able to conceive and deliver a healthy baby boy. The doctors were very patient with my concerns and ensured I received the best possible care throughout the journey.',
      person: 'Kavita',
      location: 'Gurgaon',
    },
    {
      date: '2023-10-01',
      stars: 5,
      description:
        "I faced male infertility issues, and ICSI was our ray of hope. Dr. Bindu Garg was very transparent about the success rates and potential risks. We're so glad we chose them for our ICSI treatment. Today, our family feels complete thanks to their expertise.",
      person: 'Manish Kumar',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'What is ICSI treatment?',
    answer:
      'ICSI, or Intracytoplasmic Sperm Injection, is an advanced assisted reproductive technique used in In Vitro Fertilization (IVF). During ICSI, a single sperm is directly injected into an egg to achieve fertilization.',
  },
  {
    question: 'Who is a good candidate for ICSI treatment?',
    answer: {
      beforeList: 'ICSI can be beneficial for couples experiencing:',
      list: [
        'Male infertility issues like low sperm count, poor sperm motility, or abnormal sperm morphology.',
        'Blocked fallopian tubes in the female partner.',
        'Unexplained infertility after other fertility treatments like IUI (Intrauterine Insemination).',
      ],
    },
  },
  {
    question: 'What is the success rate of ICSI?',
    answer:
      'ICSI success rates depend on various factors like age, cause of infertility, and overall health. However, typical ICSI success rates can range from 30-70% per cycle. It is important to discuss individual success rates with your doctor.',
  },
  {
    question: 'What is the ICSI treatment process like?',
    answer: {
      beforeList: 'The ICSI process typically involves the following steps:',
      list: [
        'Ovulation stimulation and egg retrieval',
        'Sperm collection',
        'Sperm selection and injection (ICSI procedure)',
        'Embryo culture and monitoring',
        'Embryo transfer',
        'Pregnancy test',
      ],
    },
  },
  {
    question: 'What are the potential side effects of ICSI?',
    answer: {
      beforeList: 'ICSI is a relatively safe procedure, but like any medical intervention, it may have some side effects. These can include:',
      list: [
        'Mild discomfort during egg retrieval',
        'Ovarian Hyperstimulation Syndrome (OHSS) in some cases',
        'Multiple pregnancy (more likely with embryo transfer)',
      ],
    },
  },
  {
    question: 'What are the ethical considerations of ICSI?',
    answer:
      'ICSI raises some ethical questions, particularly regarding the selection of sperm and potential genetic issues. Discussing these concerns with your doctor can be helpful.',
  },
  {
    question: 'What are the alternatives to ICSI treatment?',
    answer: {
      beforeList: 'Alternatives to ICSI can include:',
      list: [
        'IUI (Intrauterine Insemination) for milder male factor infertility',
        'Standard IVF with conventional fertilization methods',
        'Using donor sperm',
      ],
    },
  },
  {
    question: 'Where can I find more information about ICSI treatment?',
    answer: {
      beforeList: 'You can find more information about ICSI from trusted sources like:',
      list: [
        'The American Society for Reproductive Medicine <a class="primary-link" href="https://www.asrm.org/" target="_blank">(ASRM)</a>:',
        'The National Institutes of Health <a class="primary-link" href="https://www.nih.gov/" target="_blank">(NIH)</a>:',
        'Additionally, consulting with a qualified fertility specialist can provide personalized information and answer your specific questions.',
      ],
    },
  },
  {
    question: 'Who are the best ICSI treatment doctors in Gurgaon?',
    answer: {
      beforeList: 'Best Intrauterine Inseminations Doctors In Gurgaon-',
      list: [
        'Dr. Bindu Garg',
        'Dr. Parul Jain',
        'Dr. Meenakshi Sauhta',
        'Dr. Deepika Tiwari',
        'Dr. Pooja Mehta',
        'Dr. Anu Sidana',
        'Dr. Arti Gupta',
        'Dr. Anjali Bugga',
        'Dr. Pallavi Vasal',
      ],
    },
  },
  {
    question: 'What is the cost of ICSI treatment in Gurgaon?',
    answer:
      'The cost of ICSI treatment depends on various factor. However In Gurgaon ICSI cost ranges between ₹1,85,000 to ₹2,60,000 but in some cases it may be higher.',
  },
];

export const ContentArea = () => {
  return (
    <section className='bg-gray-50'>
      <div className='padding-container-sm max-container'>
        {/* top-column */}
        <div className='w-full text-center'>
          <p className='section-subtitle mb-2'>Here Our ICSI Experts Help You Start Parenthood</p>
          <h2 className='section-title'>Know All About ICSI Treatment</h2>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                {/* About ICSI */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>
                    What is ICSI (Intracytoplasmic Sperm Injection) in Fertility Treatment?
                  </b>
                  <p className='text-gray-700 mt-3'>
                    ICSI, or Intracytoplasmic Sperm Injection, is a specialized technique used in conjunction with In Vitro Fertilization (IVF) to
                    achieve fertilization. It's a boon for couples struggling with infertility, particularly due to male-factor issues.
                  </p>
                  <p className='text-gray-700 mt-2'>
                    ICSI acts as a bridge, allowing couples facing male infertility to achieve fertilization – a crucial step towards a successful
                    pregnancy and parenthood.
                  </p>
                  <p className='text-gray-700 mt-2'>
                    However, it's important to note that ICSI is part of the IVF process, which involves stimulating egg production, egg retrieval,
                    embryo development, and implantation. Its success rates depend on various factors beyond fertilization, including egg quality,
                    age, and underlying health conditions.
                  </p>
                </div>

                {/* Conditions */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Conditions When ICSI Treatment is Recommended</b>
                  <p className='text-gray-700 mt-3'>
                    ICSI is the most effective process for couples facing infertility, but it's not a one-size-fits-all solution. Here are some common
                    conditions where ICSI treatment might be recommended by a fertility specialist:
                  </p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <strong>Male-factor infertility:</strong> This is the primary reason for ICSI. It includes conditions like:
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Low sperm count:</strong> When the number of sperm in a man's ejaculate is significantly lower than normal.
                        </li>
                        <li>
                          <strong>Poor sperm motility:</strong> When sperm have weak movement and difficulty reaching the egg.
                        </li>
                        <li>
                          <strong>Abnormal sperm morphology:</strong> When sperm have an irregular shape that hinders fertilization.
                        </li>
                        <li>
                          <strong>Blockages:</strong> Blockages in the male reproductive tract that prevent sperm from reaching the ejaculate.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Previous failed IVF cycles:</strong> If traditional IVF attempts with conventional sperm injection haven't resulted in
                      fertilization, ICSI can be an option for the next cycle.
                    </li>
                    <li>
                      <strong>Certain genetic conditions:</strong> In some cases, ICSI might be recommended to avoid passing on genetic diseases to
                      offspring.
                    </li>
                    <li>
                      <strong>Unexplained infertility:</strong> When the cause of infertility remains unclear after evaluation, ICSI may be suggested
                      alongside other techniques to improve the chances of conception.
                    </li>
                  </ol>
                  <p className='text-gray-700 mt-4'>
                    <strong>
                      It's important to remember that a consultation with a fertility specialist is crucial to determine the most suitable course of
                      treatment.
                    </strong>{' '}
                    They will consider your circumstances, including the cause of infertility, medical history, and overall health, before
                    recommending ICSI or other fertility treatments.
                  </p>
                </div>

                {/* Steps */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Steps Involve in the ICSI Procedure</b>
                  <p className='text-gray-700 mt-3'>
                    ICSI is a multi-step process performed within an IVF cycle. Here's a breakdown of the key steps:
                  </p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <strong>Preparation (for both partners):</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Fertility Evaluation:</strong> Both partners undergo tests to assess their overall fertility health. This may
                          involve blood tests, hormone evaluations, and ultrasounds.
                        </li>
                        <li>
                          <strong>Ovulation Induction:</strong> The female partner might take medications to stimulate the ovaries and produce
                          multiple mature eggs, increasing the chances of successful fertilization.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Sperm Retrieval:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Semen Analysis:</strong> A semen sample is analyzed to assess sperm count, motility, and morphology.
                        </li>
                        <li>
                          <strong>Sperm Collection:</strong> The sperm can be collected through ejaculation or surgically retrieved directly from the
                          testicles using techniques like TESA (testicular sperm aspiration) or MESA (microsurgical epididymal sperm aspiration) if
                          ejaculation is not possible.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Egg Retrieval:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Egg Maturation Monitoring:</strong> Follicle growth is monitored using ultrasounds to determine the optimal time to
                          retrieve mature eggs.
                        </li>
                        <li>
                          <strong>Egg Retrieval Procedure:</strong> Using a guided needle, mature eggs are retrieved from the woman's ovaries under
                          light sedation.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>The ICSI Process (in the lab):</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Sperm Preparation:</strong> Healthy sperm with good motility are selected and isolated using specialized techniques.
                        </li>
                        <li>
                          <strong>Egg Preparation:</strong> Mature eggs are carefully selected for injection.
                        </li>
                        <li>
                          <strong>Microinjection:</strong> An embryologist uses a microscopic needle to inject a single, healthy sperm directly into
                          the cytoplasm of each mature egg.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Fertilization and Embryo Development:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Fertilization Check:</strong> After injection, the eggs are monitored for signs of fertilization (development of an
                          embryo).
                        </li>
                        <li>
                          <strong>Embryo Culture:</strong> Fertilized eggs (embryos) are carefully monitored and cultured in a controlled laboratory
                          environment for several days, allowing them to develop.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Embryo Transfer and Pregnancy:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Embryo Selection:</strong> One or more healthy embryos are chosen for transfer to the woman's uterus based on
                          specific criteria.
                        </li>
                        <li>
                          <strong>Embryo Transfer:</strong> The chosen embryos are carefully placed into the uterus using a thin catheter under
                          ultrasound guidance.
                        </li>
                        <li>
                          <strong>Pregnancy Test:</strong> After a designated waiting period, a pregnancy test is performed to check for implantation
                          and potential pregnancy.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <p className='text-gray-700 mt-4'>
                    <strong>
                      It's important to note that ICSI is a complex procedure with each step requiring expertise and careful monitoring.
                    </strong>{' '}
                    The success rate can vary depending on various factors. Consulting a qualified fertility specialist can provide more personalized
                    information about the ICSI process and your specific situation.
                  </p>
                </div>

                {/* After ICSI */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>After ICSI Procedure</b>
                  <p className='text-gray-700 mt-3'>
                    Following the ICSI procedure, which is part of the overall IVF process, there are some key things to expect:
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Recovery:</strong> You'll likely experience some mild cramping or discomfort after the egg retrieval procedure.
                      Medications can help manage any discomfort.
                    </li>
                    <li>
                      <strong>Post-procedure Instructions:</strong> Your doctor will provide specific instructions regarding medications, activity
                      levels, and follow-up appointments.
                    </li>
                    <li>
                      <strong>Waiting Period:</strong> After embryo transfer, there's a waiting period of typically 7-10 days before a pregnancy test
                      can be performed to detect implantation. This can be an emotionally demanding time.
                    </li>
                    <li>
                      <strong>Pregnancy Test:</strong> A blood test or home pregnancy test will be used to check for pregnancy. A positive test
                      indicates successful implantation and the beginning of pregnancy.
                    </li>
                    <li>
                      <strong>Prenatal Care:</strong> The female partner might take medications to stimulate the ovaries and produce multiple mature
                      eggs, increasing the chances of successful fertilization. If the pregnancy test is positive, prenatal care will begin to monitor
                      the developing baby's health.
                    </li>
                  </ul>

                  <h4 className='text-lg font-semibold text-primaryColor-900 mt-6'>If the ICSI cycle is unsuccessful</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>It can be emotionally challenging. Talking to your doctor or a therapist can help you cope with these emotions.</li>
                    <li>
                      You can discuss the possibility of another IVF cycle with or without ICSI, depending on the reasons for the unsuccessful cycle.
                    </li>
                  </ul>

                  <p className='text-gray-700 mt-4'>
                    <strong>Here are some additional points to consider:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Lifestyle Changes:</strong> Your doctor may recommend healthy lifestyle changes such as maintaining a balanced diet,
                      getting regular exercise, and managing stress to improve overall health and potentially increase the chances of a successful
                      pregnancy.
                    </li>
                    <li>
                      <strong>Emotional Support:</strong> Fertility treatments can be emotionally challenging. Having a strong support system from
                      your partner, family, or friends can be invaluable.
                    </li>
                    <li>
                      <strong>Support Groups:</strong> Connecting with support groups for people undergoing fertility treatments can provide a sense
                      of community and understanding.
                    </li>
                  </ul>
                  <p className='text-gray-700 mt-4'>
                    Remember, consulting with your doctor throughout the process is crucial. They can address any questions or concerns you may have
                    and provide personalized guidance based on your specific situation.
                  </p>
                </div>

                {/* Success Factors */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Factors That Can Affect the Success Of ICSI Treatment</b>
                  <p className='text-gray-700 mt-3'>
                    While ICSI is a powerful tool for achieving fertilization, several factors can influence its success rate. Here's a breakdown of
                    some key influences:
                  </p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <strong>Semen Quality:</strong>
                      <ul className='list-disc pl-5 mt-2'>
                        <li>
                          Sperm count, motility, and morphology: The quality of sperm used for injection plays a significant role. Lower sperm count,
                          motility, or abnormal morphology can decrease the chances of successful fertilization with ICSI.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Egg Quality:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Age:</strong> The woman's age is a major factor. Younger women tend to have higher-quality eggs, leading to better
                          fertilization and pregnancy rates.
                        </li>
                        <li>
                          <strong>Number of mature eggs retrieved:</strong> Having a good number of mature eggs retrieved increases the chance of
                          finding healthy eggs for injection.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Embryo Development:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Fertilization rate:</strong> Even with ICSI, not all injected eggs will fertilize. The number of embryos that
                          develop can impact the chance of a successful pregnancy.
                        </li>
                        <li>
                          <strong>Embryo quality:</strong> The health and developmental potential of the resulting embryos are crucial for successful
                          implantation and pregnancy.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Other Factors:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          <strong>Underlying medical conditions:</strong> Certain medical conditions in either partner can affect fertility and
                          pregnancy outcomes.
                        </li>
                        <li>
                          <strong>Lifestyle habits:</strong> Smoking, excessive alcohol consumption, and unhealthy weight can impact egg and sperm
                          quality, influencing ICSI success.
                        </li>
                        <li>
                          <strong>Experience of the fertility clinic and embryologists:</strong> The expertise and experience of the clinic and the
                          embryologists performing the procedure can influence success rates.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <p className='text-gray-700 mt-4'>
                    <strong>Important to Remember:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>ICSI success rates vary depending on these factors and are typically quoted as fertilization rates and pregnancy rates.</li>
                    <li>Fertilization rates refer to the percentage of eggs that successfully fertilize after ICSI injection.</li>
                    <li>Pregnancy rates refer to the percentage of cycles that result in a live birth.</li>
                    <li>
                      Consulting a qualified fertility specialist is essential to understand your situation, assess the factors influencing your ICSI
                      success, and discuss realistic success rate expectations.
                    </li>
                  </ul>
                </div>

                {/* Risk Factors */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Risk Factors Associated With ICSI Treatment</b>
                  <p className='text-gray-700 mt-3'>
                    While ICSI is a successful technique for many couples facing infertility, it's important to be aware of some potential risks
                    associated with the procedure. Here's a breakdown of some key points:
                  </p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <strong>Minor Risks:</strong>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          Egg Damage: During egg retrieval, there's a slight possibility of damaging a small number of eggs with the needle used for
                          aspiration.
                        </li>
                        <li>Infection: As with any medical procedure, there's a small risk of infection after egg retrieval or embryo transfer.</li>
                        <li>
                          Ovarian Hyperstimulation Syndrome (OHSS): Medications used to stimulate egg production can rarely lead to OHSS, causing
                          bloating, abdominal pain, and other symptoms.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Multiple Pregnancy:</strong>
                      <ul className='list-disc pl-5 mt-2'>
                        <li>
                          ICSI is often used alongside IVF, which increases the chances of multiple pregnancies (twins, triplets) due to transferring
                          multiple embryos. This can lead to a higher risk of complications like premature birth and low birth weight.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Birth Defects:</strong>
                      <ul className='list-disc pl-5 mt-2'>
                        <li>
                          Some studies suggest a slightly increased risk of certain birth defects, such as chromosomal abnormalities, in children
                          conceived through ICSI compared to natural conception. However, the reasons for this are not fully understood, and the
                          overall risk remains relatively low.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Emotional Considerations:</strong>
                      <ul className='list-disc pl-5 mt-2'>
                        <li>
                          Fertility treatments can be emotionally challenging. ICSI cycles can be particularly demanding due to the process involved
                          and the possibility of unsuccessful attempts. Counseling or support groups can help manage these emotions.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>

                {/* Cost */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Cost of ICSI Treatment in Gurgaon</b>
                  <p className='text-gray-700 mt-3'>The exact cost of ICSI treatment in Gurgaon can vary depending on several factors, including:</p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>The specific fertility clinic:</strong> Different clinics may have varying costs based on their experience, reputation,
                      and facilities.
                    </li>
                    <li>
                      <strong>The complexity of your case:</strong> Factors like underlying medical conditions or the number of IVF cycles required
                      can influence the cost.
                    </li>
                    <li>
                      <strong>The type of medications used:</strong> The cost of medications used for ovarian stimulation can vary.
                    </li>
                    <li>
                      <strong>Additional procedures required:</strong> Procedures like assisted hatching or preimplantation genetic testing (PGT) may
                      add to the overall cost.
                    </li>
                  </ul>
                  <p className='text-gray-700 mt-4'>
                    However, here's a general idea of the cost range for ICSI treatment in Gurgaon ranges between ₹1,85,000 to ₹2,60,000 but in some
                    cases can be increased.
                  </p>
                  <p className='text-gray-700 mt-4'>
                    <strong>Here are some resources that might help you get a better estimate for ICSI treatment in Gurgaon:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Contacting fertility clinics directly:</strong> Most fertility clinics in Gurgaon will have patient care coordinators
                      who can answer your questions about costs and procedures.
                    </li>
                    <li>
                      <strong>Online resources:</strong> Websites of fertility clinics in Gurgaon may have information about their treatment packages
                      and costs. However, it's always best to confirm with the clinic directly for the latest pricing.
                    </li>
                  </ul>
                  <p className='text-gray-700 mt-4'>
                    <strong>Remember:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>The cost I mentioned is an estimate and may not be a definitive figure.</li>
                    <li>
                      Consulting directly with fertility clinics in Gurgaon is the most reliable way to get an accurate cost quote for your specific
                      situation.
                    </li>
                  </ul>
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
