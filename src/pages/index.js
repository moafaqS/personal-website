import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/Sections/HeroSection"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
