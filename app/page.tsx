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
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {
  const init = () => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const delay = element.getAttribute("data-reveal-delay");
        if (delay) element.style.transitionDelay = delay + "ms";
        element.classList.add("is-visible");
        observer.unobserve(element);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.16 });

    elements.forEach((element) => observer.observe(element));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();`
        }}
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
