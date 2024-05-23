import React from "react";
import app from "@/public/app.png";

import { motion } from "framer-motion";
import cloud from "@/public/cloud.png";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      initial={{ y: 600 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div class="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
        <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div class="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
            <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              Your tagline{" "}
            </span>
            <h1 class="text-neutral-600 md:text-7xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter">
              Creating Next Level Digital Products
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
              With a solid track record in designing websites, I deliver strong
              and user-friendly digital designs.
            </p>
            <div class="flex flex-wrap gap-7 w-full mt-2 lg:justify-between -mx-4 text-left">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                class="sm:w-1/4 w-1/4 p-4 mt-4"
              >
                <button class="cursor-pointer flex items-center gap-2 text-white font-bold relative text-[14px] w-[7em] h-[3em] lg:w-[9em]  text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  <Image
                    src={app}
                    alt="app"
                    height={25}
                    width={25}
                    className="lg:flex hidden"
                  />

                  <p className="mx-auto">Mobile Apps</p>
                </button>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                class="sm:w-1/4 w-1/4 p-4 mt-4"
              >
                <button class="cursor-pointer flex items-center gap-2 text-white font-bold relative text-[14px] w-[7em] h-[3em] lg:w-[9em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  <Image
                    src={cloud}
                    alt="app"
                    height={25}
                    width={25}
                    className="lg:flex hidden"
                  />

                  <p className="mx-auto">Cloud Comp</p>
                </button>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                class="sm:w-1/4 w-1/4 p-4 mt-4"
              >
                <button class="cursor-pointer flex items-center gap-0 text-white font-bold relative text-[14px] w-[7em] h-[3em] lg:w-[9em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:flex hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                      fill="#1ABCFE"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                      fill="#0ACF83"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                      fill="#FF7262"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                      fill="#F24E1E"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                      fill="#A259FF"
                    ></path>
                  </svg>
                  <p className="mx-auto">UI/UX</p>
                </button>
              </motion.div>
            </div>
          </div>
          <div class="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
            <div>
              <div class="relative w-full max-w-lg">
                <div class="bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-0 rounded-full"></div>

                <div class="bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
