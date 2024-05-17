import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 940);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 940);
      if (!isMobile) {
        setMenuVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuVisible(!menuVisible);
    }
  };

  const li_style = "active:drop-shadow-lg active:scale-105 active:duration-500";

  return (
    <nav  data-aos="zoom-in-down" data-aos-delay="100" className="navbar bg-none cursor-pointer flex justify-center items-center glass rounded-3xl outline outline-red-200 outline-1 w-[70%] mt-4 mx-auto tablet:flex tablet:justify-end tablet:outline-none tablet:w-full">
      
      {menuVisible && 

      <ul className="dropdown_menu flex space-x-24 justify-center text-white text-lg font-normal mr-4 my-6 tablet:flex-col tablet:space-x-0 tablet:w-full tablet:mr-0 tablet:items-center tablet:space-y-6 tablet:text-center">
        <li className={`${li_style}`} id="nav_text">
          <a href="#">Home</a>
        </li>
        <li className={`${li_style}`} id="nav_text">
          <a href="#Quality">About</a>
        </li>
        <li className={`${li_style}`} id="nav_text">
          <a href="#Skills">Skills</a>
        </li>
        <li className={`${li_style}`} id="nav_text">
          <a href="#Works">Works</a>
        </li>
        <li className={`${li_style}`} id="nav_text">
          <a href="#GetInTouch">Contact</a>
        </li>
      </ul>
      }
      <div className="toggle-button hidden tablet:block">
        <Menu onClick={toggleMenu} size={20} className="text-white absolute top-5 right-5"/>
      </div>
    </nav>
  );
}
