import React from "react";
import { Zap } from "lucide-react";

// Card component
const CreateCard = ({ card }) => (
  <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
    <div className="flex gap-2">
      <img className="w-12 h-12 rounded-full" src={card.image} alt="User" />
      <div className="flex flex-col">
        <p className="font-semibold">{card.name}</p>
        <span className="text-xs text-slate-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-800">{card.text || "Amazing experience!"}</p>
    <div className="flex items-center justify-between text-slate-500 text-xs">
      <span>{card.date}</span>
    </div>
  </div>
);

const Testimonial = () => {
  const cardsData = [
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Emma Watson",
      handle: "@emmaw",
      date: "April 20, 2025",
      text: "From students to experienced professionals, users love how quickly they can create polished, ATS-ready resumes that stand out.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "John Doe",
      handle: "@johndoe",
      date: "May 10, 2025",
      text: "The intuitive interface and smart suggestions helped me land my dream job faster than I imagined.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      name: "Sophia Lee",
      handle: "@sophial",
      date: "June 5, 2025",
      text: "Creating a professional resume has never been easier. The AI recommendations are spot on!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Michael Smith",
      handle: "@michaels",
      date: "July 15, 2025",
      text: "I love how customizable each template is. It truly reflects my career experience perfectly.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBg.svg')] bg-cover bg-no-repeat font-[Poppins]">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-base text-[#302031] bg-[hsl(273,29%,94%)] border border-[#746085] rounded-full px-6 py-1.5 mx-auto">
          <Zap width={14} />
          <span>Testimonial</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light mt-6">
          Trusted by Professionals Worldwide
        </h1>
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          From students to experienced professionals, users love how quickly
          they can create polished, ATS-ready resumes that stand out. Our smart
          builder ensures every detail reflects your unique skills and career
          goals perfectly.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="overflow-hidden relative max-w-6xl mx-auto mb-8">
        {/* First row: left to right */}
        <div className="flex animate-marquee gap-4">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
      </div>

      <div className="overflow-hidden relative max-w-6xl mx-auto">
        {/* Second row: right to left */}
        <div className="flex animate-marquee-reverse gap-4">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            display: flex;
            min-width: 200%;
            animation: marquee 25s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            min-width: 200%;
            animation: marquee-reverse 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonial;
