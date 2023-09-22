import img from "../../assets/rules-illustration.png";
import star from "../../assets/star.svg";
import starSm from "../../assets/star-sm.svg";

export function RulesAndGuidelines() {
  return (
    <section className="px-[2.81rem] pb-16 bg-no-repeat bg-[-176px_3.28px] bg-hero bg-blend-hard-light border-t border-white/[18%]">
      <div className="relative">
        <img className="px-[0.19rem]" src={img} alt="illustration" />
        <img
          className="absolute top-[11.56rem] left-[0.31rem] w-[0.65rem]"
          src={star}
          alt="star"
        />
      </div>
      <div className="text-center relative">
        <h2 className="font-clashDisplay text-xl mb-[0.56rem]">
          Rules and
          <span className="text-[#D434FE] block">Guidelines</span>
        </h2>
        <img
          className="absolute right-[0.88rem] top-12 w-3"
          src={starSm}
          alt="star"
        />

        <p className="text-[0.81rem] leading-[1.71rem] font-Montserrat">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
        <img className="mt-[0.94rem] ml-[6.75rem] w-[0.65rem]" src={star} alt="star" />
      </div>
    </section>
  );
}
