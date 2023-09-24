import vector from "../assets/Vector 4.svg";
import { Faq } from "../components/Home/Faq";
import { HeroSection } from "../components/Home/HeroSection";
import { Intro } from "../components/Home/Intro";
import { JudgingCriteria } from "../components/Home/JudgingCriteria";
import { RulesAndGuidelines } from "../components/Home/Rules&Guidelines";

export default function Home() {
  return (
    <main className="text-white ">
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="relative w-fit md:ml-auto md:mx-[3.4rem] mx-auto"
      >
        <p className="italic font-Montserrat font-bold mb-[3.62rem]">
          Igniting a Revolution in HR Innovation
        </p>
        <img className="absolute top-6 right-0" src={vector} alt="vector" />
      </div>
      <HeroSection />
      <Intro />
      <RulesAndGuidelines />
      <JudgingCriteria />
      <Faq />
    </main>
  );
}
