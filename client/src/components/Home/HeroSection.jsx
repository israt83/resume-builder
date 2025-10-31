import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const {user} = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-[#302031] text-sm z-20">
        <Link to="/" className="font-bold text-2xl z-20 relative">
          <span className="text-purple-600">Resume</span><span className="text-black">Craft</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500 z-20 relative">
          <Link to="/" className="hover:text-purple-500 transition">Home</Link>
          <Link to="/products" className="hover:text-purple-500 transition">Features</Link>
          <Link to="/stories" className="hover:text-purple-500 transition">Testimonials</Link>
          <Link to="/pricing" className="hover:text-purple-500 transition">Contact</Link>
        </div>

        <div className="flex gap-2 z-20 relative">
          <Link
            to="/app?state=register"
            className="hidden md:block px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full relative z-20"
            hidden={user}
          >
            Get Started
          </Link>
          <Link
            to="/app?state=login"
            className="hidden md:block px-6 py-2.5 border border-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full relative z-20"
            hidden={user}
          >
            Login
          </Link>
          <Link
            to="/app"
            className="hidden md:block px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full relative z-20"
            hidden={!user}
          >
            Dashboard
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition z-20 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-30`}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Features</Link>
        <Link to="/stories">Testimonials</Link>
        <Link to="/pricing">Contact</Link>

        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-[#483A52] hover:bg-[#483A52] transition text-[#302031] rounded-md flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBg.svg')] bg-cover flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 text-[#302031]">
        <div className="absolute top-28 left-1/4 size-72 bg-[#9D81B3] blur-[300px] -z-10" />
        <div className="flex items-center mt-44 relative z-10">
          <div className="flex -space-x-2 pr-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="image"
              className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="image"
              className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="image"
              className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
            />
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="image"
              className="size-7 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
            />
          </div>
          <div>
            <p className="text-sm">
              Used by <span className="font-medium">100,000+</span> users
            </p>
          </div>
        </div>

        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium text-center z-10 relative">
          Create Perfect Resumes with
        </h1>
        <p className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium text-center z-10 relative">
          AI Magic
        </p>

        <p className="text-base text-center max-w-lg z-10 relative">
          SmartResume uses AI to generate polished, professional resumes. Users can customize templates, auto-generate content, and download final resumes instantly.
        </p>

        <div className="flex items-center gap-4 mt-8 relative z-10">
          <Link
            to="/app?state=register"
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-7 py-3"
          >
            Get started
          </Link>
          <button className="flex items-center gap-2 border border-purple-900 hover:bg-purple-950/50 transition rounded-full px-6 h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
            <span>Watch demo</span>
          </button>
        </div>

        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
          className="w-full rounded-[15px] max-w-4xl mt-16 relative z-10"
          alt="hero section showcase"
        />
      </div>
    </div>
  );
};

export default HeroSection;
