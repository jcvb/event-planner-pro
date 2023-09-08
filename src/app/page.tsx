import About from "./components/About";
import Analysis from "./components/Analysis";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Register from "./components/Register";
import Slider from "./components/Slider/Slider";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Register />
      <Analysis />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
