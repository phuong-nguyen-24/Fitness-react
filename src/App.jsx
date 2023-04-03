import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import About from "./components/About /About";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Letter from "./components/Letter/Letter";
import Footer from "./components/Footer /Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Programs />
        <About />
        <Features />
        <Pricing />
        <Testimonials />
        <Letter />
      </main>
      <Footer />
    </div>
  );
}
