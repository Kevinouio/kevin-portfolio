import { useState, useEffect } from "react";


export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div data-aos="fade-right" className="p-6 bg-secondary text-textDark shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">AI Chatbot</h3>
                <p className="mt-2 text-secondary">Built with Python & TensorFlow.</p>
            </div>

            <div data-aos="fade-left" className="p-6 bg-secondary text-textDark shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Finance Dashboard</h3>
                <p className="mt-2 text-secondary">A web app for stock analysis.</p>
            </div>
        </div>

    );
}
