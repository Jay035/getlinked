import chain from "../../assets/chain.svg";
import fireIcon from "../../assets/fire.svg";
import heroImg from "../../assets/Hackathon guy.png";
import star from "../../assets/star.svg";
import starSm from "../../assets/star-sm.svg";
import torch from "../../assets/Creative 1.svg";

export function HeroSection() {
  return (
    <section className="px-6 md:px-12 grid md:grid-cols-2">
      {/* hero-content */}
      <div className="relative pt-[1.12rem] text-center flex flex-col items-center md:items-start md:text-left">
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

        <h1 className="text-[2rem] md:text-4xl lg:text-[5rem] font-bold font-clashDisplay">
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
          className="mt-6 md:mt-[2.56rem] text-center font-Montserrat font-normal bg-gradient-to-r from-[#903AFF] via-[#D434FE] to-[#FF26B9] w-[10.8rem] h-[3.3rem] flex justify-center items-center"
          //   onClick={() => {
          //   }}
        >
          Register
        </button>
        {/* countdown timer */}
        <div className="flex items-center gap-4 mt-[0.89rem] md:mt-[4.81rem] font-UnicaOne">
          <p className="text-5xl">
            00<span className="text-sm">H</span>{" "}
          </p>
          <p className="text-5xl">
            00<span className="text-sm">M</span>{" "}
          </p>
          <p className="text-5xl">
            00<span className="text-sm">S</span>{" "}
          </p>
        </div>
      </div>
      {/* hero image */}
      <div className="mt-[0.74rem] lg:mt-0">
        <img src={heroImg} alt="hackathon guy" />
      </div>
    </section>
  );
}
