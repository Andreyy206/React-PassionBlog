import React from 'react'
import PartHeader from './PartHeader'
import { imgUrlPath } from '@/components/helpers/functions-general';


const HomeLatest = () => {
  return (
    <div className='Latest'>
      <PartHeader title='Latest Blog Post' />
      <div className="flex className='pb-5 mb-5 border-b border-gray-200 ">
        <img
          src={`${imgUrlPath}/bini-8.jpg`}
          alt=''
          className='w-[390px] h-[274px] object-cover'
        />
        <div className='text-center m-auto'>
          <small className='text-xs uppercase text-accent '>Fashion</small>
          <h6 className='mb-3 mt-6 text-xl'>
            Emerging Global Trends in Leather and Fashion
          </h6>
          <p className='text-xs mt-3 mb-1 uppercase'>October 09, 2001</p>
        </div>
      </div>

      <div className="flex className='pb-5 mb-5 border-b border-gray-200 ">
        <img
          src={`${imgUrlPath}/bini-11.jpg`}
          alt=''
          className='w-[390px] h-[274px] object-cover'
        />
        <div className='text-center m-auto'>
          <small className='text-xs uppercase text-accent '>Fashion</small>
          <h6 className='mb-3 mt-6 text-xl'>
            Sustainable Fashion: Welcome Revolution
          </h6>
          <p className='text-xs mt-3 mb-1 uppercase'>October 09, 2001</p>
        </div>
      </div>

      <div className="flex className='pb-5 mb-5 border-b border-gray-200 ">
        <img
          src={`${imgUrlPath}/bini-10.jpg`}
          alt=''
          className='w-[390px] h-[274px] object-cover'
        />
        <div className='text-center m-auto'>
          <small className='text-xs uppercase text-accent '>Fashion</small>
          <h6 className='mb-3 mt-6 text-xl'>Proof Gigi and Bella Hadid</h6>
          <p className='text-xs mt-3 mb-1 uppercase'>October 09, 2001</p>
        </div>
      </div>

      <div className="flex className='pb-5 mb-5 border-b border-gray-200 ">
        <img
          src={`${imgUrlPath}/bini-11.jpg`}
          alt=''
          className='w-[390px] h-[274px] object-cover'
        />
        <div className='text-center m-auto'>
          <small className='text-xs uppercase text-accent '>Fashion</small>
          <h6 className='mb-3 mt-6 text-xl'>
            Women Are Taking Over the World of Comedy{" "}
          </h6>
          <p className='text-xs mt-3 mb-1 uppercase'>October 09, 2001</p>
        </div>
      </div>

      <div className="flex className='pb-5 mb-5 border-b border-gray-200 ">
        <img
          src={`${imgUrlPath}/bini-12.jpg`}
          alt=''
          className='w-[390px] h-[274px] object-cover'
        />
        <div className='text-center m-auto'>
          <small className='text-xs uppercase text-accent '>Fashion</small>
          <h6 className='mb-3 mt-6 text-xl'>
            Emerging Global Trends in Leather and Fashion
          </h6>
          <p className='text-xs mt-3 mb-1 uppercase'>October 09, 2001</p>
        </div>
      </div>
      <div className="flex className='pb-5 mb-5 border-b border-gray-200 ">
        <img
          src={`${imgUrlPath}/bini-13.jpg`}
          alt=''
          className='w-[390px] h-[274px] object-cover'
        />
        <div className='text-center m-auto'>
          <small className='text-xs uppercase text-accent '>Fashion</small>
          <h6 className='mb-3 mt-6 text-xl'>
            Emerging Global Trends in Leather and Fashion </h6>
          <p className='text-xs mt-3 mb-1 uppercase'>October 09, 2001</p>
        </div>
      </div>
    </div>
  );
}

export default HomeLatest
