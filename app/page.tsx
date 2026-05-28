import { Header } from "@/components/layout/header";
import { Circuits } from "@/components/sections/circuits";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { GalleryTestimonial } from "@/components/sections/gallery-testimonial";
import { Hero } from "@/components/sections/hero";
import { WhyTravel } from "@/components/sections/why-travel";
import { faqJsonLd, organizationJsonLd, toursJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Header />
      <main>
        <Hero />
        <Circuits />
        <WhyTravel />
        <GalleryTestimonial />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
