"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.175}}
          id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I’m a results-driven <span className="font-medium">Unity & .NET Engineer</span> with over <span
            className="font-medium">5 years of experience</span> developing VR, multiplayer, and casual games. I
          specialize in <span className="font-medium">performance optimization</span>, scalable architectures, and <span
            className="font-medium">immersive user experiences</span>. My background includes designing AI-driven VR
          therapeutic applications, implementing large-scale .NET frameworks, and crafting re-usable gameplay systems to
          accelerate development and ensure high-quality outcomes.
        </p>

        <p>
          Equipped with a Bachelor’s in Information Systems, I bring a keen eye for innovative solutions and a passion
          for pushing technical boundaries. Whether building scenario-based VR training or architecting complex
          multiplayer worlds, I thrive on delivering robust, impactful software that elevates player engagement and
          fosters continuous innovation.
        </p>
      </motion.section>
  );
}
