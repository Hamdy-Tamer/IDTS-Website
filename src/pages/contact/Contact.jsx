import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      detail: "info@idts.com",
      link: "mailto:info@idts.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      detail: "+20 100 000 0000",
      link: "tel:+201000000000",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Website",
      detail: "www.idts.com",
      link: "https://www.idts.com",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroText}>
            Get in touch with us. We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.sectionText}>
                Have a question or want to work with us? Reach out through any
                of the channels below.
              </p>

              <div className={styles.contactInfoList}>
                {contactInfo.map((info) => (
                  <div className={styles.contactInfoItem} key={info.title}>
                    <div className={styles.contactInfoIcon}>
                      <i className={info.icon}></i>
                    </div>
                    <div className={styles.contactInfoContent}>
                      <p className={styles.contactInfoTitle}>{info.title}</p>
                      <a href={info.link} className={styles.contactInfoDetail}>
                        {info.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <p className={styles.socialLabel}>Follow us</p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" aria-label="Pinterest" className={styles.socialIcon}>
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className={styles.formWrapper}>
                <h2 className={styles.sectionTitle}>Send us a Message</h2>
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.formLabel}>
                          <i className="fa-solid fa-user"></i> First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`${styles.formInput} ${errors.firstName ? styles.inputError : ""}`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <div className={styles.errorMessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span>{errors.firstName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.formLabel}>
                          <i className="fa-solid fa-user"></i> Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`${styles.formInput} ${errors.lastName ? styles.inputError : ""}`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <div className={styles.errorMessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span>{errors.lastName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                          <i className="fa-solid fa-envelope"></i> Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <div className={styles.errorMessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>
                          <i className="fa-solid fa-comment"></i> Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`${styles.formTextarea} ${errors.message ? styles.inputError : ""}`}
                          placeholder="Write your message here..."
                          rows="5"
                        ></textarea>
                        {errors.message && (
                          <div className={styles.errorMessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span>{errors.message}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className={styles.submitButton}>
                        <i className="fa-solid fa-paper-plane"></i> Send Message
                      </button>
                    </div>
                  </div>
                </form>

                {isSubmitted && (
                  <div className={styles.successMessage}>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Your message has been sent successfully!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;