import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Add more sections later (Features, Pricing, Testimonials, etc.) */}
      </main>
      <Footer />
    </>
  );
}
