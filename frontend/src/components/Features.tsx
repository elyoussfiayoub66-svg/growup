// HeroSection.tsx
import { useState } from "react";
import "./features.css";
import mainImg from "../assets/ok.png";
import secondaryImg1 from "../assets/ooook.png";
import secondaryImg2 from "../assets/ooooko.png";
import {
  FaCalculator,
  FaComments,
  FaCalendarAlt,
  FaTasks,
  FaClock,
  FaRobot,
  FaChalkboard,
  FaVideo,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaRunning,
  FaDollarSign,
  FaStar,
} from "react-icons/fa";

// Feature data
const features = [
  { id: "pl", icon: <FaCalculator />, label: "P&L Calculator" },
  { id: "chat", icon: <FaComments />, label: "Chat" },
  { id: "calendar", icon: <FaCalendarAlt />, label: "Calendar" },
  { id: "kanban", icon: <FaTasks />, label: "Kanban" },
  { id: "time", icon: <FaClock />, label: "Time Tracking" },
  { id: "automation", icon: <FaRobot />, label: "Automation" },
  { id: "board", icon: <FaChalkboard />, label: "White Board" },
  { id: "meetings", icon: <FaVideo />, label: "Meetings" },
  { id: "email", icon: <FaEnvelopeOpenText />, label: "Email Flow" },
  { id: "docs", icon: <FaFileAlt />, label: "Docs" },
  { id: "sprints", icon: <FaRunning />, label: "Sprints" },
  { id: "pricing", icon: <FaDollarSign />, label: "Pricing Simulations" },
];

export default function HeroSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFeature = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="hero">
      {/* Hero text */}
      <h1 className="hero-title">Do your most important work, faster</h1>
      <p className="hero-subtitle">
        Beyond campaigns. Beyond operations. GrowUp drives the entire engine of your growth.
      </p>

      {/* Image cluster */}
      <div className="hero-image-container">
        <img src={secondaryImg2} alt="Main Dashboard" className="hero-main-image" />
        <img src={secondaryImg1} alt="Secondary 1" className="hero-sub-image sub-image-1" />
        <img src={mainImg} alt="Secondary 2" className="hero-sub-image sub-image-2" />
      </div>

      {/* Features section */}
      <div className="features-section">
        <div className="features-bg">
          <img src={secondaryImg2} alt="Blurred Dashboard" />
        </div>

        <div className="features-card">
          <h2 className="features-title">Shape your workspace your way</h2>
          <p className="features-subtitle">Launch fast, customize at your pace.</p>

          <div className="features-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-item ${selected.includes(feature.id) ? "selected" : ""}`}
                onClick={() => toggleFeature(feature.id)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <button className="cta-btn" onClick={() => setModalOpen(true)}>
            Get Started
          </button>
        </div>
      </div>

      {/* Alternating content section */}
      <div className="content-section">
        {/* First row */}
        <div className="content-row">
          <div className="content-image">
            <img src={secondaryImg1} alt="Feature Image 1" />
          </div>
          <div className="content-text">
            <span className="content-tag">Task Management</span>
            <h2>Clarity Without Chaos</h2>
            <p>
              Manage every task across Kanban, Timeline, Workload, and Calendar views. Keep your
              team aligned, deadlines visible, and workflows running seamlessly — all in one place.
            </p>
            <div className="content-buttons">
              <button className="btn-primary" onClick={() => setModalOpen(true)}>Try for Free</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="content-row reverse">
          <div className="content-text">
            <span className="content-tag">Dashboard & Analytics</span>
            <h2>Decisions Backed by Data</h2>
            <p>
              Instantly track revenue, orders, and performance with real-time KPIs and charts.
              Export insights into reports and steer your business with confidence, not guesswork.
            </p>
            <div className="content-buttons">
              <button className="btn-primary" onClick={() => setModalOpen(true)}>Try Now</button>
            </div>
          </div>
          <div className="content-image">
            <img src={secondaryImg2} alt="Feature Image 2" />
          </div>
        </div>

        {/* Spotlight Section */}
        <div className="spotlight-section">
          <div className="spotlight-content">
            <h2>GrowUp turns scattered tasks, orders, and data into one powerful workspace</h2>
            <p>So you scale faster, smarter, and without the chaos.</p>
            <button className="btn-primary" onClick={() => setModalOpen(true)}>Get Started</button>
          </div>
          <div className="spotlight-image-container">
            <img src={mainImg} alt="Spotlight Image" className="spotlight-image" />
            <div className="spotlight-glow"></div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2 className="reviews-title">What Our Users Say</h2>
          <div className="reviews-grid">
            {[
              { text: "GrowUp transformed the way our team works. Tasks, orders, and data are finally in one place — everything runs smoothly!", name: "Sarah L.", role: "Product Manager" },
              { text: "The dashboard & analytics features are amazing. I can track KPIs in real-time and make decisions faster than ever.", name: "Ahmed K.", role: "Operations Lead" },
              { text: "Task management has never been easier. My team is aligned, deadlines are clear, and chaos is gone!", name: "Lina M.", role: "CEO" }
            ].map((r, idx) => (
              <div key={idx} className="review-card">
                <p className="review-text">{r.text}</p>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{r.name}</span>
                  <span className="reviewer-role">{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div
            className="modal-content"
            style={{ backgroundImage: `url(${mainImg})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">Join Free and Master Your Workflow in Moments!</h2>
            <input type="email" placeholder="Enter your email" className="modal-input" />
            <button className="modal-next-btn">Next</button>
          </div>
        </div>
      )}
    </section>
  );
}
