import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaSwatchbook,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Link from "next/link";

const SidebarAdmin = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        id="hs-application-sidebar"
        className="hs-overlay  [--auto-close:lg]
     hs-overlay-open:translate-x-0
     -translate-x-full transition-all duration-300 transform
     w-65 h-full
     hidden
     fixed inset-y-0 start-0 z-60
     bg-white border-e border-gray-200
     lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
     dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4 flex items-center">
            {/* <!-- Logo --> */}
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              K; Khifrandev
            </a>
            {/* <!-- End Logo --> */}

            <div className="hidden lg:block ms-2"></div>
          </div>

          {/* <!-- Content --> */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                          href="/adminpage/"
                        >
                           <FaHome />
                    Dashboard
                        </Link>
                 
                </li>

                <li className="hs-accordion" id="users-accordion">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 dark:bg-neutral-800 dark:text-neutral-500"
                    aria-disabled="true"
                    aria-expanded="true"
                    aria-controls="users-accordion-child"
                    disabled
                  >
                    <FaUserFriends />
                    Users
                    {/* Icon saat accordion aktif */}
                    <IoMdArrowDropup className="hs-accordion-active:block ms-auto hidden size-4" />
                    {/* Icon saat accordion tidak aktif */}
                    <IoMdArrowDropdown className="hs-accordion-active:hidden ms-auto block size-4" />
                  </button>

                  <div
                    id="users-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="users-accordion"
                  >
                    <ul
                      className="hs-accordion-group ps-8 pt-1 space-y-1"
                      data-hs-accordion-always-open
                    >
                      <li className="hs-accordion" id="users-accordion-sub-1">
                        <button
                          type="button"
                          className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                          aria-expanded="true"
                          aria-controls="users-accordion-sub-1-child"
                        >
                          Sub Menu 1{/* Icon saat accordion aktif */}
                          <IoMdArrowDropup className="hs-accordion-active:block ms-auto hidden size-4" />
                          {/* Icon saat accordion tidak aktif */}
                          <IoMdArrowDropdown className="hs-accordion-active:hidden ms-auto block size-4" />
                        </button>

                        <div
                          id="users-accordion-sub-1-child"
                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                          role="region"
                          aria-labelledby="users-accordion-sub-1"
                        >
                          <ul className="pt-1 space-y-1">
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion" id="account-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                    aria-expanded="true"
                    aria-controls="account-accordion-child"
                  >
                    <FaSwatchbook />
                    Portfolio
                    {/* Icon saat accordion aktif */}
                    <IoMdArrowDropup className="hs-accordion-active:block ms-auto hidden size-4" />
                    {/* Icon saat accordion tidak aktif */}
                    <IoMdArrowDropdown className="hs-accordion-active:hidden ms-auto block size-4" />
                  </button>

                  <div
                    id="account-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul
                      className="ps-8 pt-1 space-y-1"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <li>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                          href="/adminpage/portfolio"
                        >
                          Lihat
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                          href="/adminpage/portfolio/tambah"
                        >
                          Tambah
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 dark:bg-neutral-800 dark:text-neutral-500"
                    aria-disabled="true"
                  >
                    <SlCalender />
                    Calendar
                  </span>
                </li>

                <li>
                  <span
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 dark:bg-neutral-800 dark:text-neutral-500"
                    aria-disabled="true"
                  >
                    <IoDocumentTextSharp />
                    Documentation
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
