"use client";

import Image from "next/image";
import React, { useState } from "react";
import CountUp from "../Reactbits/CountUp/CountUp";
import { FaPeopleArrows } from "react-icons/fa";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { BiHappyBeaming } from "react-icons/bi";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[#00000]">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-3xl font-bold mb-12">
                Why <span className="text-yellow-400">Choose Us?</span>
              </h2>
              <p className="text-sm text-gray-300">
                With a proven track record in crafting exceptional apps and
                websites, we bring innovation and expertise to every project.
                From sleek mobile applications to dynamic websites, our
                portfolio demonstrates our ability to turn ideas into reality.
                Choose us for impactful digital solutions that elevate
                businesses.
              </p>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                {[1, 2, 3].map((id) => {
                  const tabContent = [
                    {
                      title: "Innovative Solutions",
                      description: "",
                    },
                    {
                      title: "Reliability and Speed",
                      description: "",
                    },
                    {
                      title: "Client-Centric Collaboration",
                      description: "",
                    },
                  ][id - 1];

                  return (
                    <button
                      key={id}
                      type="button"
                      className={`transition-all duration-300 ease-in-out
    ${
      activeTab === id
        ? "bg-white shadow-md dark:bg-yellow-400"
        : "hover:bg-gray-200 dark:hover:bg-yellow-400"
    }
    text-start focus:outline-none p-4 md:p-5 rounded-xl`}
                      aria-selected={activeTab === id}
                      role="tab"
                      onClick={() => setActiveTab(id)}
                    >
                      <span className="flex gap-x-6">
                        <span className="grow">
                          <span className="block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            {tabContent.title}
                          </span>
                          <span className="block mt-1 text-gray-800 dark:text-neutral-200">
                            {tabContent.description}
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                  {[1, 2, 3].map((id) => {
                    const isActive = activeTab === id;
                    return (
                      <Image
                        key={id}
                        src={`/gambar/${id}.jpg`}
                        alt={`Features Image ${id}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl shadow-gray-200 dark:shadow-gray-900/20 transition-opacity duration-500 ease-in-out ${
                          isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        width={1000}
                        height={1000}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950"></div>
          </div>
        </div>

        {/* <!-- Stats --> */}
        <div className="">
          <h2 className="text-3xl font-bold mb-12">
            We Are <span className="text-yellow-400">Professional</span>
          </h2>
          <p>
            We personalize how we work to fit your project needs. Our approach
            helps augment innovation.
          </p>
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-neutral-800 rounded-xl">
              <div className="p-4 lg:p-8 bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  {/* <!-- Stats --> */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <LiaPrayingHandsSolid className="w-10 h-10 text-yellow-400 mx-auto" />
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        <CountUp
                          from={0}
                          to={50}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text"
                        />
                        +
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Successul Projects
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Stats --> */}

                  {/* <!-- Stats --> */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <BiHappyBeaming className="w-10 h-10 text-yellow-400 mx-auto" />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        <CountUp
                          from={0}
                          to={50}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text"
                        />
                        +
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Stats --> */}

                  {/* <!-- Stats --> */}
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <FaPeopleArrows className="w-10 h-10 text-yellow-400 mx-auto" />
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        <CountUp
                          from={0}
                          to={10}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text"
                        />
                        +
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Team Members
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Stats --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Stats --></div> */}
      </div>
    </>
  );
};

export default AboutSection;
