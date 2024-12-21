import React from "react";

export default function About() {
  return (
    <section className="w-full px-4 lg:px-8 py-8 lg:py-12 -mt-24 lg:-mt-10">
      <div className="max-w-[1800px] mx-auto bg-[#F7DF0B] rounded-2xl relative overflow-hidden border border-b-4 border-r-4 border-black">
        {/* Left shooting star */}
        <img
          src="/src/assets/images/shooting-star.svg"
          alt="Left Shooting Star"
          className="absolute top-20 left-10 w-24 h-24 transform -rotate-45 animate-pulse"
        />

        {/* Right shooting star */}
        <img
          src="/src/assets/images/shooting-star.svg"
          alt="Right Shooting Star"
          className="absolute top-60 right-10 w-28 h-28 transform rotate-45 animate-pulse"
        />

        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 flex items-center">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="/src/assets/images/bananaAbout.png"
                    alt="About $BANANA"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl bevellier4 tracking-wider text-gray-900">
                  About Us
                </h3>
                <div className="max-w-lg">
                  <img
                    src="/src/assets/images/about-title.png"
                    alt="BANANA Ecosystem"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl text-gray-800 bevellier2 tracking-wide">
                    What is $BANANA?: Introduce $BANANA as a light-hearted
                    cryptocurrency focused on bringing fun to the crypto space.
                  </p>
                  <p className="text-lg sm:text-xl text-gray-800 bevellier2 tracking-wide">
                    Why Choose $BANANA?: Mention its community-driven nature,
                    focusing on bringing meme culture to the blockchain.
                  </p>
                </div>
                <div className="pt-4">
                  <button className="px-6 py-3 bevellier3 tracking-widest border-black bg-[#FCEF60] hover:bg-[#FCF280] transition-colors rounded-xl border border-b-4 text-lg sm:text-xl shadow-md transform hover:-translate-y-0.5 active:translate-y-0 active:border-b-2">
                    BUY $BANANA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
