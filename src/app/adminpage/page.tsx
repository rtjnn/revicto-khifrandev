import Header from "@/app/components/header/header";
import SidebarAdmin from "@/app/components/sidebar/sidebar";
import React from "react";
import { FaEye, FaSmile, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleOutline, IoTrendingDown, IoTrendingUp } from "react-icons/io5";
import { TbClick, TbLayoutNavbarCollapse } from "react-icons/tb";
import Chartds from "../components/chart/chart";

const DashboardPage = () => {
  return (
    <>
      <Header />
      {/* MAIN CONTENT */}
      <div className="-mt-px">
        {/* Breadcrumb */}
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex items-center py-2">
            {/* Navigation Toggle */}
            <button
              type="button"
              className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-application-sidebar"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-application-sidebar"
            >
              <span className="sr-only">Toggle Navigation</span>
              <TbLayoutNavbarCollapse />
            </button>

            {/* Breadcrumb */}
            <ol className="ms-3 flex items-center space-x-1 text-sm text-gray-800 dark:text-neutral-400">
              <li className="flex items-center">
                <span>Application Layout</span>
                <IoIosArrowForward className="mx-1 text-gray-500 dark:text-neutral-500" />
              </li>
              <li
                className="font-semibold text-gray-800 dark:text-neutral-400"
                aria-current="page"
              >
                <span>Dashboard</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <SidebarAdmin />

      {/* Content */}
      <div className="w-full lg:ps-64">
        <div className="p-4 pt-0 sm:p-6 space-y-4 sm:space-y-6">
          {/* // <!-- Card Section --> */}
          <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Grid --> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* <!-- Card --> */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-11 bg-gray-100 rounded-lg dark:bg-neutral-800">
                    <FaUser/>
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Total Project
                      </p>
                      <div className="hs-tooltip">
                        <div className="hs-tooltip-toggle">
                          <IoHelpCircleOutline/>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        50
                      </h3>
                      <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                        <IoTrendingUp/>
                        <span className="inline-block text-xs font-medium">
                          12.5%
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Card -->

              <!-- Card --> */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-11 bg-gray-100 rounded-lg dark:bg-neutral-800">
                  <FaSmile/>
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Happy Client
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl font-medium text-gray-800 dark:text-neutral-200">
                        99.9%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Card -->

                <!-- Card --> */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-11 bg-gray-100 rounded-lg dark:bg-neutral-800">
                    <TbClick />
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                       Pageviews
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                        56
                      </h3>
                      <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
                        <IoTrendingDown/>
                        <span className="inline-block text-xs font-medium">
                          1.7%
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Card -->

              <!-- Card --> */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                <div className="p-4 md:p-5 flex gap-x-4">
                  <div className="shrink-0 flex justify-center items-center size-11 bg-gray-100 rounded-lg dark:bg-neutral-800">
                    <FaEye/>
                  </div>

                  <div className="grow">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                        Team
                      </p>
                      <div className="hs-tooltip">
                        <div className="hs-tooltip-toggle">
                          <IoHelpCircleOutline/>
                          
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-x-2">
                      <h3 className="text-xl font-medium text-gray-800 dark:text-neutral-200">
                        10
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Grid --> */}
            <div className="pt-10">
             <Chartds />
             </div>
          </div>
          {/* // <!-- End Card Section --> */}
          
        </div>
       
      </div>
    </>
  );
};

export default DashboardPage;
