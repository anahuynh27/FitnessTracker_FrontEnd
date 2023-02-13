import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section>
      <div className='px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='p-8 bg-blue-600 md:p-12 lg:px-16 lg:py-24'>
            <div className='max-w-xl mx-auto font-serif text-center'>
              <h2 className='text-2xl font-bold text-white md:text-3xl'>
                Welcome to fitness trackr
              </h2>

              <p className='hidden text-white/90 sm:mt-4 sm:block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <div className='mt-4 md:mt-8'>
                <Link
                  to='/login'
                  className='inline-block px-12 py-3 text-sm font-medium text-blue-500 transition bg-white border border-white rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
            <img
              alt='Student'
              src='https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='object-cover w-full h-40 sm:h-56 md:h-full'
            />

            <img
              alt='Student'
              src='https://images.pexels.com/photos/4753990/pexels-photo-4753990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='object-cover w-full h-40 sm:h-56 md:h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
