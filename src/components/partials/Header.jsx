import React from "react";
import Wrapper from "./Wrapper";
import { MenuIcon, Search } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {

const [isShow, setIsShow] = React.useState(false)
const handleShowMenu = () => {
  setIsShow(!isShow)
  if(isShow == true){
    document.querySelector('body').classList.remove ('no-scroll');
  }
  else
    document.querySelector('body').classList.add ('no-scroll');

  }



  return (
    <header className='py-5'>
      <Wrapper>
        <div className='flex justify-between items-center'>
          <div className='branding'>
            <Logo />
          </div>
          <nav
            className={
              `transition-all md:static fixed overflow-hidden md:hidden md:flow-visible z-50 top-16 ${isShow ? "left-0" : "left-full"}  h-[calc(100vh-72px)] bg-gray-300 w-screen grid place-content-center `
            }
          >
            <ul className='flex flex-col md:flex-row gap-10  w-full -translate-y-16 md:translate-y-0 justify-center items-center'>
              <li>
                <Link to='/' className='text-3xl md:text-base'></Link>
              </li>
              <li>
                <Link to='/' className='text-3xl md:text-base'>{" "}Lifestyle</Link>
              </li>
              <li>
                <Link to='/' className='text-3xl md:text-base'>{" "}Culture</Link>
              </li>
              <li>
                <Link to='/' className='text-3xl md:text-base'>Entertainment</Link>
              </li>
              <li>
                <Link to='/' className='text-3xl md:text-base'>Feature</Link>
              </li>
            </ul>

          </nav>
          <button className='opacity-70 hidden mb:block'><Search strokeWidth={1.2} /></button>
          <button className="md:hidden" onClick={handleShowMenu}><MenuIcon /></button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
