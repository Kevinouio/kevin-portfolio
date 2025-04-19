// Skills.tsx
export default function Skills() {
    const skills = [
        "JavaScript", "TypeScript", "React", "Node.js",
        "Python", "TensorFlow", "Tailwind CSS", "Git",
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-text-dark rounded-lg shadow"
                >
          {skill}
        </span>
            ))}
        </div>
    );
}
