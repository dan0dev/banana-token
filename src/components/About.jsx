import { Coins, CreditCard, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    steps: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about-section") {
            setIsVisible((prev) => ({ ...prev, about: entry.isIntersecting }));
          } else if (entry.target.id === "steps-section") {
            setIsVisible((prev) => ({ ...prev, steps: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about-section");
    const stepsSection = document.getElementById("steps-section");

    if (aboutSection) observer.observe(aboutSection);
    if (stepsSection) observer.observe(stepsSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
      if (stepsSection) observer.unobserve(stepsSection);
    };
  }, []);

  const buyingSteps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "SOLANA WALLET",
      description:
        "Download your solana wallet of choice but we recommend phantom or solflare chrome extensions.",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "GET SOME SOLANA",
      description:
        "Get some Solana, either buy within your wallet or via an exchange and deposit to your wallet via the address shown.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "BUY SOME $BANANA",
      description:
        "Go to Raydium and paste in the $BANANAN Contract address. Select your desired amount and confirm.",
    },
  ];

  return (
    <section
      className="w-full -mt-24 lg:-mt-10 py-8 lg:py-12"
      style={{ background: "linear-gradient(to bottom, #FCCF04, #FDE047)" }}
    >
      <div className="max-w-[1920px] mx-auto px-4">
        {/* About Section */}
        <div
          id="about-section"
          className={`bg-yellow-400 rounded-2xl relative overflow-hidden border border-b-4 border-r-4 border-black mb-12 transition-all duration-1000 transform ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/src/assets/images/shooting-star.svg"
            alt="Left Shooting Star"
            className="absolute top-20 left-10 w-24 h-24 transform -rotate-45 animate-pulse"
          />

          <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
            <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <div className="space-y-6 flex items-center">
                  <div className="w-full max-w-xl mx-auto">
                    <img
                      src="/src/assets/images/bananaAbout.png"
                      alt="About $BANANA"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-8 flex flex-col justify-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-gray-900">
                    About Us
                  </h3>
                  <div className="max-w-2xl">
                    <img
                      src="/src/assets/images/about-title.png"
                      alt="BANANA Ecosystem"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <p className="text-xl sm:text-2xl text-gray-800 font-medium tracking-wide">
                      What is $BANANA?: Introduce $BANANA as a light-hearted
                      cryptocurrency focused on bringing fun to the crypto
                      space.
                    </p>
                    <p className="text-xl sm:text-2xl text-gray-800 font-medium tracking-wide">
                      Why Choose $BANANA?: Mention its community-driven nature,
                      focusing on bringing meme culture to the blockchain.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button className="px-8 py-4 font-semibold tracking-wide border-black bg-yellow-200 hover:bg-yellow-100 transition-colors rounded-xl border border-b-4 text-xl sm:text-2xl shadow-md transform">
                      BUY $BANANA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Buy Section */}
        <div
          id="steps-section"
          className="text-center mb-8 max-w-[1600px] mx-auto"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-16">HOW TO BUY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {buyingSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-[#FFF6B5] rounded-xl p-8 border-2 border-b-4 border-r-4 border-black relative transition-all duration-1000 transform ${
                  isVisible.steps
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FFF6B5] rounded-full p-4 border-2 border-black w-20 h-20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
