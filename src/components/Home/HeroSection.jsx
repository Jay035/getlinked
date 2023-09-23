import chain from "../../assets/chain.svg";
import fireIcon from "../../assets/fire.svg";
import heroImg from "../../assets/Hackathon guy.png";
import heroImgDesktop from "../../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import heroOverlay from "../../assets/hero-overlay.png";
import star from "../../assets/star.svg";
import starSm from "../../assets/star-sm.svg";
import torch from "../../assets/Creative 1.svg";
import LaunchTimer from "../LaunchTimer";

export function HeroSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      // data-aos-anchor-placement="bottom-center"
      className="px-6 md:pl-12 lg:pl-32 md:pr-0 grid gap-14 md:grid-cols-2 lg:items-end md:border-b border-white/[18%]"
    >
      {/* hero-content */}
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="relative pt-[1.12rem] md:pb-[5.9rem] text-center flex flex-col items-center md:items-start md:text-left"
      >
        {/* star */}
        <img className="absolute top-0 left-[7.87rem]" src={star} alt="star" />
        <img
          className="absolute top-0 right-[3.9rem]"
          src={starSm}
          alt="star"
        />
        <img
          className="absolute top-48 right-[3.69rem] sm:right-[5.69rem]"
          src={starSm}
          alt="star"
        />
        {/* torch */}
        <img
          className="absolute top-1 right-[6.19rem]"
          src={torch}
          alt="torch"
        />

        <h1 className="text-[2rem] md:text-4xl lg:text-6xl font-bold font-clashDisplay">
          <span className="block">getlinked Tech</span>
          <span>
            Hackathon <span className="text-[#D434FE]">1.0</span>{" "}
            <img className="inline w-[2.05rem]" src={chain} alt="chain" />
            <img
              className="inline w-[2.05rem]"
              src={fireIcon}
              alt="fire icon"
            />
          </span>
        </h1>
        <p className="mt-[0.56rem] font-Montserrat md:text-lg lg:text-xl">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button
          className="mt-6 md:mt-[2.56rem] text-center font-Montserrat font-normal bg-gradient-to-l from-[#903AFF] via-[#D434FE] to-[#FF26B9] w-[10.8rem] h-[3.3rem] flex justify-center items-center"
          //   onClick={() => {
          //   }}
        >
          Register
        </button>
        {/* countdown timer */}
        <LaunchTimer />
        {/* <div className="flex items-center gap-4 mt-[0.89rem] md:mt-[4.81rem] font-UnicaOne">
          <p className="text-5xl">
            00<span className="text-sm">H</span>{" "}
          </p>
          <p className="text-5xl">
            00<span className="text-sm">M</span>{" "}
          </p>
          <p className="text-5xl">
            00<span className="text-sm">S</span>{" "}
          </p>
        </div> */}
      </div>
      {/* hero image */}
      <div className="mt-[0.74rem] lg:mt-0 relative">
        <img className="md:hidden" src={heroImg} alt="hackathon guy" />
        <img
          className="hidden w-full md:block"
          src={heroImgDesktop}
          alt="hero img"
        />
        <img
          className="hidden md:block absolute top-0"
          src={heroOverlay}
          alt="overlay image"
        />
      </div>
    </section>
  );
}
