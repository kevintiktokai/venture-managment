import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { ProductHeader9 } from "./components/ProductHeader9";
import { Layout145 } from "./components/Layout145";
import { Layout207 } from "./components/Layout207";
import { Layout4 } from "./components/Layout4";
import { Layout514 } from "./components/Layout514";
import { Testimonial42 } from "./components/Testimonial42";
import { Layout348 } from "./components/Layout348";
import { Contact9 } from "./components/Contact9";
import { Cta31 } from "./components/Cta31";
import { Faq9 } from "./components/Faq9";
import { Logo6 } from "./components/Logo6";
import { Cta32 } from "./components/Cta32";
import { Footer12 } from "./components/Footer12";
import { StickyMobileCta } from "./components/StickyMobileCta";

export default function Page() {
  return (
    <div>
      <StickyMobileCta propertyName="Highlands — Contemporary villa" price="$420,000" />
      <Navbar1 />
      <ProductHeader9 />
      <Layout145 />
      <Layout207 />
      <Layout4 />
      <Layout514 />
      <Testimonial42 />
      <Layout348 />
      <Contact9 />
      <Cta31 />
      <Faq9 />
      <Logo6 />
      <Cta32 />
      <Footer12 />
    </div>
  );
}
