import img from "../../assets/the big idea 1.png";
import arrow from "../../assets/arrow.svg";
import icon from "../../assets/sata gra.svg";
import star from "../../assets/star pu.svg";

export function Intro() {
  return (
    <section className="grid justify-center px-6 gap-[3.67rem] pt-[1.74rem] pb-16">
      <div className="relative">
        <img className="w-fit mx-auto" src={img} alt="big idea illustration" />
        <img className="mt-[0.63rem] w-fit mx-auto" src={arrow} alt="arrow" />
        <img className="absolute top-[5.19rem] left-2" src={icon} alt="icon" />
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-[1.13rem] w-full">
          <h2 className="font-clashDisplay text-xl mb-[0.56rem]">
            Introduction to getlinked
            <span className="text-[#D434FE] block">tech Hackathon 1.0</span>
          </h2>
          <img className="" src={star} alt="star" />
        </div>

        <p className="text-[0.81rem] leading-[1.71rem] font-Montserrat">
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
