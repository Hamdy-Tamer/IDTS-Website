import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Close the services dropdown when clicking anywhere outside of it,
  // and close the mobile menu when clicking anywhere outside the navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`} data-bs-theme="light" ref={navRef}>
      <div className="container-fluid">
        {/* Brand: abbreviation on top, full name underneath */}
        <Link className={`navbar-brand ${styles.brand}`} to="/">
          <span className={styles.brandShort}>IDTS</span>
          <span className={styles.brandFull}>
            International Development &amp; Trade Supply
          </span>
        </Link>

        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`} id="mainNavbar">
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navList}`}>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/about" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-circle-info"></i>
                <span>About us</span>
              </Link>
            </li>

            {/* Our Services — dropdown (React-controlled, not Bootstrap data-api) */}
            <li className={`nav-item dropdown ${styles.dropdown} ${servicesOpen ? "show" : ""}`} ref={dropdownRef}>
              <a className={`nav-link dropdown-toggle ${styles.navLink}`}
                href="#"
                id="servicesDropdown"
                role="button"
                aria-expanded={servicesOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen((prev) => !prev);
                }}>
                <i className="fa-solid fa-gears"></i>
                <span>Our Services</span>
              </a>
              <ul className={`dropdown-menu ${styles.dropdownMenu} ${servicesOpen ? "show" : ""}`}
                aria-labelledby="servicesDropdown">
                <li>
                  <a className={`dropdown-item ${styles.dropdownItem}`}
                    href="#"
                    onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                    <i className="fa-solid fa-truck-fast"></i> Logistics &amp; Trade
                  </a>
                </li>
                <li>
                  <a className={`dropdown-item ${styles.dropdownItem}`}
                    href="#"
                    onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                    <i className="fa-solid fa-chart-line"></i> Development Consulting
                  </a>
                </li>
                <li>
                  <Link className={`dropdown-item ${styles.dropdownItem}`}
                    to="/services/maintenance"
                    onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                    <i className="fa-solid fa-boxes-stacked"></i> Maintenance Solutions
                  </Link>
                </li>
                                <li>
                  <Link className={`dropdown-item ${styles.dropdownItem}`}
                    to="/services/financial"
                    onClick={() => { setServicesOpen(false); setMobileOpen(false); }}>
                    <i className="fa-solid fa-file-invoice-dollar"></i> Financial Solutions
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/contact" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-envelope"></i>
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
