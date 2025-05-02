import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";
import undeadsImg from "@/public/projects/undeads.jpeg";
import puzzlefightImg from "@/public/projects/puzzlefight.png";
import handycandyImg from "@/public/projects/handycandy.png";
import bingoImg from "@/public/projects/bingo.png";
import match3Img from "@/public/projects/match3.png";
import reactorImg from "@/public/projects/reactor.jpg";
import amongusImg from "@/public/projects/amongus.png";
import cosmoCarImg from "@/public/projects/cosmoCar.png";
import ragalikImg from "@/public/projects/ragalik.png";
import ghostUkraineImg from "@/public/projects/ghostUkraine.png";
import mrEscapeImg from "@/public/projects/mrEscape.png";
import dadSimulatorImg from "@/public/projects/dadSimulator.png";
import wormImg from "@/public/projects/worm.jpg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData = [
    {
        title: "Match3 Stars",
        description:
            "Casual PVP Match3 game using Akka and AWS. Developed multilayer dynamics, meta mini-games, optimized game logic, and built a reactive UI.",
        tags: ["Unity", "C#", "Akka", "AWS", "Multiplayer"],
        imageUrl: match3Img,
        learnMoreUrl: "https://play.google.com/store/apps/details?id=com.matchstars.match3starspvpchampions",
    },
    {
        title: "Bingo",
        description:
            "Casual bingo game. Developed backend on AWS to ensure stable multiplayer interactions, smooth performance, and responsive UI.",
        tags: ["Unity", "C#", ".NET", "AWS", "Multiplayer"],
        imageUrl: bingoImg,
        learnMoreUrl: "https://play.google.com/store/apps/details?id=com.Galaxy4Games.BingoLoveinMontana&hl=en_US&gl=US",
    },
    {
        title: "Undeads MMORPG",
        description:
            "MMORPG survival game on the Ethereum blockchain with in-game NFTs. Built scalable architectures using AWS, Mirror, and a custom .NET server.",
        tags: ["Unity", "C#", ".NET", "Blockchain", "AWS", "Mirror"],
        imageUrl: undeadsImg,
        learnMoreUrl: "https://undeads.com/",
    },
    {
        title: "Puzzle Fight",
        description:
            "Real-time Match-3 PvP game. Architected backend with AWS and .NET for seamless multiplayer, matchmaking, and in-game economy.",
        tags: ["Unity", "C#", ".NET", "AWS", "Mirror", "Match-3"],
        imageUrl: puzzlefightImg,
        learnMoreUrl: "https://galaxy4games.com/our-work/projects/puzzlefight/",
    },
    {
        title: "Handy Candy",
        description:
            "Hyper-casual mobile title. Created reusable game systems to reduce development time and support rapid prototyping for quality releases.",
        tags: ["Unity", "C#", "Android/iOS", "Clean Code", "2D/3D"],
        imageUrl: handycandyImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/bear",
    },
    {
        title: "Cosmo Car",
        description:
            "Personal hyper-casual project featuring procedural road generation and vehicle control mechanics for engaging gameplay.",
        tags: ["Unity", "C#", "Hyper-casual", "Procedural"],
        imageUrl: cosmoCarImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/cosmo-car",
    },
    {
        title: "Among Us",
        description:
            "Team project under tight deadlines. Implemented IO-based gameplay and a simulated multiplayer system to capture cooperative challenges.",
        tags: ["Unity", "C#", "Multiplayer", "Game Jam"],
        imageUrl: amongusImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/among-us",
    },
    {
        title: "Reactor",
        description:
            "Indie Arkanoid idle project. Brainstormed ideas, documented gameplay mechanics, and prepared for public presentation in an indie setup.",
        tags: ["Unity", "C#", "Indie", "Arkanoid"],
        imageUrl: reactorImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/reactor",
    },
    {
        title: "Ragalik",
        description:
            "Roguelike game exploring world mechanics, weapon systems, and pathfinding. Project stalled early but showcased promising design efforts.",
        tags: ["Unity", "C#", "Roguelike", "Pathfinding"],
        imageUrl: ragalikImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/ragalik",
    },
    {
        title: "Worm",
        description:
            "Personal hyper-casual project featuring spline development and mesh generation for a unique, dynamic gameplay experience.",
        tags: ["Unity", "C#", "Hyper-casual", "Mesh"],
        imageUrl: wormImg,
        learnMoreUrl: "https://gitlab.com/unitysource/wormrearchitect",
    },
    {
        title: "Mr Escape",
        description:
            "Puzzle game with a physics engine. Completed as a test project using off-the-shelf packages with custom animation tweaks.",
        tags: ["Unity", "C#", "Puzzle", "Physics"],
        imageUrl: mrEscapeImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/mr-escape",
    }
] as const;

export const experiencesData = [
    {
        title: "VR Software Engineer",
        location: "Florida (Remote)",
        description:
            "Developed a VR therapeutic app for autistic children with AI-driven prompting on Quest devices. Created a scenario-based system and integrated VR avatars with IK for immersive, natural interactions.",
        icon: React.createElement(CgWorkAlt),
        date: "Sep 2024 – Dec 2024 (LucidRealityLabs)",
    },
    {
        title: "Lead Unity Engineer",
        location: "Estonia (Remote)",
        description:
            "Led a large-scale .NET-based Unity project, implementing interactive gameplay features and modular UI packages. Coordinated cross-functional teams to ensure performance and scalability.",
        icon: React.createElement(CgWorkAlt),
        date: "Jun 2023 – Sep 2024 (Galaxy4Games)",
    },
    {
        title: "Unity Software Engineer",
        location: "UK (Remote)",
        description:
            "Developed core .NET systems for an online multiplayer game, focusing on scalable networking and seamless interactions. Integrated new features, boosting engagement and ensuring timely delivery.",
        icon: React.createElement(CgWorkAlt),
        date: "Jul 2022 – Jun 2023 (Whimsy Games)",
    },
    {
        title: "Unity Developer",
        location: "Kiev, Ukraine (On-site)",
        description:
            "Created hyper-casual and casual .NET games with reusable systems, accelerating production. Mentored teammates on .NET workflows and optimized new and legacy code for better performance.",
        icon: React.createElement(CgWorkAlt),
        date: "Sep 2020 – May 2022 (Appside)",
    },
    {
        title: "Unity/C# Engineer",
        location: "Kyiv, Ukraine (On-site)",
        description:
            "Built casual and WebGL games in Unity and C#, establishing foundational systems for performance and streamlined workflows. Collaborated with designers and QA to integrate features smoothly.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2019 – Mar 2020 (WOUFF)",
    },
    {
        title: "Bachelor degree in Information Systems",
        location: "Kyiv, Ukraine",
        description:
            "Bachelor's in Information Systems, Taras Shevchenko National University.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Jun 2023",
    },
] as const;

// Adjusted hard skills to better reflect your portfolio's focus.
export const hardSkills = [
    "Unity, C#",
    "Multiplayer Systems",
    "AWS",
    "Mirror",
    "VR Development",
    "VR/Mobile Optimization",
    "CI/CD",
    "Git",
];

// Soft skills provided.
export const softSkills = [
    "Adaptability & Flexibility",
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Emotional Intelligence",
];