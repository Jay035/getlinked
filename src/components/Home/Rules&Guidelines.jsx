import img from "../../assets/rules-illustration.png";
import star from "../../assets/star.svg";
import starSm from "../../assets/star-sm.svg";

export function RulesAndGuidelines() {
  return (
    <section className="px-[2.81rem] lg:pl-44 lg:pr-[6.37rem] grid md:grid-cols-2 md:gap-12 pb-16 bg-no-repeat bg-[-176px_3.28px] bg-hero bg-blend-hard-light border-t border-white/[18%]">
      <div className="relative md:order-2">
        <img className="px-[0.19rem] lg:w-full" src={img} alt="illustration" />
        <img
          className="absolute top-[11.56rem] md:top-80 left-[0.31rem] w-[0.65rem] md:w-[1.625rem]"
          src={star}
          alt="star"
        />
      </div>
      <div className="text-center md:text-left relative md:pt-[8.6rem]">
        <h2 className="font-clashDisplay text-xl lg:text-[2rem] mb-[0.56rem] md:mb-4">
          Rules and
          <span className="text-[#D434FE] block">Guidelines</span>
        </h2>
        <img
          className="absolute right-[0.88rem] top-12 md:top-[7.25rem] w-3 md:w-5 lg:w-[1.625rem]"
          src={starSm}
          alt="star"
        />

        <p className="text-[0.81rem] md:text-sm leading-[1.72rem] font-Montserrat">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
        <img
          className="mt-[0.94rem] ml-[6.75rem] w-[0.65rem] md:hidden"
          src={star}
          alt="star"
        />
      </div>
    </section>
  );
}
