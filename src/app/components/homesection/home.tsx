"use client";

import React from "react";
import RotatingText from "../Reactbits/RotatingText/RotatingText";
import LottieAnimate from "../lootie/LottieAnimate";
import ParticlesBackground from "../ParticlesBackground";

const HomeSection = () => {
  return (
    <section className="relative max-w-5xl min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-40 mx-auto">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
              We Transform Your Ideas
            </h3>

            {/* into + RotatingText (1 Line) */}
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-gray-800 dark:text-neutral-200">
                into
              </h2>
              <h2 className="bg-gradient-to-r from-[#6367F0] to-yellow-800 bg-clip-text text-transparent">
                <RotatingText
                  texts={[
                    "Reality",
                    "Best Design",
                    "Best Experience",
                    "Best Performance",
                  ]}
                  mainClassName="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl px-2 text-[#6367F0] overflow-hidden py-1 justify-center rounded-lg uppercase"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 60, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h2>
            </div>

            <p className="text-gray-500 dark:text-neutral-500 text-base sm:text-lg">
              We provide a wide range of high-quality IT services and best
              practices solutions to our customers, making their business
              better.
            </p>
          </div>

          <a
            href="https://wa.link/u8kytq"
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#6367F0]/20 text-[#6367F0] hover:bg-[#6367F0]/30 focus:outline-hidden focus:bg-[#6367F0]/30 disabled:opacity-50 disabled:pointer-events-none dark:text-[#6367F0]/70 dark:bg-[#6367F0]/30 dark:hover:bg-[#6367F0]/20 dark:focus:bg-[#6367F0]/20"
          >
            Work with us!
          </a>
        </div>

        {/* Image / Animation Section */}
        <div className="w-full flex justify-center">
          <div className="max-w-md w-full">
            <LottieAnimate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
