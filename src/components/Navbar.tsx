// src/components/Navbar.tsx
import styles from "../styles/components/Navbar.module.css";
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const socials = [
        { icon: <FaDev />,      url: "https://devpost.com/kevintho2005?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",    label: "Dev.to"    },
        { icon: <FaGithub />,   url: "https://github.com/Kevinouio", label: "GitHub"   },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/kevin-ho-1a040b239/", label: "LinkedIn" },
    ];

    const links = [
        { label: "Home",     href: "#home"     },
        { label: "Projects", href: "#projects" },
        { label: "Skills",   href: "#skills"   },
        { label: "About",    href: "#about"    },
        { label: "Resume",   href: "#resume"   },
        { label: "Contact",  href: "#contact"  },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                {/* Left: social icons */}
                <ul className={styles.socialList}>
                    {socials.map(({ icon, url, label }) => (
                        <li key={url}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right: nav links */}
                <ul className={styles.linkList}>
                    {links.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

