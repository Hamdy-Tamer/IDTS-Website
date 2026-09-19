import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            <i className="fa-solid fa-house"></i>
            <span>Back to Home</span>
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            <i className="fa-solid fa-envelope"></i>
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;