import Image from 'next/image';
import CTAMiniForm from '../forms/CTAMiniForm';
import { CardWrapper } from '../misc';

const CallToAction = () => {
  return (
    <section id='call-to-action' className='relative overflow-hidden bg-gray-50'>
      <div className='max-container padding-container-sm'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          {/* Image Column */}
          <div className='lg:col-span-2'>
            <Image
              src='/images/cta-img.webp'
              alt='Dr. Bindu Garg consulting her infertile patients at her hospital cabin'
              width={800}
              height={600}
              className='rounded-3xl object-cover w-full h-auto'
            />
          </div>

          {/* Form Column */}
          <CardWrapper>
            <CTAMiniForm />
          </CardWrapper>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
