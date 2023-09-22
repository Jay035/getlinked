import vector from "../assets/Vector 4.svg";
import chain from "../assets/chain.svg";
import fireIcon from "../assets/fire.svg";
// import { getSearchParamsForLocation } from "react-router-dom/dist/dom";

export default function Home() {
  return (
    <main className="text-white px-6">
      <div className="relative w-fit ml-auto">
        <p className="italic font-Montserrat font-bold mb-[3.62rem]">
          Igniting a Revolution in HR Innovation
        </p>
        <img className="absolute top-6 right-0" src={vector} alt="vector" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          <span className="block">getlinked Tech</span>
          <span>
            Hackathon <span>1.0</span> <img className="inline w-[2.05rem]" src={chain} alt="chain" />
            <img className="inline w-[2.05rem]" src={fireIcon} alt="fire icon" />
          </span>
        </h1>
        <p className="mt-[0.56rem] font-Montserrat">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
      </div>
    </main>
  );
}
