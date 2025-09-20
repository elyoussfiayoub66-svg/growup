import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Pricing from "./components/pricing";
import Navigationbar from "./components/navigationbar";
import Privacy from "./components/privacy"; // ✅ Capitalized

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Features />
                <Footer />
              </>
            }
          />

          {/* Pricing page */}
          <Route
            path="/pricing"
            element={
              <>
                <Navbar />
                <Pricing />
                <Footer />
              </>
            }
          />

          {/* Privacy page */}
          <Route
            path="/privacy"
            element={
              <>
                <Navigationbar />
                <Privacy />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
