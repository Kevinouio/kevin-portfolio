// src/data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "AI Chatbot",
        description: "An intelligent chatbot powered by TensorFlow and NLP techniques.",
        technologies: ["Python", "TensorFlow", "Flask"],
        githubLink: "https://github.com/yourusername/chatbot",
        demoLink: "https://chatbotdemo.com",
        image: "/images/chatbot.png",
    },
    {
        id: 2,
        title: "Finance Dashboard",
        description: "Real-time financial analysis and stock market dashboard.",
        technologies: ["React", "TypeScript", "Tailwind"],
        githubLink: "https://github.com/yourusername/finance-dashboard",
        demoLink: "https://financedashboard.com",
        image: "/images/finance-dashboard.png",
    },
    // More projects here
];
