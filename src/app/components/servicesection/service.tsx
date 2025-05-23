import Image from "next/image";
import React from "react";

import AnimatedContent from "../Reactbits/AnimatedContent/AnimatedContent";

const ServiceSection = () => {
  return (
    <>
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <h2 className="text-3xl font-bold mb-12">
              Our <span className="text-yellow-400">Services</span>
            </h2>
          </AnimatedContent>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
              className="group flex flex-col border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 rounded-xl overflow-hidden"
              href="#"
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <Image
                  src="/gambar/website.png"
                  alt="Blog Image"
                  width={800}
                  height={800}
                  className="w-40 h-40 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                />
              </div>

              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Web Development
                </h3>
                <p className="mt-3 text-gray-800 dark:text-neutral-200">
                  Elevate your online presence with our custom-designed websites
                  that blend aesthetics with functionality for an unforgettable
                  user experience.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                </p>
              </div>
            </a>
          </AnimatedContent>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
              className="group flex flex-col border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 rounded-xl overflow-hidden"
              href="#"
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <Image
                  src="/gambar/phone.png"
                  alt="Blog Image"
                  width={800}
                  height={800}
                  className="w-40 h-40 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                />

                <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                  Populer
                </span>
              </div>

              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Mobile App Development
                </h3>
                <p className="mt-3 text-gray-800 dark:text-neutral-200">
                  Harness the power of mobile with our intuitive app solutions,
                  crafted to engage users and drive business growth in the palm
                  of their hands.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                </p>
              </div>
            </a>
          </AnimatedContent>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <a
              className="group flex flex-col border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 rounded-xl overflow-hidden"
              href="#"
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <Image
                  src="/gambar/maintenance.png"
                  alt="Blog Image"
                  width={800}
                  height={800}
                  className="w-40 h-40 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                />
              </div>

              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  Software Maintenance
                </h3>
                <p className="mt-3 text-gray-800 dark:text-neutral-200">
                  Ensure the longevity of your digital assets with our proactive
                  maintenance services, keeping your web and mobile platforms
                  optimized.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                </p>
              </div>
            </a>
          </AnimatedContent>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </>
  );
};

export default ServiceSection;
