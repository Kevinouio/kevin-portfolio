// src/data/skills.ts
export interface Skill {
    name: string;
    level: number; // 0–100
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "C/C++",      level: 100 },
            { name: "Python",     level: 100 },
            { name: "JavaScript", level: 90  },
            { name: "Matlab",     level: 80  },
            { name: "Java",       level: 70  },
            { name: "Haskell",    level: 50  },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React",   level: 100 },
            { name: "Next.js", level: 90  },
            { name: "FastAPI", level: 90  },
            { name: "Flask",   level: 85  },
            { name: "Tailwind",level: 80  },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB",      level: 100 },
            { name: "SQLite",       level: 90  },
            { name: "MariaDB",      level: 80  },
            { name: "PostgreSQL",   level: 70  },
            { name: "Pinecone",     level: 20  },
        ],
    },
    {
        title: "Libraries & Tools",
        skills: [
            { name: "Pytorch",     level: 100 },
            { name: "Numpy",       level: 90  },
            { name: "Keras",       level: 80  },
            { name: "Pandas",      level: 70  },
            { name: "AWS",       level: 70  },
            { name: "Matplotlib",  level: 60  },
        ],
    },
];
