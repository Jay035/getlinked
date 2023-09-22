import vector from "../assets/Vector 4.svg";
import { Faq } from "../components/Home/Faq";
import { HeroSection } from "../components/Home/HeroSection";
import { Intro } from "../components/Home/Intro";
import { JudgingCriteria } from "../components/Home/JudgingCriteria";
import { RulesAndGuidelines } from "../components/Home/Rules&Guidelines";

export default function Home() {
  return (
    <main className="text-white ">
      <div className="relative w-fit ml-auto mx-6">
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
