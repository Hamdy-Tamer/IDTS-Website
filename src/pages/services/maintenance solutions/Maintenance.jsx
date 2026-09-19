import { useState } from "react";
import styles from "./Maintenance.module.css";

const categories = [
  {
    title: "Maintenance Services",
    icon: "fa-screwdriver-wrench",
  },
  {
    title: "Mechanical Spare Parts",
    icon: "fa-gears",
  },
  {
    title: "Electrical Spare Parts",
    icon: "fa-bolt",
  },
];

const generalSupplySolutions = [
  {
    title: "General Central Supplier",
    icon: "fa-truck-field",
    intro: "Being your central professional supplier, remove the hassle of managing the relationship with many suppliers. The power of our network and professionalism in supplier selection and evaluation process give us the ability to be your reliable central supplier for spare parts, general consumables and services. Our supply strategy is according to the most suitable for our client needs:",
    bullets: [
      {
        label: "Time based replenishment",
        text: "we set a calendar of supply according to maintenance strategy, and you just find your requirements in time.",
      },
      {
        label: "Reorder point-based replenishment",
        text: "we supply according to a maximum and minimum stock levels, and accordingly we put you safe aside from stockout and over stock risks.",
      },
      {
        label: "Order based supply",
        text: "if you decided to order upon requirement, we are very responsive to your orders with precise delivery time.",
      },
    ],
  },
  {
    title: "Zero Value stock",
    icon: "fa-boxes-stacked",
    intro: "The common spare parts inventory management problem is to balance between stock level and consumption rate, to avoid stock out and over stock issues. IDTS remove this hassle by keeping controlled stock at the client shelves, and client only pay for what he consumes.",
  },
  {
    title: "Machines Development",
    icon: "fa-gears",
    intro: "One of the main reasons for high inventory value that the machines design is not the same even if they are doing the same function, which require holding many different parts of same category. IDTS support factories to develop their machines design in order to standardize spare parts as much as possible.",
  },
  {
    title: "Dead Stock Liquidation",
    icon: "fa-recycle",
    intro: "Stagnant and low moving parts absorb company resources without any benefit. IDTS believe that dead stock for one factory may be useful for another. IDTS use its network power and help factories to maximize the benefit of dead and low moving stock.",
  },
  {
    title: "Parts Localization",
    icon: "fa-screwdriver-wrench",
    intro: "Importing spare parts takes long time, which push the factories to keep stock in order to avoid long down times in case of part failure. IDTS use CNC technology to fabricate and customize parts that replace imported ones.",
  },
];

const tpmSolutions = [
  {
    title: "Maintenance Work Flow & Reports",
    icon: "fa-clipboard-list",
    intro: "One of the basics of professional maintenance system is to have a well-designed work flow and reporting system for maintenance department, such as:",
    bullets: [
      { text: "Problems reporting, analysis and documentation." },
      { text: "Communication plan between production and maintenance." },
      { text: "Developing performance measures for maintenance function." },
      { text: "Developing performance measures for equipment." },
      { text: "Enhanced work flow for maintenance planner/purchasing to release purchasing orders for suppliers." },
    ],
  },
  {
    title: "Spare Parts Inventory Management",
    icon: "fa-warehouse",
    intro: "Translating maintenance plan into spare parts requirements, and then to inventory management strategy is an important issue for any factory to avoid stock out and over stocks. Precise Spare parts management, not only include inventory management, but also includes parts coding and warehouse arrangements and ordering process simplification.",
  },
  {
    title: "Equipment Description & breakdown structure",
    icon: "fa-sitemap",
    intro: "Equipment description and breakdown structure is a pre-requirement for many later steps in TPM or professional maintenance management, such as spare parts inventory management, failures analysis, maintenance plans and technical trainings. Every Equipment should be coded, prioritized and described as a tree of assembly, sub-assembly and components, then every part will be described technically and drawn if needed.",
  },
  {
    title: "Autonomous Maintenance Program",
    icon: "fa-user-gear",
    intro: "Autonomous maintenance in implemented through 7 steps, to return machine to its basic condition and eliminate sources of forced and accelerated deterioration. Autonomous maintenance is the beginning of handing over some technical tasks to machine operators (including cleaning, inspection and lubrication), in order to free up a portion of maintenance team time to do more advanced tasks regarding machine improvement.",
  },
  {
    title: "Effective Maintenance Program",
    icon: "fa-calendar-check",
    intro: "Setting proper maintenance strategy for every equipment comes after precise analysis for the situation, it requires accurate data collection and qualified staff for interpretation. Maintenance calendar may include time-based maintenance, condition-based maintenance, or periodic measures.",
  },
  {
    title: "5S Implementation",
    icon: "fa-broom",
    intro: "5S is the foundation of any improvement initiative, it's a Japanese tool to organize and standardize workplaces. 5S stands for sorting, straighten, shine, standardize and sustain.",
  },
  {
    title: "Visual Management Boards",
    icon: "fa-chart-simple",
    intro: "Visual Management Boards is a visual communication tool, used to communicate performance measures, targets, One-point lessons (OPL) and plans.",
  },
  {
    title: "Safe Working Procedure (Maintenance activities)",
    icon: "fa-helmet-safety",
    intro: "One of the main reasons of machine accelerated deterioration is poor or improper maintenance activities. Safe working procedures (SWP) is a tool to standardize and transfer the procedure of maintenance and technical tasks.",
  },
  {
    title: "Standard Operating Procedures",
    icon: "fa-list-check",
    intro: "If there are many ways to do the job, standardization is the tool that communicate the best way that ensure best quality, lowest cost and higher delivery performance. Standard operating procedure to be done for all operational tasks to ensure process efficiency and safety for labor and machine.",
  },
];

const tabs = [
  { id: "general", label: "General Supply" },
  { id: "tpm", label: "TPM Solutions" },
];

function Maintenance() {
  const [activeTab, setActiveTab] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeSolutions =
    activeTab === "general" ? generalSupplySolutions : tpmSolutions;

  return (
    <>
      {/* Title */}
      <section className={styles.intro}>
        <div className="container text-center">
          <h1 className={styles.introTitle}>
            Maintenance Solutions and Spare Parts
          </h1>
        </div>
      </section>

      {/* Left-aligned description */}
      <section className={styles.description}>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-lg-7">
              <p className={styles.descriptionText}>
                We service provider and development company aims to improve
                efficiency of machines and equipment that are related to
                manufacturing and utilities, through ensuring best-fit
                reliable supply of spare parts, consumables and services, as
                well as the implementation of professional maintenance and
                production Management systems such as TPM (Total Productive
                Maintenance). Firstly, we help factories to find suppliers who
                provide the best-fit supplies and services, and secondly, we
                support them to make the right planning and proper
                consumption for that supplies.
              </p>
              <p className={styles.descriptionText}>
                IDTS remove the hassle of managing many suppliers by being
                your reliable central supplier, we can supply your factory
                with all its requirements of spare parts mechanical and
                electrical, services and TPM consultancy. We mean by
                efficiency to maximize your gains from machinery and spare
                parts with minimum cost and effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories — vertical column */}
      <section className={styles.categories}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>
            Our Categories
          </h2>
          <div className={styles.categoryColumn}>
            {categories.map((cat) => (
              <div className={styles.categoryCard} key={cat.title}>
                <i
                  className={`fa-solid ${cat.icon} ${styles.categoryIcon}`}
                ></i>
                <p className={styles.categoryTitle}>{cat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Solutions Section */}
      <section className={styles.supplySection}>
        <div className="container">
          <div className="row g-4">
            {/* Sidebar Nav */}
            <div className="col-12 col-lg-4 order-lg-2">
              <nav className={styles.tabNav}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`${styles.tabButton} ${
                      activeTab === tab.id ? styles.tabButtonActive : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Solutions Content */}
            <div className="col-12 col-lg-8 order-lg-1">
              <div className={styles.tabContentHeader}>
                <h2 className={styles.tabContentTitle}>
                  {activeTab === "general"
                    ? "How we supply you"
                    : "How we improve your maintenance"}
                </h2>
                <p className={styles.tabContentSubtitle}>
                  {activeTab === "general"
                    ? "Flexible supply models built around your needs."
                    : "Practical tools to lift your maintenance performance."}
                </p>
              </div>

              {activeSolutions.map((item, index) => {
                const key = `${activeTab}-${index}`;
                const isOpen = !!openItems[key];
                return (
                  <div
                    className={`${styles.supplyItem} ${
                      isOpen ? styles.supplyItemOpen : ""
                    }`}
                    key={item.title}
                  >
                    <div className={styles.supplyHeader}>
                      <div className={styles.supplyHeaderLeft}>
                        <span className={styles.supplyIconWrap}>
                          <i className={`fa-solid ${item.icon}`}></i>
                        </span>
                        <p className={styles.supplyTitle}>{item.title}</p>
                      </div>
                      <button
                        type="button"
                        className={styles.supplyToggle}
                        onClick={() => toggleItem(key)}
                        aria-expanded={isOpen}
                        aria-controls={`supply-panel-${key}`}
                        aria-label={
                          isOpen
                            ? `Collapse ${item.title}`
                            : `Expand ${item.title}`
                        }
                      >
                        <i
                          className={`fa-solid ${
                            isOpen ? "fa-circle-minus" : "fa-circle-plus"
                          }`}
                        ></i>
                      </button>
                    </div>

                    <div
                      id={`supply-panel-${key}`}
                      className={`${styles.supplyContent} ${
                        isOpen ? styles.supplyContentOpen : ""
                      }`}
                    >
                      <div className={styles.supplyContentInner}>
                        <p className={styles.supplyText}>{item.intro}</p>
                        {item.bullets && (
                          <ul className={styles.supplyList}>
                            {item.bullets.map((bullet) => (
                              <li key={bullet.label || bullet.text}>
                                {bullet.label && (
                                  <span className={styles.supplyBulletLabel}>
                                    {bullet.label}:
                                  </span>
                                )}{" "}
                                {bullet.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maintenance;