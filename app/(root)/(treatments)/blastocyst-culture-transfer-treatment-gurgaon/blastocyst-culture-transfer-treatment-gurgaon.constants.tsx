import CTAMiniForm from '@/components/forms/CTAMiniForm';
import { CardWrapper } from '@/components/misc';
import { HeroSectionProps, IFAQ, ITestimonialProps, WhyChooseUsDynamicProps } from '@/types';

export const heroSectionData: HeroSectionProps = {
  bgImage: '/images/banner/blastocyst-culture-and-transfer.webp',
  subtitle: 'Growing hope for a successful pregnancy',
  title: {
    normal: 'Blastocyst Culture and Transfer Treatment In',
    colored: 'Gurgaon',
  },
  description:
    'Blastocyst culture and transfer in Gurgaon is performed by Dr. Bindu Garg During IVF. It is a technique used in In Vitro Fertilization (IVF) that involves growing embryos in a controlled environment for several days before transferring them to the uterus.',
  primaryButtonText: 'Schedule Your Appointment',
  mobileImage: '/images/banner/Blastocyst_mv.webp',
  mobileImageAlt: 'Blastocyst Transfer Procedure with Text "Blastocyst culture and transfer Treatment" - Mobile Banner Image',
};

export const whyChooseUsData: WhyChooseUsDynamicProps = {
  title: 'Blastocyst Culture & Transfer in Gurgaon',
  description: `During the IVF procedure, Dr. Bindu Garg performed countless blastocyst cultures and transfers in Gurgaon at Neelaknth Hospital. She is the most trusted name in the reproductive treatment industry. Her commitment to being at the forefront of infertility treatment ensures that their patients receive the most advanced and effective care available.\n\nIf you are looking for IVF treatment in Gurgaon, Dr. Bindu is the best for blastocyst cultures and transfers with IVF procedure.`,
  pointsBefore: 'Here are a few reasons to consider Dr. Bindu for fertility treatment:',
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
      date: '2023-02-15',
      stars: 5,
      description:
        "After two failed IVF cycles with day 3 transfers, Dr. Bindu Garg recommended a blastocyst culture. It felt like a longer wait, but seeing healthy blastocysts develop gave me hope. This time, the transfer worked, and I'm now holding my beautiful baby girl!",
      person: 'Sarah',
      location: 'Gurgaon',
    },
    {
      date: '2023-03-10',
      stars: 5,
      description:
        "We opted for IVF with a donor egg and wanted the best chance for success. Blastocyst culture allowed for a more thorough selection process. We're so grateful for this technology; it helped us welcome our healthy son into the world.",
      person: 'Pankaj Verma',
      location: 'Gurgaon',
    },
    {
      date: '2023-03-25',
      stars: 5,
      description:
        "Miscarriages were heartbreaking. As per the suggestion of Bindu Mam for blastocyst transfer potentially choosing a stronger embryo helped me. The extra wait was nerve-wracking, but the transfer was successful, and I'm finally in my second trimester! Blastocyst culture gave us a reason to believe.",
      person: 'Sadhana Singh',
      location: 'Gurgaon',
    },
    {
      date: '2023-04-05',
      stars: 5,
      description:
        'My wife and I wanted to ensure the healthiest possible pregnancy. A blastocyst culture was necessary for the genetic testing (PGT) of our embryos. The wait was tough, but knowing we were transferring a genetically healthy embryo brought immense peace of mind.',
      person: 'Somnath Tripathi',
      location: 'Gurgaon',
    },
    {
      date: '2023-04-20',
      stars: 5,
      description:
        "Age wasn't on my side, so maximizing our chances for IVF success was crucial. Blastocyst transfer, with its focus on selecting stronger embryos, felt like the right approach. Thankfully, it worked! I'm so happy to be pregnant at this stage in my life.",
      person: 'Manoj Kanan',
      location: 'Gurgaon',
    },
  ],
};

export const faqsData: IFAQ[] = [
  {
    question: 'What is Blastocyst Culture and Transfer, and how does it differ from traditional embryo transfer?',
    answer:
      'Blastocyst Culture and Transfer involve cultivating embryos in the laboratory for an extended period until they reach the blastocyst stage before transferring them to the uterus. This is different from traditional embryo transfer, where embryos are typically transferred at earlier stages.',
  },
  {
    question: 'Why is Blastocyst Culture and Transfer recommended during fertility treatments?',
    answer:
      'Blastocyst Culture allows embryologists to select the healthiest embryos with a higher chance of implantation. By extending the culture period, it provides more time to observe embryo development, improving the likelihood of selecting the best-quality embryos for transfer.',
  },
  {
    question: 'Who is a suitable candidate for Blastocyst Culture and Transfer?',
    answer:
      'Blastocyst Culture is often recommended for couples undergoing in vitro fertilization (IVF) when there are multiple viable embryos. This method may be particularly beneficial for patients who have experienced previous IVF failures or those with specific fertility challenges.',
  },
  {
    question: 'What are the advantages of Blastocyst Culture and Transfer over traditional embryo transfer?',
    answer:
      "Blastocyst Culture offers several advantages, including a higher likelihood of selecting the most viable embryos, reducing the risk of multiple pregnancies, and providing a more natural timeline for embryo development. It also allows for better synchronization with the woman's natural menstrual cycle.",
  },
  {
    question: 'Are there any risks or considerations associated with Blastocyst Culture and Transfer?',
    answer:
      'While Blastocyst Culture is generally safe, there are specific considerations, such as the potential for fewer embryos reaching the blastocyst stage. Additionally, some patients may experience a delay in embryo transfer if not enough embryos reach the blastocyst stage. Discussing potential risks and benefits with your fertility specialist is crucial for informed decision-making.',
  },
];

export const ContentArea = () => {
  return (
    <section className='bg-gray-50'>
      <div className='padding-container-sm max-container'>
        {/* top-column */}
        <div className='w-full text-center'>
          <p className='section-subtitle mb-2'>The way embryos are handled and selected for implantation</p>
          <h2 className='section-title'>Know All About Blastocyst Culture & Transfer</h2>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 mt-10'>
          {/* left-column */}
          <div className='w-full lg:w-8/12 overflow-auto custom-scrollbar' style={{ maxHeight: '570px', height: '100%' }}>
            <div className='flex flex-col gap-8'>
              <div className='bg-white p-6 rounded-2xl shadow-sm'>
                {/* Overview */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>An Overview</b>
                  <p className='text-gray-700 mt-3'>
                    Blastocyst culture and transfer is a crucial step in in vitro fertilization (IVF) where fertilized eggs (embryos) are grown in a
                    lab for several days before being implanted in the uterus.
                    <br />
                    <br />
                    This extended culture allows for selecting the most viable embryos with the highest implantation potential. Studies have shown
                    that blastocyst transfer improves pregnancy rates compared to transferring embryos at earlier stages.
                    <br />
                    <br />
                    While a complex procedure, blastocyst culture and transfer have become standard practice in IVF due to their improved success
                    rates.
                  </p>
                </div>

                {/* What is Blastocyst */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>What is a Blastocyst?</b>
                  <p className='text-gray-700 mt-3'>
                    A blastocyst is a more developed stage of an embryo, reached around 5-6 days after fertilization. It consists of an outer cell
                    layer (trophoblast) that will form the placenta and an inner cell mass that develops into the fetus. Not all fertilized eggs
                    develop into blastocysts.
                  </p>

                  <h4 className='font-semibold mt-4'>Blastocyst Transfer</h4>
                  <p className='text-gray-700 mt-2'>
                    Blastocyst transfer is a step in in vitro fertilization (IVF) where a more developed embryo, called a blastocyst, is transferred
                    to the woman's uterus. Blastocysts are around 5 or 6 days old and have a higher chance of implanting in the lining of the uterus
                    compared to younger embryos.
                  </p>
                  <p className='text-gray-700 mt-3'>
                    <strong>Here's a breakdown:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-2'>
                    <li>
                      <strong>Blastocyst: </strong>A more mature embryo reached after 5-6 days of development.
                    </li>
                    <li>
                      <strong>Transfer: </strong>Placing the blastocyst in the uterus for potential implantation and pregnancy.
                    </li>
                  </ul>
                  <p className='text-gray-700 mt-2'>
                    This technique helps improve IVF success rates by selecting potentially stronger embryos and mimicking natural conception timing.
                  </p>

                  <h4 className='font-semibold mt-4'>Blastocyst Culture</h4>
                  <p className='text-gray-700 mt-2'>
                    Blastocyst culture refers to growing fertilized eggs (embryos) in a controlled laboratory environment for several days (typically
                    5-6 days) until they reach a more advanced stage called a blastocyst. This is different from traditional IVF where embryos might
                    be transferred on day 2 or 3.
                  </p>
                  <p className='text-gray-700 mt-3'>There are two main advantages to blastocyst culture:</p>
                  <ol className='list-decimal pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      <strong>Selection: </strong>By allowing embryos to develop for longer, blastocyst culture acts as a natural selection process.
                      Only the strongest and most viable embryos will continue developing to the blastocyst stage. This increases the chances of
                      transferring a healthy embryo with a higher implantation potential.
                    </li>
                    <li>
                      <strong>Timing: </strong>Blastocyst transfer mimics the natural timing of conception. In a natural pregnancy, the embryo reaches
                      the blastocyst stage around the time it implants in the uterus. Blastocyst transfer aims to synchronize the development of the
                      embryo with the lining of the womb for a potentially smoother implantation process.
                    </li>
                  </ol>
                </div>

                {/* Steps */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Blastocyst Culture and Transfer: A Step-by-Step Look</b>
                  <p className='text-gray-700 mt-3'>
                    <strong>Blastocyst culture and transfer involve several stages within the IVF process. Here's a breakdown:</strong>
                  </p>

                  <h4 className='font-semibold mt-4'>Blastocyst Culture (5-6 days)</h4>
                  <ol className='list-decimal pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>
                      Fertilization: Eggs are retrieved and fertilized with sperm either through IVF or ICSI (intracytoplasmic sperm injection).
                    </li>
                    <li>Early Cell Division: The fertilized eggs begin dividing, forming cell clusters.</li>
                    <li>Cleavage Stage (Day 2-3): The embryo continues dividing into multiple cells.</li>
                    <li>Morula Stage (Day 4): The embryo compacts into a solid ball of cells.</li>
                    <li>
                      Blastocyst Formation (Day 5-6): A fluid-filled cavity forms within the morula, transforming it into a blastocyst with an outer
                      cell layer and an inner cell mass. Embryologists monitor development throughout to identify the healthiest blastocyst(s).
                    </li>
                  </ol>

                  <h4 className='font-semibold mt-4'>Blastocyst Transfer (Day 5-6)</h4>
                  <ol className='list-decimal pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>Blastocyst Selection: The embryologist selects the blastocyst(s) with the most promising features for implantation.</li>
                    <li>Catheter Preparation: A thin, flexible catheter is loaded with a selected blastocyst.</li>
                    <li>
                      Cervical Insertion: The doctor carefully guides the catheter through the cervix and into the uterus using ultrasound for
                      visualization.
                    </li>
                    <li>Blastocyst Placement: The blastocyst is gently deposited within the lining of the uterus.</li>
                    <li>Recovery: After transfer, the patient rests comfortably for a short time before resuming normal activities.</li>
                  </ol>

                  <p className='text-gray-700 mt-4'>
                    <strong>Important Points to Know:</strong>
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-2 space-y-2'>
                    <li>Not all embryos develop into viable blastocysts.</li>
                    <li>The number of blastocysts transferred depends on various factors and is discussed with the doctor.</li>
                    <li>Blastocyst transfer is often a painless procedure and doesn't require anesthesia.</li>
                  </ul>
                </div>

                {/* Conditions */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Conditions When Blastocyst Transfer and Culture is Required</b>
                  <p className='text-gray-700 mt-3'>
                    Blastocyst transfer and culture aren't necessarily required for every IVF cycle, but there are several conditions where it can be
                    highly beneficial:
                  </p>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      <strong>Improved Pregnancy Rates: </strong>Studies suggest blastocyst transfer can lead to higher pregnancy success compared to
                      transferring embryos at earlier stages. This is because blastocyst culture allows for a more natural selection process,
                      identifying the most viable embryos.
                    </li>
                    <li>
                      <strong>Previous IVF Failures: </strong>If you've experienced unsuccessful IVF cycles with earlier embryo transfers (day 2 or
                      3), blastocyst culture might be recommended. The additional development time offers a clearer picture of embryo health,
                      potentially leading to a better selection for transfer.
                    </li>
                    <li>
                      <strong>Recurrent Pregnancy Loss: </strong>If you have a history of recurrent pregnancy loss, blastocyst transfer can be an
                      option. The more developed blastocyst might have a higher chance of successful implantation and ongoing pregnancy.
                    </li>
                    <li>
                      <strong>Limited Embryo Availability: </strong>With a limited number of viable embryos, blastocyst culture allows for a more
                      informed selection process. By letting embryos develop further, doctors can choose the one with the strongest potential for
                      implantation.
                    </li>
                    <li>
                      <strong>Preimplantation Genetic Testing (PGT): </strong>If you're undergoing PGT to screen embryos for genetic abnormalities,
                      blastocyst culture is usually required. This extended culture allows enough time for a small cell biopsy from the blastocyst and
                      subsequent genetic testing before transfer.
                    </li>
                    <li>
                      <strong>Age Factor: </strong>For women with advanced maternal age, blastocyst transfer can be an advantage. Selecting a more
                      developed embryo with higher implantation potential can improve pregnancy chances.
                    </li>
                    <li>
                      <strong>Uterine Lining Issues: </strong>In some cases, where the uterine lining might not be receptive at the typical transfer
                      time (day 2 or 3), blastocyst culture allows for additional time for optimal lining development before transferring the more
                      mature embryo.
                    </li>
                    <li>
                      <strong>Remember: </strong>The decision to use blastocyst transfer and culture is made on a case-by-case basis by your doctor
                      after considering your specific medical history and IVF goals. Discuss your options with your doctor to determine the most
                      suitable approach for your situation.
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Benefits of Blastocyst Transfer</b>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>
                      Increase Implantation Rates: Blastocysts may have a higher chance of implanting in the uterus compared to earlier-stage embryos.
                    </li>
                    <li>
                      Reduce Risk of Multiple Pregnancies: Fewer embryos (often just one) can be transferred with blastocyst transfer, lowering the
                      risk of multiples.
                    </li>
                    <li>
                      Improve Selection: Blastocyst culture allows for a more natural selection process, with only the strongest embryos reaching this
                      stage.
                    </li>
                    <li>
                      Better Timing: Blastocyst transfer can better synchronize with the uterus lining, potentially improving implantation success.
                    </li>
                  </ul>
                </div>

                {/* Who might consider */}
                <div className='mb-8'>
                  <b className='text-xl font-semibold text-primaryColor-900'>Who might consider Blastocyst Transfer?</b>
                  <ul className='list-disc pl-5 text-gray-700 mt-3 space-y-2'>
                    <li>Patients with a history of failed IVF cycles using earlier embryo transfer stages.</li>
                    <li>Women with a lower number of retrieved eggs.</li>
                    <li>Patients at higher risk of multiples.</li>
                    <li>Those seeking elective single embryo transfer (eSET).</li>
                  </ul>
                  <p className='text-gray-700 mt-4'>
                    During the IVF procedure, Dr. Bindu Garg performed countless blastocyst cultures and transfers in Gurgaon at Neelaknth Hospital.
                    She is the most trusted name in the reproductive treatment industry. Her commitment to being at the forefront of infertility
                    treatment ensures that their patients receive the most advanced and effective care available.
                    <br />
                    <br />
                    If you are looking for IVF treatment in Gurgaon, Dr. Bindu is the best for blastocyst cultures and transfers with IVF procedure.
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
