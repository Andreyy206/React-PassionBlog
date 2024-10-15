import { fashionBlog } from "@/components/data/dataFashion";
import { imgUrlPath } from "@/components/helpers/functions-general";
import Wrapper from "@/components/partials/Wrapper";
import React from "react";
import PartHeader from "../part/PartHeader";

const HomeTrending = () => {

    const trendingPost = fashionBlog.filter((item)=> item.fashion_is_trending === 1 );
  return (
    

    <>
      <section className='py-24'>
        <Wrapper>
            <PartHeader title="Trending Posts"/>
            <div className='grid grid-cols-4 gap-5'>

            {fashionBlog.slice(0,4).map((item, key)=>{
                return (
                  <div className='card text-center' key={key}>
                    <img src={`${imgUrlPath}${item.fashion_image}`} alt=''className='w-[390px] h-[274px] object-cover' />
                  
                    <small className='text-xs uppercase text-accent '>
                      Fashion
                    </small>
                    <p className='text-xs mt-3 mb-1 uppercase'>
                      October 09, 2001
                    </p>
                    <h6 className='mb-3 mt-6 text-xl'>kkkkkkkk</h6>
                  </div>
                );
            })}

          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default HomeTrending;
