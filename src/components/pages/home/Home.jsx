import Header from "@/components/partials/Header";
import Wrapper from "@/components/partials/Wrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
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
    slidesToShow: 3,git 
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Header />
      <section className='banner'>
        <Wrapper>
          <div className='group'>
            <Slider {...settings}>
              <div className='banner-card relative px-1 outline-none'>
                <div className="bg-black">
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpadCvWo8lYAAsZnm4g8WeJuiKvpTq7PLCw&s'
                    alt=''className='w-full block object-cover hover:opacity-50 transition-opacity h-[600px]' />
                </div>
                <div className='absolute bottom-2 text-center left-1/2 -translate-x-1/2 w-[330px] text-light '>
                  <small className='text-xs uppercase ' Lifestyle></small>
                  <p className='text-xs mt-3 mb-1 uppercase'>February 8,2020</p>
                  <h4>Sustainable Fashion:Welcome Revolution</h4>
                </div>
              </div>
              <div className='banner-card relative px-1 outline-none'>
                <div className="bg-black">
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpadCvWo8lYAAsZnm4g8WeJuiKvpTq7PLCw&s'
                    alt=''className='w-full block object-cover hover:opacity-50 transition-opacity h-[600px]' />
                </div>
                <div className='absolute bottom-2 text-center left-1/2 -translate-x-1/2 w-[330px] text-light '>
                  <small className='text-xs uppercase ' Lifestyle></small>
                  <p className='text-xs mt-3 mb-1 uppercase'>February 8,2020</p>
                  <h4>Sustainable Fashion:Welcome Revolution</h4>
                </div>
              </div>
              <div className='banner-card relative px-1 outline-none'>
                <div className="bg-black">
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpadCvWo8lYAAsZnm4g8WeJuiKvpTq7PLCw&s'
                    alt=''className='w-full block object-cover hover:opacity-50 transition-opacity h-[600px]' />
                </div>
                <div className='absolute bottom-2 text-center left-1/2 -translate-x-1/2 w-[330px] text-light '>
                  <small className='text-xs uppercase ' Lifestyle></small>
                  <p className='text-xs mt-3 mb-1 uppercase'>February 8,2020</p>
                  <h4>Sustainable Fashion:Welcome Revolution</h4>
                </div>
              </div>
              <div className='banner-card relative px-1 outline-none'>
                <div className="bg-black">
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpadCvWo8lYAAsZnm4g8WeJuiKvpTq7PLCw&s'
                    alt=''className='w-full block object-cover hover:opacity-50 transition-opacity h-[600px]' />
                </div>
                <div className='absolute bottom-2 text-center left-1/2 -translate-x-1/2 w-[330px] text-light '>
                  <small className='text-xs uppercase ' Lifestyle></small>
                  <p className='text-xs mt-3 mb-1 uppercase'>February 8,2020</p>
                  <h4>Sustainable Fashion:Welcome Revolution</h4>
                </div>
              </div>
              
            </Slider>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Home;
