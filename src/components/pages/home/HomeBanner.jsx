import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from '@/components/partials/Wrapper';
import Slider from 'react-slick';
import { imgUrlPath } from '@/components/helpers/functions-general';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fashionBlog } from '@/components/data/dataFashion';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <button
          className='absolute right-4 bottom-1/2 -translate-y-1/2 size-[50px] flex justify-center items-center bg-dark hover:bg-accent z-40 group-hover:opacity-100 opacity-0  transition-opacity'
          onClick={onClick}
        >
          <ChevronRight stroke={"#fff"} />
        </button>
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <button
          className='absolute left-4 bottom-1/2 -translate-y-1/2 size-[50px] flex justify-center items-center bg-dark hover:bg-accent z-40 group-hover:opacity-100 opacity-0 transition-opacity'
          onClick={onClick}
        >
          <ChevronLeft stroke={"#fff"} />
        </button>
      );
    }
    const settings = {
      dots: false,
      infinite: true,
      gutter: 10,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
    };
  return (
    <>
      <section className='banner'>
        <Wrapper>
          <div className='group'>
            <Slider {...settings}>
              {fashionBlog.slice (0,4).map((item, key) => {
                return (
                  <div className='banner-card relative px-1 outline-none' key={key}>
                    <div className='bg-black'>
                      <img
                        src={`${imgUrlPath}${item.fashion_image}`} className="w-full  h-[300px] md:h-[746px] object-cover object-center"
                        alt=''
                      />
                    </div>
                    <div className='absolute bottom-2 text-center left-1/2 -translate-x-1/2 w-[330px] text-light '>
                      <small className='text-xs uppercase '>{item.fashion_category}</small>
                      <p className='text-xs mt-3 mb-1 uppercase'>
                        {item.fashion_published}</p>
                      <Link to = {`${item.fashion_title.toLowerCase().replaceAll(" ","-")}`}><h4>{item.fashion_title}</h4></Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Wrapper>
      </section>

    </>
  )
}
export default HomeBanner





