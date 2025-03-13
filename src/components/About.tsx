export default function About() {
    return (
        <section className="bg-secondary py-16 text-center">
            <h2
                data-aos="fade-up"
                data-aos-duration="1500"  // Animation duration in milliseconds
                className="text-3xl font-semibold text-primary">
                About Me
            </h2>

            <p
                data-aos="fade-up"
                data-aos-delay="300"  // Delays animation by 300ms
                data-aos-duration="1200" // Custom duration for the paragraph
                className="max-w-3xl mx-auto mt-4 text-textDark">
                I’m a software engineer passionate about AI, ML, and full-stack development.
            </p>
        </section>
    );
}
