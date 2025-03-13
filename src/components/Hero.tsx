export default function Hero() {
    return (
        <section className="bg-background min-h-screen flex flex-col justify-center items-center text-center px-6">
            <div>
                <h1
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="text-5xl font-bold text-primary">
                    Hey, I'm Kevin Ho
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    className="mt-4 text-xl text-secondary max-w-2xl">
                    I'm a Computer Science & Mathematics student at Mississippi State University, passionate about AI, ML, and full-stack development.
                </p>
            </div>
            <div>
                <nav className="bg-black py-4">
                    <ul className="flex justify-center space-x-6 text-white text-xl font-bold uppercase">
                        <h2>Projects</h2>
                        <span className="text-primary-400">/</span>
                        <h2>Education</h2>
                        <span className="text-gray-400">/</span>
                        <h2>Skills</h2>
                        <span className="text-gray-400">/</span>
                        <h2>Resume</h2>
                    </ul>
                </nav>

            </div>
        </section>
    );
}
