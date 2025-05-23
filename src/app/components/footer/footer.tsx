import React from "react";

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-white dark:bg-neutral-900 min-h-[600px] pt-10 pb-32"
      >
        <footer className="mt-auto w-full max-w-5xl py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div className="text-center">
            <div>
              <p className="text-gray-500 dark:text-neutral-500">
                Ready to get started?
              </p>
            </div>
            <div className="mt-3">
              <h2 className="text-3xl font-bold mb-12">
                Launch Your Project{" "}
                <span className="text-yellow-400">With Us</span>
              </h2>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Social Brands --> */}
            <div className="mt-3 space-x-2">
              <a
                href="https://wa.link/u8kytq"
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:outline-hidden focus:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20"
              >
                Work with us!
              </a>
            </div>
            {/* <!-- End Social Brands --> */}
          </div>
          {/* <!-- End Grid --> */}
        </footer>

        {/* <!-- ========== FOOTER ========== --> */}
        <footer className="mt-auto w-full h-sm max-w-5xl py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <a
                className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
                href="#"
                aria-label="Brand"
              >
                K; Khifrandev
              </a>
              <p className="mt-3 text-sm sm:text-sm text-gray-600 dark:text-neutral-400">
                We provide the best solutions and services to solve your
                technology and business problems. Copyright © 2023 khifrandev.
                All rights reserved.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div >
              <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                Product
              </h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#portfolio"
                  >
                    Website
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#portfolio"
                  >
                    Mobile
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
                Contact Us
              </h4>

              <div className="mt-3 grid space-y-3 text-sm">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="https://maps.app.goo.gl/AXJqWVW8n1njmSuU6"
                  >
                    Jl. Cihanjuang No.41, Cimahi, West Java, Indonesia
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="mailto:info@khifrandev.com"
                  >
                    <FaMailBulk /> info@khifrandev.com
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="https://wa.link/u8kytq"
                  >
                    <FaPhone /> +62 89 533 9444 314
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex flex-wrap items-center gap-3">
                <div className="space-x-4 text-sm"></div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="mt-3 sm:hidden">
                  <a
                    className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
                    href="#"
                    aria-label="Brand"
                  >
                    K; Khifrandev
                  </a>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                    We provide the best solutions and services to solve your
                    technology and business problems. Copyright © 2023
                    khifrandev. All rights reserved.
                  </p>
                </div>

                {/* <!-- Social Brands --> */}
                <div className="space-x-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="https://www.instagram.com/khifrandev/"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="https://www.facebook.com/khifrandev/"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="https://www.tiktok.com/@khifrandev"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="https://www.linkedin.com/company/102258508/admin/feed/posts/?feedType=following"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                {/* <!-- End Social Brands --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
          </div>
        </footer>
        {/* <!-- ========== END FOOTER ========== --> */}
      </section>
    </>
  );
};

export default Footer;
