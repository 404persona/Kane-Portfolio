"use client"
import React, { useRef, useState } from "react"
import { RiMailLine } from "@remixicon/react"
import emailjs from "emailjs-com"

const ContactForm = () => {
    const form = useRef()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .sendForm(
                "service_d65xowj",   // your EmailJS Service ID
                "template_rogaeo9",  // your EmailJS Template ID
                form.current,
                "BmmODavDuFNrymkKh"  // your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log("Message Sent:", result.text)
                    setSuccess(true)
                    setLoading(false)
                    form.current.reset()
                },
                (error) => {
                    console.error("Error:", error.text)
                    setSuccess(false)
                    setLoading(false)
                }
            )
    }

    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <div className="row">
                        {/* Full Name */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                                <label htmlFor="name" className="for-icon">
                                    <i className="far fa-user"></i>
                                </label>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="hello@websitename.com"
                                    required
                                />
                                <label htmlFor="email" className="for-icon">
                                    <i className="far fa-envelope"></i>
                                </label>
                            </div>
                        </div>

                        {/* Dropdown Title */}
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="title">Subject</label>
                                <select
                                    id="title"
                                    name="title"
                                    className="form-control"
                                    required
                                >
                                    <option value="">-- Select a Subject --</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Project Quote">Project Quote</option>
                                    <option value="Support Request">Support Request</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write Your message..."
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="theme-btn" disabled={loading}>
                                    {loading ? "Sending..." : "Send Me Message"}{" "}
                                    <i>
                                        <RiMailLine size={16} />
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Success & Error Messages */}
                {success === true && (
                    <p className="text-success mt-3">✅ Message sent successfully!</p>
                )}
                {success === false && (
                    <p className="text-danger mt-3">❌ Failed to send. Try again.</p>
                )}
            </div>
        </div>
    )
}

export default ContactForm
