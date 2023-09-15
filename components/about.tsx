"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4 leading-8">
        Pursuing my Masters I'm a dedicated web developer with a penchant for
        crafting purpose-driven, cutting-edge websites. I'm advancing my
        expertise through a Master's program in IT, where I thrive on the
        intricate art of problem-solving within the realm of full-stack
        development. My current technical arsenal features React, Next.js,
        Tailwind CSS, and MySQL for an elevated development experience.
      </p>
      <p>
        I'm not one to conform to the norm; I'm driven by{" "}
        <span className="underline">innovation</span>. In my quest, I'm{" "}
        <span className="italic"> actively seeking</span> a full-time position
        as a full-stack developer, poised to introduce fresh perspectives to the
        industry. Beyond coding, I'm an avid outdoor enthusiast, a fervent Real
        Madrid supporter, and an <span className="italic">accomplished</span>{" "}
        photographer.{" "}
      </p>
    </motion.section>
  );
}
