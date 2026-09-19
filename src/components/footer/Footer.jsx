import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: "fa-brands fa-facebook-f", label: "Facebook", url: "#" },
    { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", url: "#" },
    { icon: "fa-brands fa-x-twitter", label: "Twitter / X", url: "#" },
    { icon: "fa-brands fa-pinterest", label: "Pinterest", url: "#" },
  ];

  const quickLinks = [
    { label: "Home", url: "/" },
    { label: "About us", url: "/about" },
    { label: "Contact us", url: "/contact" }
  ];

  const services = [
    { label: "Logistics & Trade", url: "/services/logistics" },
    { label: "Development Consulting", url: "/services/consulting" },
    { label: "Maintenance Solutions", url: "/services/maintenance" },
    { label: "Financial Solutions", url: "/services/financial" }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          {/* Brand + blurb */}
          <div className="col-12 col-md-4">
            <div className={styles.brand}>
              <span className={styles.brandShort}>IDTS</span>
              <span className={styles.brandFull}>
                International Development &amp; Trade Supply
              </span>
            </div>
            <p className={styles.blurb}>
              Connecting markets through reliable trade, logistics and
              development solutions.
            </p>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  title={`${social.label} Page`}
                  className={styles.socialIcon}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-md-2">
            <h6 className={styles.heading}>Quick Links</h6>
            <ul className={styles.linkList}>
              {quickLinks.map((link) =>
                ["Home", "About us", "Contact us"].includes(link.label) ? (
                  <li key={link.label}>
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3">
            <h6 className={styles.heading}>Services</h6>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.label}>
                  <Link to={service.url}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-12 col-md-3">
            <h6 className={styles.heading}>Contact</h6>
            <ul className={styles.contactList}>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Cairo, Egypt</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+20 100 000 0000</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>info@idts.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {year} IDTS — International Development &amp; Trade Supply.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
