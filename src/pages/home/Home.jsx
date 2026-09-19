import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

// Carousel background images
import home1 from "../../images/home-1.png";
import home2 from "../../images/home-2.png";
import home3 from "../../images/home-3.png";
import home4 from "../../images/home-4.png";

const categories = [
  {
    title: "International Development & Trade Supply",
    icon: "fa-earth-americas",
  },
  {
    title: "Maintenance",
    icon: "fa-screwdriver-wrench",
  },
  {
    title: "TPM Solutions",
    icon: "fa-industry",
  },
];

function Home() {
  const carouselRef = useRef(null);
  const carouselInstance = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselInstance.current = new Carousel(carouselRef.current, {
        interval: 5000, // 5s per slide
        ride: "carousel",
        wrap: true,
        pause: false,
      });
    }

    return () => {
      carouselInstance.current?.dispose();
      carouselInstance.current = null;
    };
  }, []);

  return (
    <>
      {/* Hero: split layout — text on the left, carousel on the right */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {/* LEFT: text / intro content */}
          <div className={styles.heroLeft}>
            <h1 className={styles.aboutTitle}>
              International Development &amp; Trade Supply
            </h1>
            <p className={styles.aboutTagline}>
              Reliable trade, logistics and development solutions across markets.
            </p>
          </div>

          {/* RIGHT: carousel */}
          <div className={styles.heroRight}>
            <div className={styles.carouselWrapper}>
              <div
                id="homeCarousel"
                ref={carouselRef}
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={home1} className="d-block w-100" alt="IDTS operations 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={home2} className="d-block w-100" alt="IDTS operations 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={home3} className="d-block w-100" alt="IDTS operations 3" />
                  </div>
                  <div className="carousel-item">
                    <img src={home4} className="d-block w-100" alt="IDTS operations 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className={styles.aboutTeaser}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7">
              <h2 className={styles.sectionTitle}>Who we are</h2>
              <p className={styles.teaserText}>
                IDTS brings together trade, logistics and technical
                maintenance under one roof, helping partners move goods and
                keep operations running smoothly across borders.
              </p>
              <Link to="/about" className={styles.teaserLink}>
                Learn more about us <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>
            What We Offer
          </h2>
          <div className="row g-4 mt-2 justify-content-center">
            {categories.map((cat) => (
              <div className="col-12 col-md-4" key={cat.title}>
                <div className={styles.categoryCard}>
                  <i className={`fa-solid ${cat.icon} ${styles.categoryIcon}`}></i>
                  <p className={styles.categoryTitle}>{cat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className={styles.ctaBanner}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Ready to work with us?</h2>
          <p className={styles.ctaText}>
            Get in touch and let&apos;s talk about your next project.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Contact us <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;