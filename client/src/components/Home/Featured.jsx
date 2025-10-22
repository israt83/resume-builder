import React from "react";
import { Zap } from "lucide-react";

const Featured = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center justify-center min-h-screen  px-6 mt-20"
    >
      <div className="flex items-center gap-2 text-base text-[#302031] bg-[hsl(273,29%,94%)] border border-[#746085] rounded-full px-6 py-1.5">
        <Zap width={14}/>
        <span>Simple Process</span>
      </div>
      {/* Section Title */}
      <section className="max-w-6xl text-center mt-6">
        <h1 className="text-2xl md:text-4xl font-light text-gray-800 leading-snug">
          Build Smarter, Faster <br />
          <span className="font-semibold">With AI-Powered Resume Tools</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Our AI-driven resume builder helps you craft professional resumes in
          minutes — designed to impress recruiters and land your dream job.
        </p>

        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white border-t-4 border-[#CBAD8D] shadow-lg p-6 rounded-lg w-full max-w-xs hover:-translate-y-1 transition">
            <h2 className="text-lg font-semibold text-gray-800">
              AI Resume Writer
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Instantly generates well-written resume content tailored to your
              role.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4208/4208493.png"
              alt="AI Writer"
              className="w-12 mt-6 ml-auto"
            />
          </div>

          {/* Middle 2 cards stacked */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border-t-4 border-[#302031] shadow-lg p-6 rounded-lg w-full max-w-xs hover:-translate-y-1 transition">
              <h2 className="text-lg font-semibold text-gray-800">
                Modern Templates
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Choose from sleek, ATS-friendly templates that suit any
                profession.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
                alt="Templates"
                className="w-12 mt-6 ml-auto"
              />
            </div>

            <div className="bg-white border-t-4 border-[#9D81B3] shadow-lg p-6 rounded-lg w-full max-w-xs hover:-translate-y-1 transition">
              <h2 className="text-lg font-semibold text-gray-800">
                Instant Download
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Export your finished resume in PDF format with a single click.
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt="Download"
                className="w-12 mt-6 ml-auto"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-t-4 border-[#38524C] shadow-lg p-6 rounded-lg w-full max-w-xs hover:-translate-y-1 transition">
            <h2 className="text-lg font-semibold text-gray-800">
              Smart Suggestions
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Get AI-based improvement tips to boost your resume’s quality and
              impact.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712103.png"
              alt="Suggestions"
              className="w-12 mt-6 ml-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
