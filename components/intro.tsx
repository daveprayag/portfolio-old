"use client";
import React from "react";
import Image from "next/image";
import PD1 from "@/public/PD1.jpg";
import PD2 from "@/public/PD2.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import SparklesCore from "./ui/sparkles-core";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const words =
    "Hello, I'm Prayag. I'm a problem solver and I enjoy building better web experiences.";
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 md:pt-[150px] pt-[100px] scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={PD2}
              alt="Prayag portrait"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] object-top border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <TextGenerateEffect words={words} />

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Demo button */}
        <Link
          href="#contact"
          className="bg-slate-800 no-underline group cursor-pointer relative rounded-full p-px text-lg font-medium leading-6 text-gray-50 inline-block"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 px-7 py-3 ring-1 ring-white/10 ">
            <span>{`Connect with me`}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-300 group-hover:opacity-40"></span>
        </Link>

        {/* <Link
          href="#contact"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link> */}
        <a
          href="/PrayagDave_Resume.pdf"
          download
          className="group bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/prayagdave/"
          target="_blank"
          className="bg-white/10 hidden p-4 sm:flex items-center opacity-70 gap-2 rounded-full border border-black/10  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/daveprayag"
          target="_blank"
          className="bg-white/10 p-4 opacity-70 hidden sm:flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 outline-none focus:scale-110 hover:scale-105 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-row sm:hidden mt-4 items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="https://www.linkedin.com/in/prayagdave/"
          target="_blank"
          className="bg-white/10 p-4 flex items-center opacity-70 gap-2 rounded-full border border-black/10  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/daveprayag"
          target="_blank"
          className="bg-white/10 p-4 opacity-70 flex items-center gap-2 rounded-full text-[1.35rem] border border-black/10 outline-none focus:scale-110 hover:scale-105 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
