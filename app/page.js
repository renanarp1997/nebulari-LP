import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Products from "./components/Products";
import BrandWorld from "./components/BrandWorld";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <Manifesto />
      <Products />
      <BrandWorld />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Newsletter />
      <Footer />
    </>
  );
}
