import img from "../../assets/judging-criteria-illustration.png";
import star from "../../assets/star.svg";
import starPu from "../../assets/star pu.svg";
import starSm from "../../assets/star-sm.svg";
import ellipse from "../../assets/Ellipse 2.svg";

export function JudgingCriteria() {
  return (
    <section className="px-[2.81rem] lg:pl-[4.13rem] lg:pr-44 grid gap-[3.31rem] md:pt-20 md:grid-cols-2 pb-[3.67rem] bg-no-repeat bg-[-176px_3.28px] bg-hero bg-blend-hard-light border-y border-white/[18%]">
      <div className="relative pt-[4.63rem] md:pt-0">
        <img
          className="px-[0.19rem] z-50 md:absolute"
          src={img}
          alt="illustration"
        />
        <img
          className="absolute top-[0.94rem] left-[10.81rem] w-[0.81rem]"
          src={starPu}
          alt="star"
        />
        <img
          className="absolute right-[8.26rem] top-[10.9rem] w-3"
          src={starSm}
          alt="star"
        />
        <img
          className="absolute left-4 -top-10 w-[8.3rem] "
          src={ellipse}
          alt="ellipse"
        />
      </div>
      <div className="text-center md:text-left relative font-Montserrat">
        <h2 className="font-clashDisplay text-xl mb-4">
          Judging Criteria
          <span className="text-[#D434FE] block">Key attributes</span>
        </h2>
        <ul className="flex flex-col gap-5">
          <li className="text-sm leading-[1.4rem]">
            <span className="text-[#FF26B9] text-base font-bold">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </li>
          <li className="text-sm leading-[1.4rem]">
            <span className="text-[#FF26B9] text-base font-bold">
              Functionality:
            </span>{" "}
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </li>
          <li className="text-sm leading-[1.4rem]">
            <span className="text-[#FF26B9] text-base font-bold">
              Impact and Relevance:
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </li>
          <li className="text-sm leading-[1.4rem]">
            <span className="text-[#FF26B9] text-base font-bold">
              Technical Complexity:
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </li>
          <li className="text-sm leading-[1.4rem]">
            <span className="text-[#FF26B9] text-base font-bold">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
        </ul>
        <button className="rounded-[0.25rem] mt-7 text-sm py-2 px-[0.88rem] md:px-6 md:py-3 bg-gradient-to-tl from-[#903AFF] via-[#D434FE]/[56.42%] to-[#FE34B9]">
          Read More
        </button>
        <img
          className="absolute right-[0.19rem] md:right-0 md:-left-[3.31rem] bottom-3 w-[0.65rem]"
          src={star}
          alt="star"
        />
      </div>
    </section>
  );
}
