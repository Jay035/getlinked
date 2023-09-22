import chain from "../../assets/chain.svg";
import fireIcon from "../../assets/fire.svg";
import heroImg from "../../assets/Hackathon guy.png";
import star from "../../assets/star.svg";
import starSm from "../../assets/star-sm.svg";
import torch from "../../assets/Creative 1.svg";

export function HeroSection() {
  return (
    <section className="px-6">
      {/* hero-content */}
      <div className="relative pt-[1.12rem] text-center flex flex-col items-center">
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

        <h1 className="text-3xl font-bold font-clashDisplay">
          <span className="block">getlinked Tech</span>
          <span>
            Hackathon <span>1.0</span>{" "}
            <img className="inline w-[2.05rem]" src={chain} alt="chain" />
            <img
              className="inline w-[2.05rem]"
              src={fireIcon}
              alt="fire icon"
            />
          </span>
        </h1>
        <p className="mt-[0.56rem] font-Montserrat">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button
          className="mt-6 lg:mt-0 text-center font-Montserrat font-normal bg-gradient-to-r from-[#903AFF] via-[#D434FE] to-[#FF26B9] w-[10.8rem] h-[3.3rem] flex justify-center items-center"
          //   onClick={() => {
          //   }}
        >
          Register
        </button>
        {/* countdown timer */}
        <div className="flex items-center gap-4 mt-[0.89rem] font-UnicaOne">
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
