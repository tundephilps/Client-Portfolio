import Image from "next/image";
import React from "react";
import him from "@/public/him3.jpg";

const About = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <img
        src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28f9_How%20It%20Works%20BG.svg"
        alt=""
        className="absolute inset-[0%] z-[1] inline-block h-full w-full object-cover"
      />
      {/* Container */}

      {/* Container */}
      <div className="mx-auto relative z-50 w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Heading Content */}
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-white md:text-6xl">
              Helping brands thrive in the digital world
            </h1>
            <p className="mb-6 max-w-[528px] text-xl text-[#aeaeae] md:mb-10">
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus
            </p>
          </div>
          {/* Image Div */}
          <div>
            <Image
              src={him}
              alt=""
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
