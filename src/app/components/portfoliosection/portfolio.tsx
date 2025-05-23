"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getSupabase } from '@/libs/supabase'

const supabase = getSupabase()


type PortfolioItem = {
  id: number;
  gambar: string;
  nama: string;
  jenis: "web" | "mobile";
  text: string;
};

const PortfolioSection = () => {
  const [data, setData] = useState<PortfolioItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from("portfolio").select("*");
      if (error) {
        setError(error.message);
      } else {
        setData(data as PortfolioItem[]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.jenis === filter);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="portfolio" className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-3xl font-bold mb-12">
        Our <span className="text-yellow-400">Portfolio</span>
      </h2>

      {/* Filter Button */}
      <div className="mb-8 flex gap-4 justify-center">
        {["all", "web", "mobile"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "all" | "web" | "mobile")}
            className={`px-4 py-2 rounded-full border transition ${
              filter === type
                ? "bg-yellow-600 text-white"
                : "bg-transparent border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        <AnimatePresence mode="wait">
          {isLoading
            ? [...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse flex flex-col sm:flex-row gap-5 w-full"
                >
                  <div className="bg-gray-300 dark:bg-neutral-700 w-full sm:w-56 h-44 rounded-xl" />
                  <div className="flex-1 space-y-4 py-2">
                    <div className="h-6 bg-gray-300 dark:bg-neutral-700 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-full" />
                    <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-5/6" />
                    <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-1/2" />
                  </div>
                </div>
              ))
            : filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <a
                    className="group block rounded-xl overflow-hidden focus:outline-none"
                    href="#"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                      <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                          width={1000}
                          height={1000}
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                          src={item.gambar}
                          alt={`Portfolio ${item.id}`}
                          loading="lazy"
                        />
                      </div>

                      <div className="grow p-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                          {item.nama}
                        </h3>
                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                          {item.text}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                          Read more
                          <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;
