import React from "react";
import PartHeader from "./PartHeader";
import { imgUrlPath } from "@/components/helpers/functions-general";
import { fashionBlog } from "@/components/data/dataFashion";

const HomeLatest = () => {
  const latestPost = fashionBlog.filter((item) => {
    return (
      Math.floor(
        Math.abs(new Date(item.fashion_published) - new Date()) /
          (1000 * 60 * 60 * 24)
      ) < 10
    );
  });

  return (
    <div className='Latest'>
      <PartHeader title='Latest Blog Post' />
      {latestPost.slice(0, 5).map((item, key) => {
        return (
          <div
            className="md:flex pb-5 mb-5 border-b border-gray-200 items-center "key={key}>
            <img
              src={`${imgUrlPath}/${item.fashion_image}`}
              alt=''className='w-[390px] h-[274px] object-cover'/>
            <div className='text-center m-auto'>
              <small className='text-xs uppercase text-accent '>
                {item.fashion_category}
              </small>
              <h6 className='mb-3 mt-6 text-xl'>{item.fashion_title}</h6>
              <p className='text-xs mt-3 mb-1 uppercase'>{item.fashion_published}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeLatest;
