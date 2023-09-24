import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-12 text-white font-inter flex justify-between items-center border-b border-white/[18%] tracking-tight w-full gap-x-12 py-6 md:py-7 px-[9.5vw]">
      {/* <section className="text-white"> */}
      <Link
        data-aos="fade-up"
        data-aos-duration="3000"
        to="/"
        className="font-bold font-clashDisplay"
      >
        get<span className="text-[#D434FE]">linked</span>
      </Link>
      {/* </section> */}
      <ul
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-40 ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } font-Inter font-medium absolute top-0 bg-[#150E28] backdrop-blur-[30px] lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col items-start justify-center lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        <li
          data-aos="fade-up"
          data-aos-duration="3000"
          className="hover:text-[#D434FE] cursor-pointer"
        >
          Timeline
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="100"
          className="hover:text-[#D434FE] cursor-pointer"
        >
          Overview
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="3000"
          className="hover:text-[#D434FE] cursor-pointer"
        >
          FAQs
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="3000"
          className="hover:text-[#D434FE] cursor-pointer"
        >
          Contact
        </li>
        <li
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mt-[1.8rem] lg:mt-0 text-center cursor-pointer font-Montserrat font-normal bg-gradient-to-l hover:bg-gradient-to-r from-[#903AFF] via-[#D434FE] to-[#FF26B9] w-[10.8rem] h-[3.3rem] flex justify-center items-center"
          //   onClick={(e) => {
          //     e.preventDefault();
          //     setMenuOpen((prevState) => !prevState);
          //   }}
        >
          {/* <Link
            to="/"
            className="list_item border shadow-sm border-[#7F56D9] bg-[#7F56D9] text-center text-white px-[1.125rem] py-[0.625rem] rounded-[1.875rem] transition-all hover:bg-transparent"
          > */}
          Register
          {/* </Link> */}
        </li>
      </ul>

      {/* custom hamburger icon */}
      <div
        onClick={() => setMenuOpen((prevState) => !prevState)}
        className={`z-[999999999999] grid justify-self-end justify-between flex-col lg:hidden gap-1 cursor-pointer ${
          menuOpen && "px-1.5 pt-5 py-4 rounded-full"
        }`}
      >
        <span
          className={`w-4 h-[3px] bg-white rounded transition-all ease-out duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] w-6 translate-y-0.5` : ``
          }`}
        ></span>
        <span
          className={`w-8 h-[3px] bg-white rounded transition-all duration-150 ease-out delay-75 ${
            menuOpen ? `rotate-[495deg] -translate-y-1 w-[1.4rem] ` : ``
          }`}
        ></span>
        <span
          className={`ml-auto w-4 h-[3px] bg-white rounded transition-all ease-out duration-150 delay-75 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}
