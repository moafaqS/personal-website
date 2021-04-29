import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { AboutMeSection } from "../components/Sections/AboutMeSection";
import HeroSection from "../components/Sections/HeroSection";
import { ServicesSection } from "../components/Sections/ServicesSection";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <AboutMeSection />
    <ServicesSection />
  </Layout>
);

export default IndexPage;
