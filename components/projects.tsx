"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {projectsData} from "@/lib/data";
import Project from "./project";
import {useSectionInView} from "@/lib/hooks";
import {Link} from "@react-email/components";

import { useState } from "react";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {displayedProjects.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            {!showAll && (
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                        Show more
                    </button>
                </div>
            )}
        </section>
    );
}
