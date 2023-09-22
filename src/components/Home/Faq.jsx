import star from "../../assets/star pu.svg";

export function Faq() {
  return (
    <section className="px-6 pt-[2.94rem] font-Montserrat">
      <img className="w-[1.125rem] ml-[0.88rem]" src={star} alt="star" />
      <h2 className="font-clashDisplay text-center text-xl mb-[0.56rem]">
        Frequently Asked
        <span className="text-[#D434FE] block">Question</span>
      </h2>
      <p className="text-center text-xs leading-7 pb-[2.86rem]">
        We got answers to the questions that you might want to ask about{" "}
        <span className="font-bold">getlinked Hackathon 1.0</span>
      </p>
    </section>
  );
}
