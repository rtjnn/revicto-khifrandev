"use client";

import React, { useState } from "react";
import { getSupabase } from '@/libs/supabase'

const supabase = getSupabase()

import { useRouter } from "next/navigation";

import { FaCircle, FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";

const Header = () => {
  const router = useRouter();
  const [loadingLogout, setLoadingLogout] = useState(false);

  async function handleLogout() {
    if (loadingLogout) return; // prevent multiple clicks
    setLoadingLogout(true);

    const { error } = await supabase.auth.signOut();

    // ⬇️ Hapus cookie access_token
    document.cookie = "access_token=; path=/; max-age=0";

    if (error) {
      console.error("Logout error:", error.message);
      setLoadingLogout(false);
    } else {
      router.push("/login"); // redirect ke login setelah logout
    }
  }

  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-2.5 lg:ps-65 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 lg:hidden">
            {/* <!-- Logo --> */}
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              K: Khifrandev
            </a>
            {/* <!-- End Logo --> */}

            <div className="lg:hidden ms-1"></div>
          </div>

          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="hidden md:block">
              {/* <!-- Search Input --> */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  className="py-2 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
                  placeholder="Search"
                />
                <div className="hidden absolute inset-y-0 end-0 items-center pointer-events-none z-20 pe-1">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                  <span className="mx-1"></span>
                  <span className="text-xs">/</span>
                </div>
              </div>
              {/* <!-- End Search Input --> */}
            </div>

            <div className="flex flex-row items-center justify-end gap-1">
              <button
                type="button"
                className="md:hidden size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <FaSearch />
                <span className="sr-only">Search</span>
              </button>

              <button
                type="button"
                className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <IoNotifications />
                <span className="sr-only">Notifications</span>
              </button>

              <button
                type="button"
                className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <TbActivityHeartbeat />
                <span className="sr-only">Activity</span>
              </button>

              {/* <!-- Dropdown --> */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropdown-account"
                  type="button"
                  className="size-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none dark:text-white"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <img
                    className="shrink-0 size-9.5 rounded-full"
                    src="/gambar/1.jpg"
                    alt="Avatar"
                  />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropdown-account"
                >
                  <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Signed in as
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      james@site.com
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      --------
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      <button
                        onClick={handleLogout}
                        disabled={loadingLogout}
                        className={`px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition
                        ${
                          loadingLogout
                            ? "bg-red-400 cursor-not-allowed text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                        aria-label="Logout"
                      >
                        {loadingLogout ? (
                          // Spinner SVG kecil
                          <FaCircle className="animate-spin h-5 w-5 mx-auto text-white" />
                        ) : (
                          "Logout"
                        )}
                      </button>
                    </p>
                  </div>

                  <div className="p-1.5 space-y-0.5"></div>
                </div>
              </div>
              {/* <!-- End Dropdown --> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
