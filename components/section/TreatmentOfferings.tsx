import { TreatmentSectionProps } from '@/types';
import {
  FaBabyCarriage,
  FaDna,
  FaHeartbeat,
  FaHospital,
  FaMicroscope,
  FaSyringe,
  FaUserMd,
  FaVial,
  FaFlask,
  FaStethoscope,
  FaClinicMedical,
} from 'react-icons/fa';

const TreatmentOfferings: React.FC<{ data: TreatmentSectionProps }> = ({ data }) => {
  const { title, treatments } = data;

  const icons = [FaBabyCarriage, FaDna, FaMicroscope, FaVial, FaSyringe, FaHeartbeat, FaUserMd, FaHospital, FaFlask, FaStethoscope, FaClinicMedical];

  return (
    <section className='bg-gradient-to-br from-gray-100 to-gray-50'>
      <div className='max-container padding-container-sm'>
        <div className='text-center mb-12'>
          <h2 className='section-title text-4xl font-bold text-gray-900 mb-4'>{title}</h2>
          <div className='w-24 h-1 bg-primaryColor-600 mx-auto rounded-full'></div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
          {treatments.map((treatment, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className='group flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primaryColor-200'
              >
                <div className='flex items-center justify-center bg-gradient-to-r from-primaryColor-500 via-primaryColor-600 to-purple-600 rounded-full w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300'>
                  <Icon className='w-5 h-5' />
                </div>

                <p className='text-sm font-medium text-gray-800 text-center line-clamp-2'>{treatment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentOfferings;
