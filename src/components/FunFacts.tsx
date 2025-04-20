import FactSlide from "./FactSlide";
import { funFacts } from "../data/funFacts";

export default function FunFacts() {
    return (
        <section id="fun-facts" style={{padding: "4rem 1.5rem", textAlign: "center"}}>
            <h2 style={{fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "0rem", textAlign: "left"}}>
                Fun Facts & Extracurriculars
            </h2>
            <p style={{fontSize: "1rem", color: "var(--secondary)", textAlign: "left"}}>
                This is just general facts about extracurriculars that I do from a day to day basis kind of deal
            </p>

            {funFacts.map((fact, i) => (
                <FactSlide key={fact.id} fact={fact} reverse={i % 2 === 1}/>
            ))}
        </section>
    );
}
