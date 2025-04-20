// src/App.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";       // ← updated
import Portfolio from "./pages/Portfolio";
import ScrollIndicator from "./components/ScrollIndicator";

export default function App() {
    useEffect(() => {
        AOS.init({ once: true, offset: 120, duration: 600, easing: "ease-out-cubic" });
    }, []);

    return (
        <>
            <Navbar />
            <ScrollIndicator />
            <Portfolio />
        </>
    );
}
