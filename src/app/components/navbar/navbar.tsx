import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbLayoutNavbarCollapse } from "react-icons/tb";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current: string = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const rect = el.getBoundingClientRect();
        const id = el.getAttribute("id");

        // Ubah threshold jika mau lebih sensitif, misal: 150
        if (rect.top <= 200 && rect.bottom >= 200 && id) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inisialisasi saat mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (id: string) =>
    activeSection === id
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-neutral-300 focus:text-neutral-300";

  return (
    <>
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-sm before:bg-neutral-800/30 before:backdrop-blur-md">
        <nav className="relative max-w-5xl w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <!-- Logo --> */}
              <a
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
                href="../templates/agency/index.html"
                aria-label="Preline"
              >
                K; Khifrandev
              </a>
              {/* <!-- End Logo --> */}

              <div className="ms-1 sm:ms-2"></div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-floating-dark-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-floating-dark"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-floating-dark"
              >
                <TbLayoutNavbarCollapse/>
              </button>
            </div>
          </div>

          {/* <!-- Collapse --> */}

          <div
            id="hs-navbar-floating-dark"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-navbar-floating-dark-collapse"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-2 md:py-0 md:ps-7">
              <a
                className={`pe-3 ps-px sm:px-3 md:py-4 text-sm focus:outline-hidden ${isActive(
                  "home"
                )}`}
                href="#home"
                aria-current="page"
              >
                Home
              </a>
              <a
                className={`pe-3 ps-px sm:px-3 md:py-4 text-sm focus:outline-hidden ${isActive(
                  "about"
                )}`}
                href="#about"
              >
                About
              </a>
              <a
                className={`pe-3 ps-px sm:px-3 md:py-4 text-sm focus:outline-hidden ${isActive(
                  "service"
                )}`}
                href="#service"
              >
                Services
              </a>
              <a
                className={`pe-3 ps-px sm:px-3 md:py-4 text-sm focus:outline-hidden ${isActive(
                  "portfolio"
                )}`}
                href="#portfolio"
              >
                Portfolio
              </a>
              <a
                className={`pe-3 ps-px sm:px-3 md:py-4 text-sm focus:outline-hidden ${isActive(
                  "contact"
                )}`}
                href="#contact"
              >
                Contact
              </a>
              <Link
                className={`pe-3 ps-px sm:px-3 md:py-4 text-sm focus:outline-hidden `}
                href="/login/"
              >
                Log-in
              </Link>

              <div>
                <a href="../templates/agency/index.html#contact"></a>
              </div>
            </div>
          </div>
          {/* <!-- End Collapse --> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
