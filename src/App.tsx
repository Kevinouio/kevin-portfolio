// src/App.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";       // ← updated
import Portfolio from "./pages/Portfolio";

export default function App() {
    useEffect(() => {
        AOS.init({ once: true, offset: 120, duration: 600, easing: "ease-out-cubic" });
    }, []);

    return (
        <>
            <Navbar />
            <Portfolio />
        </>
    );
}
