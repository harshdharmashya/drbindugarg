import EnquiryModal from '@/components/misc/EnquiryModal';

const DoctorContentPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-center mb-6'>Reason to Choose the Best IVF Doctor in Delhi for Fertility Treatment</h2>
      <p className='text-lg text-gray-700 mb-4'>
        Delhi has some of the best fertility doctors and state-of-the-art IVF clinics. With a combination of experienced specialists and advanced
        medical technologies, the city offers high success rates and affordable treatment options for couples facing infertility.
      </p>

      <p className='text-lg text-gray-700 mb-4'>
        Choosing the best doctor for ivf in delhi is important for successful treatment outcomes. Here are the key factors to consider:
      </p>
      <h3 className='text-xl font-semibold mt-4 mb-2'> 1. Qualifications and Expertise:</h3>
      <p className='my-4 text-gray-700 '>
        The doctor is certified in reproductive medicine and has special training in infertility treatment. A well-qualified doctor with the latest
        knowledge can provide advanced and effective solutions.
      </p>
      <h3 className='text-xl font-semibold mt-4 mb-2'>2. Experience in Fertility Treatments:</h3>
      <p className='my-4 text-gray-700 '>
        The experience of the doctor is very important for the success of IVF. Choose a fertility doctor who has a proven track record of handling
        various fertility cases, as they will be able to handle complex situations better.
      </p>
      <h3 className='text-xl font-semibold mt-4 mb-2'>3. State-of-the-Art Facilities:</h3>
      <p className='my-4 text-gray-700 '>
        Choose a doctor associated with a clinic that offers modern facilities and advanced technology, such as high-quality laboratories for embryo
        culture and state-of-the-art diagnostic equipment. This also increases the chances of success.
      </p>
      <h3 className='text-xl font-semibold mt-4 mb-2'> 4. Patient Reviews and Success Rates: </h3>
      <p className='my-4 text-gray-700 '>
        Check online reviews and testimonials from previous patients. High success rates and positive feedback reflect the credibility of the doctor
        and his/her ability to achieve the desired results
      </p>
      <h3 className='text-xl font-semibold mt-4 mb-2'> 5. Availability and Accessibility: </h3>
      <p className='my-4 text-gray-700 '>
        Choose a doctor who is friendly, provides personalized care, and is readily available for consultation and follow-up. A supportive
        doctor-patient relationship can make your treatment experience much better.
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-4'> Services Offered by IVF Specialists in Delhi</h2>
      <ul className='list-disc pl-6 space-y-2 text-gray-700'>
        <li>In Vitro Fertilization (IVF)</li>
        <li>Intracytoplasmic Sperm Injection (ICSI)</li>
        <li>Intrauterine Insemination (IUI)</li>
        <li>Male and Female Infertility</li>
        <li>Fertility Preservation (Egg and Sperm Freezing)</li>
        <li>Laparoscopic and Hysteroscopic Surgeries</li>
        <li>Genetic Testing for Embryos</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-6 mb-4'>Benefits of Consulting the Best IVF Doctors in Delhi</h2>
      <ul className='list-disc  pl-6 space-y-2 text-gray-700'>
        <li>High success rates in IVF and other fertility treatments</li>
        <li>Access to globally acclaimed technology and techniques</li>
        <li>Complete clinical assessment and clear communication</li>
        <li>Emotional support throughout the journey of becoming a parent</li>
      </ul>

      <div className='mt-8 '>
        <h2 className='text-2xl font-semibold mb-4'>Book Your Consultation Today</h2>
        <p className='text-gray-700 mb-4'>
          Take the first step towards becoming a parent by consulting one of the best IVF doctors in Delhi. Whether this is your first attempt or you
          are looking for advanced fertility solutions, these experts are there to guide you every step of the way.
        </p>
        <EnquiryModal
          triggerElement={
            <button type='button' className='btn-default__outline gap-2 whitespace-pre max-md:px-6'>
              <span>Book Your Appointment Now</span>
            </button>
          }
          title='Book Your Appointment Today'
        />
      </div>
    </div>
  );
};

export default DoctorContentPage;
