import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import BannerSection from "@/components/BannerSection/BannerSection";

export const metadata = {
  title: " Home Page ",
  description: "Developed by ",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <BannerSection />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
