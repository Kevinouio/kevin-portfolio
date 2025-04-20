export interface FunFact {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const funFacts: FunFact[] = [
    {
        id: 1,
        title: "President, MSU Chess Club",
        description:
            "As the president of Mississippi State University's Chess Club, I lead weekly meetings, organize local tournaments, and manage outreach to grow student involvement. I also handle logistics, match pairings, and mentor new players looking to improve their strategic thinking and gameplay.",
        image: "/chess-club.jpg",
    },
    {
        id: 2,
        title: "Vice President, MSU ICPC Club",
        description:
            "I serve as Vice President of the ICPC Competitive Programming Club at MSU, where I help organize weekly problem-solving sessions, mock contests, and training tracks. I was also part of the team that earned 1st place in our ICPC Regional competition, competing against top universities in algorithmic problem-solving.",
        image: "/icpc.jpg",
    },
    {
        id: 4,
        title: "Valorant Esports Team Member",
        description:
            "I play on MSU’s official Valorant team within the Esports Club, competing in the collegiate circuit. We've won our division playoffs in both the fall and spring semesters, and I specialize in support and IGL roles. This experience has taught me the importance of communication, reflexive thinking, and team coordination under pressure.",
        image: "/esports.jpg",
    },
];
