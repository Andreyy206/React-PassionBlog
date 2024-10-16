import React from "react";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='py-5 border-top border-gray-200'>
      <Wrapper>
        <div className='grid md:grid-cols-[1fr_3fr_1fr]'>
          <Logo />
          <nav className='Justify self-center'>
            <ul className='md:flex gap-10 text-center my-5 md:m-y-0 space-y-2 md:space-y-0'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Lifestyle</Link>
              </li>
              <li>
                <Link to='/'>Culture</Link>
              </li>
              <li>
                <Link to='/'>Entertainment</Link>
              </li>
              <li>
                <Link to='/'>Feature</Link>
              </li>
            </ul>
          </nav>
          <p>Zemez ©. All rights reserved</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
