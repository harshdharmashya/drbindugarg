import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps, WhyChooseUsDynamicProps } from '@/types';

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/lah.webp',
  subtitle: 'Gifting Couples The Joy of Parenthood',
  title: {
    normal: 'Laser-Assisted Hatching (LAH) Treatment In',
    colored: 'Gurgaon',
  },
  description:
    "Get the best IUI treatment in Gurgaon by senior fertility specialist Dr. Bindu Garg. The IUI (intrauterine insemination) procedure helps to inject sperm directly into the uterus, allowing healthy sperm to get closer to the woman's egg.",
  primaryButtonText: 'Schedule Your Appointment',
  mobileImage: '/images/banner/laser_mv.webp',
  mobileImageAlt: 'Laser-Assisted Hatching Procedure with text "Laser-Assisted Hatching Treatment" Mobile Banner Image',
};

export const whyChooseUsData: WhyChooseUsDynamicProps = {
  title: 'Best IVF Doctor For Laser Assisted Hatching in Gurgaon',
  description: `Dr. Bindu Garg at Neelkanth IVF & Infertility Hospital in Gurgaon offers Laser Assisted Hatching (LAH) in Gurgaon as part of their In Vitro Fertilization (IVF) treatment. She also has a team of experienced fertility specialists who helped her to make fertility treatment procedures successful.`,
  pointsBefore: 'Here are a few more reasons to choose Dr. Bindu for Laser Assisted Hatching (LAH) treatment in Gurgaon.',
  points: [
    { bold: '42+ Years Of Excellent Experience', normal: '' },
    { bold: 'Head Of Infertility & IVF Department at Neelkanth Hospital', normal: '' },
    { bold: 'She has expertise in IVF, IUI, ICSI, Surrogacy, Gynecology-Obstetrics', normal: '' },
    { bold: 'Well-known among the top IVF experts in Gurgaon', normal: '' },
    { bold: 'Has 20000+ Deliveries performed which is highest in North India', normal: '' },
  ],
  imgUrl: '/images/why-choose-us.webp',
  imgAlt: 'Dr. Bindu Garg - Top Fertility Specialist in Gurgaon',
};

export const testimonialData: ITestimonialProps = {
  subtitle: "What Dr. Bindu Garg's Patients Say About Her",
  title: 'Patient Testimonials',
  testimonials: [
    {
      date: '2023-01-15',
      stars: 5,
      description:
        "Dr. Bindu and her team were very supportive during our IVF procedure. In our case laser assisted hatching was used with the IVF process and thank god! It was successful without any complications. Dr. Bindu's fertility treatment managemnt is very effective.",
      person: 'Sonam Chauhan',
      location: 'Gurgaon',
    },
    {
      date: '2023-01-20',
      stars: 5,
      description:
        'Thanks to Dr. Bindu Mam! She performed a successful IVF procedure for us and finally, we became parents. After all the diagnosis she told me that our IVF would be done with  Laser Assisted Hatching to make the high chance of a successful pregnancy. It worked and now we are parents.',
      person: 'Aanksha Sri',
      location: 'Gurgaon',
    },
    {
      date: '2023-01-25',
      stars: 5,
      description:
        'Best fertility doctor in Gurgaon for the treatment of infertile couples. Dr. Bindu is a hope for them, to become parents with her treatment.  I truly support her dedication to her hard work for her patient. She offers the most affordable IVF treatment in Gurgaon.',
      person: 'Diwakar Soni',
      location: 'Gurgaon',
    },
    {
      date: '2023-02-01',
      stars: 5,
      description:
        'Dr. Bindu Garg, one of the pioneers of IVF with Laser Assisted Hatching in Gurgaon. Consult her at Neelkanth Hospital for any kind of infertility treatment. Her treatment for infertility problems is very effective, she is also an expert in Gynecology, Obstetrics, IVF, IUI, and ICSI  procedures.I always recommend her.',
      person: 'Seema Singhal',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'What is Laser-Assisted Hatching (LAH) in the context of fertility treatment?',
    answer:
      'Laser-assisted hatching (LAH) is a laboratory technique used in assisted reproductive technologies (ART), particularly during in vitro fertilization (IVF). It involves the use of a laser to create a small opening in the outer shell (zona pellucida) of the embryo, facilitating its implantation in the uterus.',
  },
  {
    question: 'Why is Laser-Assisted Hatching recommended during fertility treatments?',
    answer:
      'Laser-assisted hatching may be recommended in certain cases to enhance the chances of embryo implantation. The procedure is often considered for embryos with a thick or hardened zona pellucida, as a weakened shell can make it easier for the embryo to break free and implant into the uterine lining.',
  },
  {
    question: 'Who are the potential candidates for Laser-Assisted Hatching?',
    answer:
      'Candidates for Laser-Assisted Hatching are often couples who have experienced repeated IVF failure or cases where the woman is of advanced maternal age. Additionally, embryos with a thicker zona pellucida may benefit from this procedure.',
  },
  {
    question: 'Is Laser-Assisted Hatching a safe procedure?',
    answer:
      'Laser-assisted hatching is generally considered safe when performed by experienced and skilled embryologists. However, like any medical procedure, there are associated risks, including the potential for damage to the embryo. Your fertility specialist will discuss the potential risks and benefits based on your specific situation.',
  },
  {
    question: 'Does Laser-Assisted Hatching guarantee a successful pregnancy?',
    answer:
      "While Laser-Assisted Hatching may enhance the chances of implantation, it does not guarantee a successful pregnancy. Success depends on various factors, including the overall health of the embryos, the woman's reproductive health, and other individual circumstances. It's crucial to have realistic expectations and discuss success rates with your fertility specialist.",
  },
  {
    question: 'Who can benefit from Laser Assisted Hatching (LAH)?',
    answer: {
      beforeList: 'Laser Assisted Hatching (LAH) may be recommended for those with:',
      list: ['Repeated IVF failure', 'Thicker zona pellucida', 'Older maternal age'],
    },
  },
  {
    question: 'Does Laser Assisted Hatching (LAH) improve IVF success rates?',
    answer:
      'Studies show LAH may slightly improve IVF success rates in some cases. Consult a fertility specialist in Gurgaon to discuss if LAH is right for you.',
  },
  {
    question: 'Is laser-assisted hatching safe for the embryo?',
    answer: 'LAH is a well-established procedure with a high safety record. The laser creates a precise opening, minimizing damage to the embryo.',
  },
];

export const ContentArea = () => {
  return (
    <section className='bg-gray-50'>
      <div className='padding-container-sm max-container'>
        {/* top-column */}
        <div className='w-full text-center'>
          <p className='section-subtitle mb-2'>An Advanced Treatment Procedure Used With IVF</p>
          <h2 className='section-title'>Laser Assisted Hatching Treatment Procedure</h2>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                {/* What is LAH */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>What is Laser-Assisted Hatching (LAH)?</b>
                  <p className='text-gray-700 mt-3'>
                    Laser-assisted hatching (LAH) is an advanced technique used with IVF to increase the chances of successful embryo implantation. If
                    you have experienced IVF failure for no apparent reason, assisted hatching may help by aiding the attachment of embryos to the
                    woman's womb.
                    <br />
                    <br />
                    With the LAH procedure, a highly precise infrared laser beam is used to gently remove the outer layer called the zona pellucida.
                    This modern approach minimizes embryo manipulation compared to traditional methods involving chemicals or mechanical processes.
                    <br />
                    <br />
                    During the IVF process, fertilized eggs are nurtured in the laboratory for a few days to aid their division and development into
                    embryos. These embryos are transferred into the woman's uterus to achieve pregnancy. Normally, the{' '}
                    <a className='primary-link' href='https://en.wikipedia.org/wiki/Zona_pellucida' target='_blank'>
                      zona pellucida
                    </a>{' '}
                    breaks down naturally for implantation.
                    <br />
                    <br />
                    However, in some cases, the zona pellucida becomes too rigid, making it difficult for the embryo to rupture and implant. This may
                    cause female infertility. Laser-assisted hatching creates a small crack in the layer before implantation of the embryo,
                    facilitating successful implantation and increasing the chances of pregnancy.
                  </p>
                </div>

                {/* Need for LAH */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>The Need for the Laser-Assisted Hatching (LAH): When & Why</b>
                  <p className='text-gray-700 mt-3'>
                    Laser-assisted hatching (LAH) isn't used in every in vitro fertilization (IVF) cycle, but it can be a beneficial tool in certain
                    situations. Here's a breakdown of when LAH might be necessary:
                  </p>
                  <h4 className='font-semibold mt-4'>Thickened Zona Pellucida:</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>The main reason for LAH is a thick or hardened zona pellucida. This is the protective shell surrounding the embryo.</li>
                    <li>A healthy embryo naturally hatches from the zona pellucida before implantation in the uterus.</li>
                    <li>
                      If the zona pellucida is too thick, it can hinder this hatching process, reducing the chances of implantation and successful
                      pregnancy.
                    </li>
                    <li>LAH creates a small opening in the zona pellucida, assisting the embryo in hatching at the right time.</li>
                  </ul>
                  <h4 className='font-semibold mt-4'>Other Potential Needs for LAH:</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      <strong>Advanced Maternal Age:</strong> As women age, the zona pellucida may become less elastic and more difficult for the
                      embryo to break through.
                    </li>
                    <li>
                      <strong>Multiple IVF Failure:</strong> If you've undergone previous IVF cycles with good-quality embryos that haven't been
                      implanted, LAH might be considered in subsequent cycles.
                    </li>
                    <li>
                      <strong>High FSH Levels:</strong> Elevated levels of Follicle follicle-stimulating hormone (FSH) can be associated with a
                      thicker zona pellucida.
                    </li>
                  </ul>
                </div>

                {/* Steps */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Steps Involve in Laser Assisted Hatching (LAH) Procedure</b>
                  <p className='text-gray-700 mt-3'>
                    The Laser Assisted Hatching (LAH) procedure is a precise and delicate process performed on embryos during In Vitro Fertilization
                    (IVF) cycles. Here's a breakdown of the steps involved:
                  </p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-4'>
                    <li>
                      <h4 className='font-semibold'>Preparation (Embryo Selection)</h4>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          After fertilization has occurred and the embryos have begun to develop (usually around 3 days), a skilled embryologist will
                          carefully examine them under a high-powered microscope.
                        </li>
                        <li>Only healthy embryos at a specific stage of development (cleavage stage) are considered for LAH.</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className='font-semibold'>Positioning and Visualization</h4>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          The chosen embryo is gently held in place using specialized equipment within the incubator to minimize handling time outside
                          the ideal environment.
                        </li>
                        <li>The embryologist will meticulously position the embryo for optimal laser application under the microscope.</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className='font-semibold'>Laser Application</h4>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>
                          A specialized infrared laser is used to create a small opening in the zona pellucida, the tough outer shell surrounding the
                          embryo.
                        </li>
                        <li>
                          The laser beam is precisely focused and controlled to ensure minimal contact time and avoid harming the delicate embryo
                          itself. The zona pellucida is targeted at a specific location away from the embryo.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className='font-semibold'>Completion and Monitoring</h4>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>The entire LAH procedure typically takes only a few seconds, minimizing any stress on the embryo.</li>
                        <li>After creating the breach, the embryologist will closely examine the embryo to ensure its health and viability.</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className='font-semibold'>Post-LAH Care</h4>
                      <ul className='list-disc pl-5 mt-2 space-y-2'>
                        <li>The embryo is then returned to the incubator to continue its development under controlled conditions.</li>
                        <li>
                          The embryologist will continue to monitor the embryo's progress for potential transfer into the uterus during the IVF cycle.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <p className='text-gray-700 mt-4'>
                    <strong>Note:</strong> It's crucial to note that LAH is not routinely performed in every IVF cycle. The decision to utilize LAH is
                    made by the fertility specialist in consultation with the couple based on factors like embryo quality, zona pellucida thickness,
                    and past IVF experiences.
                  </p>
                </div>

                {/* Success Factors */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>
                    Factors That Can Affect the Success of Laser Assisted Hatching Procedure
                  </b>
                  <p className='text-gray-700 mt-3'>
                    Laser Assisted Hatching (LAH) is a helpful procedure in IVF, but its success can be influenced by various factors mentioned below:
                  </p>
                  <h4 className='font-semibold mt-4'>Embryo Characteristics</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      <strong>Zona Pellucida Thickness:</strong> The primary purpose of LAH is to address a thick or hardened zona pellucida. If the
                      zona pellucida isn't significantly thickened, LAH might not offer a substantial benefit.
                    </li>
                    <li>
                      <strong>Embryo Quality:</strong> The overall health and developmental stage of the embryo play a crucial role. LAH is unlikely
                      to improve the chances of a poor-quality embryo implanting successfully.
                    </li>
                  </ul>

                  <h4 className='font-semibold mt-4'>LAH Technique</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      <strong>Precision of Laser:</strong> The success of LAH relies on creating a precise opening in the zona pellucida without
                      damaging the embryo. A skilled embryologist and well-maintained laser equipment are essential.
                    </li>
                    <li>
                      <strong>Location of Hatch:</strong> The ideal location of the opening created by the laser can influence the embryo's hatching
                      process. Experienced embryologists aim for specific zones on the zona pellucida.
                    </li>
                  </ul>

                  <h4 className='font-semibold mt-4'>Other IVF Factors</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      <strong>Endometrial Receptivity:</strong> A healthy uterine lining receptive to implantation is critical for pregnancy success,
                      regardless of LAH.
                    </li>
                    <li>
                      <strong>Underlying Fertility Issues:</strong> Underlying causes of infertility beyond embryo hatching difficulties can still
                      impact implantation success.
                    </li>
                  </ul>

                  <h4 className='font-semibold mt-4'>General Considerations</h4>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      <strong>LAH is not a guarantee:</strong> While LAH can improve implantation rates in some cases, it's not a guaranteed method
                      for achieving pregnancy.
                    </li>
                    <li>
                      <strong>Limited Research:</strong> Ongoing research is needed to fully understand the effectiveness of LAH in all IVF scenarios.
                    </li>
                    <li>
                      <strong>Individualized Approach:</strong> The decision to use LAH should be made on a case-by-case basis by your fertility
                      specialist considering your specific situation.
                    </li>
                  </ul>

                  <p className='text-gray-700 mt-4'>
                    <strong>Note:</strong> By understanding these factors that can affect LAH success, you can have a more informed discussion with
                    your doctor about whether LAH might be a suitable option for your IVF cycle.
                  </p>
                </div>

                {/* Risk Factors */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Risk Factors Associated With Laser Assisted Hatching (LAH)</b>
                  <p className='text-gray-700 mt-3'>
                    While Laser Assisted Hatching (LAH) is generally considered a safe procedure, there are some potential risks to be aware of:
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Accidental Embryo Damage:</strong> The most concerning risk is accidental damage to the embryo during the LAH procedure.
                      The laser beam, though precise, can potentially harm the delicate embryo if not controlled exceptionally well. This is why the
                      experience and skill of the embryologist performing LAH are crucial.
                    </li>
                    <li>
                      <strong>Premature Hatching:</strong> LAH creates an opening in the zona pellucida, and there's a slight possibility that the
                      embryo might hatch too early due to the breach. Ideally, the embryo hatches on its own at the right time during implantation in
                      the uterus. Premature hatching could reduce implantation success.
                    </li>
                    <li>
                      <strong>Limited Long-Term Data:</strong> LAH is a relatively new technique, and long-term data on its potential effects on
                      embryo development and pregnancy outcomes is still being gathered.
                    </li>
                  </ul>
                  <p className='text-gray-700 mt-4'>
                    <strong>Here are some additional points to consider:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>The likelihood of these risks occurring is generally low.</li>
                    <li>A skilled embryologist using advanced equipment can minimize these risks.</li>
                    <li>The potential benefits of LAH, such as improved implantation rates, may outweigh the risks for some patients.</li>
                  </ul>
                  <p className='text-gray-700 mt-4'>
                    <strong>Note:</strong> It's important to discuss these potential risks with your fertility specialist during the consultation
                    process for LAH. They can address your specific concerns and help you determine if LAH is the right option for your situation.
                  </p>
                </div>

                {/* Advantages */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>What are the advantages of Laser Assisted Hatching?</b>
                  <p className='text-gray-700 mt-3'>
                    Laser Assisted Hatching (LAH) is a technique used in assisted reproductive technology to increase the chances of implantation,
                    pregnancy, and birth rates. LAH is superior to other forms of assisted hatching such as chemical and manual, thanks to various
                    advantages:
                  </p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      LAH is recommended by experts for its significant benefit of increasing the chances of implantation, pregnancy, and birth rates.
                    </li>
                    <li>LAH is gentle and safe, with no adverse effects on the embryo.</li>
                    <li>LAH involves less manual handling of the embryo, hence reducing the risk of any damage to the embryo.</li>
                    <li>LAH provides quick and accurate control over the drilling of the shell opening.</li>
                    <li>LAH has a rare or no risk of congenital disabilities in babies.</li>
                  </ol>
                  <p className='text-gray-700 mt-4'>
                    Visit Neelkanth IVF Hospital, Gurgaon, and book an appointment with our IVF specialist Dr. Bindu Garg to discuss your pregnancy
                    concerns and receive the most effective treatment.
                  </p>
                </div>

                {/* LAH in Gurgaon */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Laser Assisted Hatching (LAH) in Gurgaon</b>
                  <p className='text-gray-700 mt-3'>
                    Visit Neelkanth IVF and Infertility Hospital in Gurgaon and consult Dr. Bindu Garg, one of the most successful IVF doctors. At her
                    hospital, she uses laser-assisted hatching procedures with IVF when it is necessary.
                  </p>
                  <p className='text-gray-700 mt-3'>
                    Dr. Bindu Garg has 42+ years of experience in ART procedures, reproductive health treatment, and gynecology. She is the founder of
                    Neelkanth IVF & Infertility Hospital. She has done more than 20,000 + successful deliveries during her career and performed
                    thousands of procedures related to IVF, IUI, ICSI, obstetrics, and gynecology.
                  </p>
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
