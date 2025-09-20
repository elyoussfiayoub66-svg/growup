// Footer.jsx
import {
  Clock,
  Calendar,
  Lock,
  Cloud,
  Linkedin,
  Facebook,
  Twitter,
  Github,
} from "lucide-react";
import "./Footer.css";
import logo from "../assets/growlogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-left">
        <img src={logo} alt="GrowUp" className="navbar-logo" />
          <span className="footer-tagline">Grow Faster , Scale Smarter.</span>
        </div>
        <div className="footer-top-right">
          <div className="trust-item"><Clock size={16} /> 24/7 Support</div>
          <div className="trust-item"><Calendar size={16} /> Weekly Updates</div>
          <div className="trust-item"><Lock size={16} /> Secure</div>
          <div className="trust-item"><Cloud size={16} /> Uptime</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="footer-main">
        {/* GrowUp Column */}
        <div className="footer-column">
          <h5>GrowUp</h5>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-column">
          <h5>Resources</h5>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Guides</li>
            <li>Webinars</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Features Column */}
        <div className="footer-column">
          <h5>Features</h5>
          <ul>
            <li>Tasks</li>
            <li>Docs</li>
            <li>Goals</li>
            <li>Chat</li>
            <li>Automation</li>
          </ul>
        </div>

        {/* Learn Column */}
        <div className="footer-column">
          <h5>Learn</h5>
          <ul>
            <li>Academy</li>
            <li>Templates</li>
            <li>Best Practices</li>
            <li>Tips & Tricks</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="footer-column">
          <h5>Connect</h5>
          <div className="social-icons">
            <Linkedin size={20} />
            <Facebook size={20} />
            <Twitter size={20} />
            <Github size={20} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-right">
          <span>© 2025 GrowUp</span>
          <a href="#security">Security</a>
    <Link to="/privacy" className="footer-link">Privacy</Link>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
