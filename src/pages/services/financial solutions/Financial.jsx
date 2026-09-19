import styles from "./Financial.module.css";

const financialTopics = [
  {
    title: "Tax Audit",
    icon: "fa-magnifying-glass-dollar",
    paragraphs: [
      "A Tax Auditor is a professional responsible for examining and reviewing tax returns and financial records to ensure the accuracy of the information and compliance with tax laws and regulations.",
      "They also analyze documents and financial calculations, identify errors or violations, and prepare reports and observations regarding the tax status of the business or taxpayer.",
    ],
  },
  {
    title: "Financial Auditor",
    icon: "fa-scale-balanced",
    paragraphs: [
      "A Financial Auditor is a professional responsible for examining and reviewing financial statements and records to ensure their accuracy, completeness, and compliance with established accounting standards and policies.",
      "They also analyze financial data, identify errors and risks, evaluate internal controls, and prepare reports and recommendations to improve financial performance.",
    ],
  },
  {
    title: "Budget Preparation",
    icon: "fa-calculator",
    paragraphs: [
      "The process of preparing financial budgets to estimate revenues, expenses, and cash flows, allocate resources effectively, and support financial planning and decision-making.",
    ],
  },
  {
    title: "Dealing with Tax and Government Authorities",
    icon: "fa-building-columns",
    paragraphs: [
      "Managing communications, submissions, and official procedures with tax authorities and government agencies, while ensuring compliance with applicable laws and regulations.",
    ],
  },
];

function Financial() {
  return (
    <>
      {/* Title */}
      <section className={styles.intro}>
        <div className="container text-center">
          <h1 className={styles.introTitle}>Financial Solutions</h1>
        </div>
      </section>

      {/* Left-aligned description */}
      <section className={styles.description}>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-lg-7">
              <p className={styles.descriptionText}>
                We provide a complete suite of financial solutions designed to
                keep your business accurate, compliant, and financially
                healthy. From auditing and tax reviews to budgeting and
                official dealings with government authorities, our services
                help you make informed decisions, reduce risk, and stay ahead
                of regulatory requirements.
              </p>
              <p className={styles.descriptionText}>
                Whether you need to verify the accuracy of your financial
                statements, prepare reliable budgets, or manage complex tax
                procedures, IDTS delivers professional financial support
                tailored to the needs of your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics — content left, empty space reserved for images on the right */}
      {financialTopics.map((topic, index) => (
        <section
          key={topic.title}
          className={`${styles.topic} ${
            index % 2 === 1 ? styles.topicAlt : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-6">
                <div className={styles.topicHeader}>
                  <span className={styles.topicIconWrap}>
                    <i className={`fa-solid ${topic.icon}`}></i>
                  </span>
                  <h2 className={styles.topicTitle}>{topic.title}</h2>
                </div>
                {topic.paragraphs.map((paragraph, pIndex) => (
                  <p className={styles.topicText} key={pIndex}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Reserved for a future image */}
              <div className="col-12 col-lg-6">
                <div className={styles.imagePlaceholder}>
                  <i className="fa-regular fa-image"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Financial;