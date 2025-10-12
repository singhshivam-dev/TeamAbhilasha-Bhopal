import React from "react";
import Separator from "../ui/Separator";
import Abhilasha from "../assets/abhilasha.png";

function Home() {
  return (
    <div className="bg-[#EBF7F7] pt-14 pb-5">
      {/* Team Abhilasha */}
      <div>
        <h1 className="text-[#333C4E] text-4xl font-bold text-center capitalize" >
          Team Abhilasha - Bhopal's LIC Agent Team
        </h1>
        <Separator />

        <p
          className="text-gray-700 leading-relaxed sm:leading-loose 
              px-4 sm:px-0 
              py-4 sm:py-6 
              max-w-md sm:max-w-3xl 
              mx-auto 
              text-base sm:text-lg 
              text-justify "
        >
          Are you unsure about choosing the right LIC plan? Do life’s financial
          decisions feel confusing or overwhelming? <br />
          I’m <span className="font-bold">Abhilasha Mauka</span>, and with{" "}
          <span className="font-bold">Team Abhilasha </span>
          in Bhopal, I’m here to simplify it all for you.
          <br />
          <br />
          We believe insurance is not just a policy — it’s peace of mind.
          Whether it's securing your family’s future, planning for your child’s
          education, or navigating the claim process — we walk with you step by
          step. With personalized advice, trustworthy guidance, and doorstep
          service, we bring the LIC difference straight to you.
        </p>
      </div>

      {/* Abhilasha */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-12 px-4 sm:px-20 py-10">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
          <img
            src={Abhilasha}
            alt="Abhilasha Mauka"
            className="rounded-2xl shadow-lg w-72 sm:w-96 object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center sm:text-left w-full sm:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333C4E] mb-4">
            Meet Abhilasha Mauka
          </h2>
          <p
            className="text-gray-700 leading-relaxed sm:leading-loose 
              px-4 sm:px-0 
              max-w-md sm:max-w-3xl 
              mx-auto 
              text-base sm:text-lg 
              text-justify "
          >
            With over a decade of experience as a trusted{" "}
            <span className="font-semibold">LIC Development Office in Bhopal</span>,
            Abhilasha Mauka guided hundreds of families toward financial
            stability and peace of mind. Her deep understanding of life
            insurance and financial planning allows her to craft solutions
            tailored to every stage of life.
          </p>
          <p
            className="text-gray-700 leading-relaxed sm:leading-loose 
              px-4 sm:px-0 
              py-4 sm:py-6 
              max-w-md sm:max-w-3xl 
              mx-auto 
              text-base sm:text-lg 
              text-justify "
          >
            Under her leadership,{" "}
            <span id="services" className="font-semibold">Team Abhilasha</span> has grown into
            one of Bhopal’s most respected groups of LIC agents, known for their
             prompt claim support, and personalized
            financial guidance. Whether you're new to insurance or planning your
            retirement, Abhilasha’s mission is to make every financial decision
            simple, confident, and meaningful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
