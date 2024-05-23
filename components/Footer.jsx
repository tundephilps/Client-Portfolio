"use client";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";

import { motion } from "framer-motion";

import React from "react";
import { FaLocationArrow, FaMailBulk, FaMap } from "react-icons/fa";

const Footer = () => {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <footer className="block bg-black">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Footer Content */}
        <div className="flex flex-col justify-between md:flex-row">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 w-full max-w-[560px] text-3xl font-extrabold text-white md:text-5xl"
          >
            <span className="bg-gradient-to-r from-[#1ABCFE] via-[#0ACF83] via-[#FF7262] via-[#F24E1E] to-[#A259FF] text-transparent bg-clip-text">
              Lightning fast
            </span>{" "}
            Design Dev one call away
          </motion.h2>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex-none md:mt-0"
          >
            <div className="mb-4 flex max-w-[272px] items-start">
              <FaLocationArrow
                alt=""
                className="mr-3 text-4xl inline-block  text-[#1ABCFE]"
              />
              <p className="text-white">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            <div className="mb-4 flex  max-w-[272px] items-start">
              <FaMailBulk
                className="mr-3 inline-block text-2xl text-[#1ABCFE]"
                //   class="text-gradient-to-r from-[#1ABCFE] to-[#A259FF] text-transparent bg-clip-text"
              />
              <p className="text-white">support@flowspark.co</p>
            </div>
          </motion.div>
        </div>
        {/* Divider */}
        <div className={styles.line}>
          <div
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className={styles.box}
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
        {/* Footer Footnotes */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-center font-semibold sm:text-center md:mb-0">
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block py-1.5 pr-6 text-[#636262] transition hover:text-white sm:py-2 sm:pr-6 lg:pr-12"
            >
              Help
            </a>
          </div>
          <p className="text-[#636262]">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
