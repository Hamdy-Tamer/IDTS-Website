import styles from "./About.module.css";
import { Link } from "react-router-dom";

const coreValues = [
  { 
    title: "Integrity", 
    icon: "fa-scale-balanced",
    description: "We act with honesty and transparency in every deal, building trust through consistent ethical conduct."
  },
  { 
    title: "Reliability", 
    icon: "fa-shield-halved",
    description: "We deliver on our promises, ensuring your operations run without interruption."
  },
  { 
    title: "Innovation", 
    icon: "fa-lightbulb",
    description: "We constantly seek better ways to solve challenges and improve supply chain efficiency."
  },
  { 
    title: "Partnership", 
    icon: "fa-people-arrows",
    description: "We build lasting relationships, treating our clients' success as our own."
  },
];

const benefits = [
  {
    title: "Experienced Team",
    text: "Specialists across trade, logistics and technical maintenance.",
    icon: "fa-user-tie",
  },
  {
    title: "Global Network",
    text: "Partners and routes across multiple regions and industries.",
    icon: "fa-network-wired",
  },
  {
    title: "Tailored Solutions",
    text: "Plans built around each client's operations, not a fixed template.",
    icon: "fa-sliders",
  },
  {
    title: "Ongoing Support",
    text: "Maintenance and follow-up long after the deal is signed.",
    icon: "fa-headset",
  },
];

const approachSteps = [
  {
    title: "Understand",
    text: "We start by learning your market, goods and constraints.",
    icon: "fa-magnifying-glass",
  },
  {
    title: "Plan",
    text: "A trade, logistics or maintenance plan built around your goals.",
    icon: "fa-diagram-project",
  },
  {
    title: "Deliver & Support",
    text: "Execution followed by continuous maintenance and support.",
    icon: "fa-hand-holding-heart",
  },
];

function About() {
  return (
    <>
      <section className={styles.intro}>
        <div className="container text-center">
          <span className={styles.introEyebrow}>IDTS</span>
          <h1 className={styles.introTitle}>
            International Development &amp; Trade Supply
          </h1>
          <p className={styles.introText}>
            IDTS was built to close the gap between trade, logistics and
            technical maintenance — three areas that are usually handled by
            separate vendors, and rarely talk to each other. We bring them
            under one roof so goods move, equipment keeps running, and
            partners deal with a single, accountable team instead of
            juggling several. From sourcing and cross-border supply to
            on-site maintenance and TPM programs, our work is judged by one
            thing: whether your operations kept running without
            interruption.
          </p>
        </div>
      </section>

      <section className={styles.tabsSection}>
        <div className="container">
          <ul
            className={`nav nav-tabs ${styles.navTabs}`}
            id="aboutTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link active ${styles.tabButton}`}
                id="mission-tab"
                data-bs-toggle="tab"
                data-bs-target="#mission"
                type="button"
                role="tab"
                aria-controls="mission"
                aria-selected="true"
              >
                <i className="fa-solid fa-bullseye"></i> Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${styles.tabButton}`}
                id="vision-tab"
                data-bs-toggle="tab"
                data-bs-target="#vision"
                type="button"
                role="tab"
                aria-controls="vision"
                aria-selected="false"
              >
                <i className="fa-solid fa-eye"></i> Vision
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${styles.tabButton}`}
                id="values-tab"
                data-bs-toggle="tab"
                data-bs-target="#values"
                type="button"
                role="tab"
                aria-controls="values"
                aria-selected="false"
              >
                <i className="fa-solid fa-gem"></i> Core Values
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${styles.tabButton}`}
                id="benefits-tab"
                data-bs-toggle="tab"
                data-bs-target="#benefits"
                type="button"
                role="tab"
                aria-controls="benefits"
                aria-selected="false"
              >
                <i className="fa-solid fa-award"></i> Our Benefits
              </button>
            </li>
          </ul>

          <div className={`tab-content ${styles.tabContent}`} id="aboutTabContent">
            <div
              className="tab-pane fade show active"
              id="mission"
              role="tabpanel"
              aria-labelledby="mission-tab"
            >
              <div className={styles.tabPanel}>
                <i className={`fa-solid fa-bullseye ${styles.tabPanelIcon}`}></i>
                <p className={styles.tabPanelText}>
                  To keep trade and operations moving by combining supply,
                  logistics and technical maintenance into one dependable
                  service, so our partners can focus on growing their
                  business instead of managing vendors.
                </p>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="vision"
              role="tabpanel"
              aria-labelledby="vision-tab"
            >
              <div className={styles.tabPanel}>
                <i className={`fa-solid fa-eye ${styles.tabPanelIcon}`}></i>
                <p className={styles.tabPanelText}>
                  To be the trade and development partner regional
                  businesses turn to first — known for reliability,
                  technical depth and long-term relationships rather than
                  one-off transactions.
                </p>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="values"
              role="tabpanel"
              aria-labelledby="values-tab"
            >
              <div className="row g-4">
                {coreValues.map((value) => (
                  <div className="col-6 col-md-3" key={value.title}>
                    <div className={styles.valueCardWrapper}>
                      <div className={styles.valueCard}>
                        <div className={styles.valueCardFront}>
                          <i className={`fa-solid ${value.icon} ${styles.valueIcon}`}></i>
                          <p className={styles.valueTitle}>{value.title}</p>
                        </div>
                        <div className={styles.valueCardBack}>
                          <p className={styles.valueBackText}>{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="benefits"
              role="tabpanel"
              aria-labelledby="benefits-tab"
            >
              <div className="row g-4">
                {benefits.map((benefit) => (
                  <div className="col-12 col-md-6" key={benefit.title}>
                    <div className={styles.benefitCard}>
                      <i className={`fa-solid ${benefit.icon} ${styles.benefitIcon}`}></i>
                      <div>
                        <p className={styles.benefitTitle}>{benefit.title}</p>
                        <p className={styles.benefitText}>{benefit.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>How We Work</h2>
          <div className="row g-4 mt-2 justify-content-center">
            {approachSteps.map((step, index) => (
              <div className="col-12 col-md-4" key={step.title}>
                <div className={styles.approachCard}>
                  <span className={styles.approachNumber}>0{index + 1}</span>
                  <i className={`fa-solid ${step.icon} ${styles.approachIcon}`}></i>
                  <p className={styles.approachTitle}>{step.title}</p>
                  <p className={styles.approachText}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Want to know more?</h2>
          <p className={styles.ctaText}>
            Reach out and let&apos;s talk about how IDTS can support your
            operations.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Contact us <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;