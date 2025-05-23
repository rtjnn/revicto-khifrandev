import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-neutral-900">
      {/* HEADER */}
      <header className="flex justify-center py-6 shadow-md bg-white dark:bg-neutral-800">
        <nav className="px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <Image
            width={50}
            height={50}
            className="rounded-full"
            src="/gambar/logo_transparent.png"
            alt="Logo"
          />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Khifrandev
          </span>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-8xl font-extrabold text-blue-600 dark:text-blue-400 select-none">
          404
        </h1>
        <p className="mt-6 text-lg font-semibold text-gray-700 dark:text-neutral-300">
          Oops, something went wrong.
        </p>
        <p className="text-gray-600 dark:text-neutral-400 max-w-md mt-2">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </main>

      {/* FOOTER */}
      <footer className="py-4 text-center text-gray-500 dark:text-neutral-500 text-sm">
        © All Rights Reserved. 2022.
      </footer>
    </div>
  );
}
