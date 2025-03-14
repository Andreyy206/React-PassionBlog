import { fashionBlog } from '@/components/data/dataFashion';
import { imgUrlPath } from '@/components/helpers/functions-general';
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header';
import Wrapper from '@/components/partials/Wrapper';
import { ChevronRight } from 'lucide-react';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import WidgetFollow from '../home/widget/WidgetFollow';
import WidgetNewsLetter from '../home/widget/WidgetNewsLetter';
import Markdown from 'react-markdown';

const Single = () => {
    const { slug } = useParams ();

    const article = () => {
      return fashionBlog.filter((item) => item.fashion_title.toLowerCase().replaceAll(' ', "-") === slug)[0];
    };

    console.log(article())
  return (
    <>
      <Header />
      <div className='banner'>
        <Wrapper>
          <ul className='flex items-center gap-5 text-xs mt-16 mb-5 '>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <ChevronRight size={12} />
            </li>
            <li>
              <Link
                to={`/${article().fashion_category}`}
                className='hover:text-accent'
              >
                {article().fashion_category}
              </Link>
            </li>
            <li>
              <ChevronRight size={12} />
            </li>
            <li>{article().fashion_title}</li>
          </ul>

          <div
            className="min-h-[60vh] relative bg-cover bg-center after:content-[''] after:w-full after:h-full after:bg-black after:bg-opacity-60 after:absolute after:top-0 after:left-0 "
            style={{
              backgroundImage: `url(${imgUrlPath}/${article().fashion_image})`,
            }}
          >
            <div className='absolute top-10 left-10 w-[94%] text-light'>
              <div className='flex gap-10 mb-5'>
                <Link
                  to={`/${article().fashion_category}`}
                  className='uppercase hover:text-accent'
                >
                  {article().fashion_category}
                </Link>
                <p>The estimated reading time is 3 minutes</p>
              </div>
              <h2 className='py-3 border-b border-gray-200 uppercase'>
                {article().fashion_title}
              </h2>
              <p text-light>{article().fashion_published}</p>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className='py-24'>
        <Wrapper>
          <div className='grid md:grid-cols-[3fr_1fr] w-full'>
            <div className='article'>
              <Markdown>{article().fashion_article}</Markdown>
            </div>
            <aside>
              <WidgetFollow />
              <WidgetNewsLetter />
            </aside>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export default Single
