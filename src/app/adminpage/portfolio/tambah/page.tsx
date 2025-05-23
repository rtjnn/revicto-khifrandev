import Header from "@/app/components/header/header";

import SidebarAdmin from "@/app/components/sidebar/sidebar";
import TambahPortfolio from "@/app/components/tambahportfolioadmin/page";
import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { TbLayoutNavbarCollapse } from "react-icons/tb";

const TambahPage = () => {
  
  
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
              <li className="flex items-center">
                <span>Portfolio</span>
                <IoIosArrowForward className="mx-1 text-gray-500 dark:text-neutral-500" />
              </li>
              <li
                className="font-semibold text-gray-800 dark:text-neutral-400"
                aria-current="page"
              >
                <span>Create</span>
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
          <TambahPortfolio />
        </div>
      </div>
    </>
  );
};

export default TambahPage;
