import About from "./components/About";
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
      <Footer />
    </>
  )
}
