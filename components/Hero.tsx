"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto font-RedHat">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-semibold">
          Encuentra o Renta un auto facil y rapidamente!
        </h1>
        <p className="text-[27px] text-black font-light mt-5">
          Comienza tu experiencia hoy mismo.
        </p>
        <CustomButton
          title="Explorar Autos"
          containerStyles="bg-blue-400 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          {" "}
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="absolute rounded-full xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round bg-blue-400 -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Hero;
