import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="mb-12 text-white font-inter flex justify-between items-center border-b border-white/[18%] tracking-tight w-full gap-x-12 py-6 px-[9.5vw]">
      {/* <section className="text-white"> */}
      <Link to="/" className="font-bold">
        get<span className="text-[#D434FE]">linked</span>
      </Link>
      {/* </section> */}
      <ul
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-40 ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } font-Inter font-medium absolute top-0 bg-[#11141d] lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col justify-center lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        <li>Timeline</li>
        <li>Overview</li>
        <li>FAQs</li>
        <li>Contact</li>
        <button
          className="mt-[1.8rem] font-Montserrat font-normal bg-gradient-to-r from-[#903AFF] via-[#D434FE] to-[#FF26B9] w-[10.8rem] h-[3.3rem] lg:hidden"
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
        </button>
      </ul>

      {/* custom hamburger icon */}
      {/* <div
        className={`z-50  ${
          menuOpen &&
          "w-10 h-10 bg-gradient-to-b from-[#903AFF] to-[#FF26B9] p-0.5 rounded-full"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <div className="bg-[#150E28] w-full h-full rounded-full flex flex-col gap-1 cursor-pointer lg:hidden">
          <span
            className={`w-4 mr-auto h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
              menuOpen ? `rotate-[45deg] translate-y-4 w-6` : ``
            }`}
          ></span>
          <span
            className={`w-6 h-[3px] bg-white block rounded-lg transition-all duration-150 ${
              menuOpen ? `hidden` : ``
            }`}
          ></span>
          <span
            className={`w-4 ml-auto h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
              menuOpen ? `rotate-[495deg] translate-y-[10px] w-6` : ``
            }`}
          ></span>
        </div>
      </div> */}
      <div
        onClick={() => setMenuOpen((prevState) => !prevState)}
        className={`z-[999999999999] grid justify-self-end justify-between flex-col lg:hidden gap-1 cursor-pointer ${
          menuOpen
            ? "bg-[#150E28] px-1.5 pt-5 py-4 rounded-full"
            : "bg-transparent"
        }`}
      >
        <span
          className={`w-4 sm:w-9 h-[3px] bg-white rounded transition-all ease-out duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] w-6` : ``
          }`}
        ></span>
        <span
          className={`w-8 sm:w-9 h-[3px] bg-white rounded transition-all duration-150 ease-out delay-75 ${
            menuOpen ? `rotate-[495deg] -translate-y-1.5 w-6 ` : ``
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
