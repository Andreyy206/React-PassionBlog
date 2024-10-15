import { videos } from "@/components/data/dataVideos";
import React from "react";
import { imgUrlPath } from "@/components/helpers/functions-general";
import PartHeader from "../part/PartHeader";

const HomeVideo = () => {
    const [code, setCode] = React.useState("https://www.youtube.com/embed/XXYlFuWEuKI?si=mGZbK6iZ_bM2vJyA")

  const handleClick = (code) => setCode(code);

  return (
    <div className="videos mb-24">
      <PartHeader title='Videos' />
      <iframe
        width='100%'
        height='500'
        src={code}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <div className='flex gap-6 w-[900px] overflow-x-auto mt-10 pb-5 mb-24'>
        {videos.map((item, key) => {
          return (
            <button
              className='shrink-0 w-[170px]'
              key={key}
              onClick={() => handleClick(item.video_code)}
            >
              <img
                src={`${imgUrlPath}${item.video_thumbnail}`}
                alt=''
                className='w-[170px] h-[130px] object-cover'
              />
              <h6 className='text-[14px]'>{item.video_title}</h6>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomeVideo;
