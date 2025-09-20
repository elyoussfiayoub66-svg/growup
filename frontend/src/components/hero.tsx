import "./hero.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Floating accent bars */}
      <div className="bar b1"></div>
      <div className="bar b2"></div>
      <div className="bar b3"></div>
      <div className="bar b4"></div>

      <h1 className="hero-title">
        The All-in-One Operating System for Business Growth.
      </h1>

      <p className="hero-subtitle">
        All your tasks, sales, and data — connected in one platform to power
        unstoppable growth.
      </p>

      <div className="hero-cta">
        <button className="hero-button">
          Run Your Business Smarter — Start Free
          <FaArrowRight className="button-icon" />
        </button>
        <p className="hero-note">Get Started Instantly. Risk-Free.</p>
      </div>

      {/* Trusted by section */}
      <div className="trusted-section">
        <p className="trusted-text">Trusted by the world’s leading e-commerce</p>

        <div className="trusted-logos">
          <img src={logo1} alt="Logo 1" className="trusted-logo" />
          <img src={logo2} alt="Logo 2" className="trusted-logo" />
          <img src={logo3} alt="Logo 3" className="trusted-logo" />
          <img src={logo4} alt="Logo 4" className="trusted-logo" />
          <img src={logo5} alt="Logo 5" className="trusted-logo" />
          <img src={logo6} alt="Logo 6" className="trusted-logo" />
          <img src={logo7} alt="Logo 7" className="trusted-logo" />
          <img src={logo8} alt="Logo 8" className="trusted-logo" />
          <img src={logo9} alt="Logo 9" className="trusted-logo" />
        </div>
      </div>
    </section>
  );
}
