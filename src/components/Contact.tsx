import React, { useState } from "react";
// If you want real reCAPTCHA, install react-google-recaptcha:
//   npm install react-google-recaptcha
// import ReCAPTCHA from "react-google-recaptcha";
import styles from "../styles/components/Contact.module.css";

export default function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <section id="contact" className={styles.callSection}>
                <button className={styles.openButton} onClick={() => setShowForm(true)}>
                    Contact Me
                </button>
            </section>

            {showForm && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <button
                            className={styles.closeButton}
                            onClick={() => {
                                setShowForm(false);
                                setSubmitted(false);
                            }}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <h2 className={styles.modalTitle}>Get In Touch</h2>

                        {!submitted ? (
                            <form className={styles.form} onSubmit={handleSubmit} action="https://formspree.io/f/xpwpvobg"
                                  method="POST">
                                <label>
                                    <span>Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Message</span>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>




                                <button type="submit" className={styles.submitButton}>
                                    Send
                                </button>
                            </form>
                        ) : (
                            <p className={styles.thankYou}>Thanks for reaching out! I’ll be in touch soon.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
