"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

/**
 * 1) Full text shown on desktop or after "Read more" on mobile.
 */
function FullText() {
    return (
        <>
            <p className="mb-3">
                I’m a results-driven <span className="font-medium">Unity & .NET Engineer</span>{" "}
                with over <span className="font-medium">5 years of experience</span> developing VR,
                multiplayer, and casual games. I specialize in{" "}
                <span className="font-medium">performance optimization</span>, scalable architectures,
                and <span className="font-medium">immersive user experiences</span>.
            </p>
            <p>
                Equipped with a Bachelor’s in Computer Engineering, I bring a keen eye for innovative
                solutions and a passion for pushing technical boundaries.
            </p>
        </>
    );
}

/**
 * 2) Short text for mobile screens (shown by default).
 */
function ShortText() {
    return (
        <p className="mb-3">
            I’m a results-driven <span className="font-medium">Unity & .NET Engineer</span>{" "}
            with over <span className="font-medium">5 years of experience</span> developing VR,
            multiplayer, and casual games. I specialize in{" "}
            <span className="font-medium">performance optimization</span>, scalable architectures,
            and <span className="font-medium">immersive user experiences</span>.
        </p>
    );
}

export default function About() {
    const {ref} = useSectionInView("About");
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.section
            ref={ref}
            className="scroll-mt-28 mb-28 max-w-[60rem] px-4 md:px-8 mx-auto"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>

            {/*
        Grid for laptop/desktop: 2 columns; single column on mobile.
        On mobile, we show short text (and can expand).
        On desktop, we always show full text.
      */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left leading-8">
                {/* Left Column */}
                <div>
                    {/* -- MOBILE VIEW (md:hidden) -- */}
                    <div className="md:hidden">
                        {isExpanded ? <FullText /> : <ShortText />}
                        {!isExpanded && (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="inline-block mt-2 text-blue-600 font-medium underline hover:text-blue-800 transition"
                            >
                                Read more
                            </button>
                        )}
                    </div>

                    {/* -- DESKTOP VIEW (hidden md:block) -- */}
                    <div className="hidden md:block">
                        <FullText />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center">
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <span className="font-semibold">Performance Optimization</span>:
                            Expertise in profiling and optimizing Unity & .NET applications.
                        </li>
                        <li>
                            <span className="font-semibold">Scalable Architectures</span>:
                            Building large-scale .NET frameworks for VR/AR experiences.
                        </li>
                        <li>
                            <span className="font-semibold">Immersive Experiences</span>:
                            Designing AI-driven VR therapeutic solutions and scenario-based training.
                        </li>
                        <li>
                            <span className="font-semibold">Multiplayer Development</span>:
                            Creating real-time, high-concurrency worlds.
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}
