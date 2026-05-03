/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider({ data }: { data?: any }) {
  const testimonials = data?.testimonials || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  return (
    <section className="testimonial-slider py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="outline-none">
              <div className="text-center bg-[#111] border border-violet-900/30 rounded-2xl p-10 mx-4">
                <p className="text-2xl italic text-gray-300 mb-8 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-violet-400 font-bold text-lg">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-gray-500 text-sm mt-1">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx global>{`
        .testimonial-carousel .slick-dots li button:before {
          color: #8b5cf6;
          font-size: 12px;
        }
        .testimonial-carousel .slick-dots li.slick-active button:before {
          color: #7c3aed;
        }
      `}</style>
    </section>
  );
}
