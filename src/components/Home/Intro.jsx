import img from "../../assets/the big idea 1.png";
import arrow from "../../assets/arrow.svg";
import icon from "../../assets/sata gra.svg";
import star from "../../assets/star pu.svg";

export function Intro() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="grid justify-center md:grid-cols-2 md:items-center px-6 lg:px-44 gap-[3.67rem] lg:gap-24 pt-[1.74rem] md:pt-[3.88rem] pb-[3.84rem]"
    >
      <div data-aos="fade-right" data-aos-duration="3000" className="relative">
        <img
          className="w-fit mx-auto lg:w-80 lg:mx-0"
          src={img}
          alt="big idea illustration"
        />
        <img
          className="mt-[0.63rem] w-fit mx-auto md:w-12 md:-mt-4 md:ml-auto md:mx-0 lg:mr-12"
          src={arrow}
          alt="arrow"
        />
        <img
          className="absolute top-[5.19rem] left-2 lg:-left-10 md:w-[1.3rem]"
          src={icon}
          alt="icon"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-[1.13rem] md:gap-12 w-full">
          <h2 className="font-clashDisplay lg:whitespace-nowrap text-xl lg:text-[2rem] mb-[0.56rem] md:mb-4">
            Introduction to getlinked
            <span className="text-[#D434FE] block">tech Hackathon 1.0</span>
          </h2>
          <img className="md:w-5 lg:w-[1.875rem]" src={star} alt="star" />
        </div>

        <p className="text-[0.81rem] md:text-sm leading-[1.72rem] font-Montserrat">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </section>
  );
}
