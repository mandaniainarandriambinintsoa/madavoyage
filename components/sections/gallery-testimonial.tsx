"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryItems, testimonials } from "@/data/travel";

export function GalleryTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="destinations" className="section gallery-section">
      <div className="container gallery-layout">
        <div data-reveal>
          <p className="section-label">Les incontournables</p>
          <h2>Madagascar en un coup d'oeil</h2>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure className="gallery-card" data-reveal key={item.title}>
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 25vw, 50vw" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <aside className="testimonial-card" data-reveal>
          <p className="section-label">Ils nous ont fait confiance</p>
          <div className="testimonial-slide" key={activeTestimonial.quote}>
            <blockquote>"{activeTestimonial.quote}"</blockquote>
            <p>
              {activeTestimonial.author}, {activeTestimonial.origin}
            </p>
          </div>
          <div className="testimonial-controls">
            <button type="button" onClick={showPrevious} aria-label="Temoignage precedent">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            {testimonials.map((testimonial, index) => (
              <i
                aria-hidden="true"
                className={index === activeIndex ? "active" : undefined}
                key={testimonial.author}
              />
            ))}
            <button type="button" onClick={showNext} aria-label="Temoignage suivant">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
