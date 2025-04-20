// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies?: string[];
    githubLink?: string;
    demoLink?: string;
    image?: string;
}

export const allProjects: Project[] = [
    {
        id: 8,
        title: "Portfolio Website",
        description: "My personal site built from scratch with React, TypeScript, and CSS Modules.",
        technologies: ["React", "TypeScript", "CSS Modules"],
        githubLink: "https://github.com/Kevinouio/portfolio-website",
        demoLink: "https://kevinouio.com",
    },
    {
        id: 2,
        title: "Network Dynamics Combination",
        description:
            "A simulator that couples power grids, transportation networks, and water distribution systems for cross‑domain analysis.",
        technologies: ["Python", "PyPSA", "SUMO"],
        githubLink: "https://github.com/Kevinouio/network-dynamics",
        demoLink: "",
    },
    {
        id: 3,
        title: "GPT-2 From Scratch",
        description:
            "Reimplemented GPT-2 (124M parameters) in PyTorch, with ability to scale up to ~1.5B params.",
        technologies: ["Python", "PyTorch"],
        githubLink: "https://github.com/Kevinouio/gpt2-from-scratch",
        demoLink: "",
    },
    {
        id: 4,
        title: "Swiss Chess Tournament System",
        description:
            "CLI pairing tool for chess tournaments in C++, later reimplemented in Python with a web UI.",
        technologies: ["C++", "Python", "Flask"],
        githubLink: "https://github.com/Kevinouio/chess-tournament",
        demoLink: "",
    },
    {
        id: 5,
        title: "Blackjack Game (Turtle)",
        description:
            "A simple Blackjack recreation using Python’s turtle graphics (first project, 2022).",
        technologies: ["Python", "turtle"],
        githubLink: "https://github.com/Kevinouio/blackjack-turtle",
        demoLink: "",
    },
    {
        id: 6,
        title: "Hand Tracking with OpenCV",
        description:
            "Real‑time hand landmark detection using OpenCV, PyTorch, and MediaPipe (summer 2024 side project).",
        technologies: ["OpenCV", "PyTorch", "MediaPipe"],
        githubLink: "https://github.com/Kevinouio/hand-tracking",
        demoLink: "",
    },
    {
        id: 7,
        title: "Connect 4 αZero Bot",
        description:
            "AlphaZero‑based Connect 4 AI with a React front‑end and PyTorch back‑end.",
        technologies: ["React", "JavaScript", "PyTorch"],
        githubLink: "https://github.com/Kevinouio/connect4-alphazero",
        demoLink: "",
    },
    {
        id: 1,
        title: "DiAlignment",
        description:
            "First hackathon Project at AI ATL in which we develop a a program to test the vulnerability of LLMs to white-box attacks",
        technologies: ["Python", "Hugging Face", "FastAPI"],
        githubLink: "https://github.com/MittelmanDaniel/DiALignment",
        demoLink: "",
    },
    // as you add more projects, just append new objects here in the same format
];
