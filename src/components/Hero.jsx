import {
  Ban,
  Copy,
  PartyPopper,
  Rocket,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import SocialPopup from "./SocialPopup";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "0xE1aBD004...01d094FAa180";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);

      // Reset copy button
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <>
      <section className="w-full px-4">
        <div
          className="max-w-[1920px] mx-auto bg-[#FCCF04] rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(black 1px, transparent 0)",
            backgroundSize: "40px 40px",
            backgroundPosition: "-19px -19px",
          }}
        >
          {/* Hero */}
          <div className="relative px-8 mt-8 md:16 md:mt-32 pb-32 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Grid */}
              <div className="space-y-8 text-center lg:text-left relative">
                {/* Scrolling sliding stuff */}
                <div className="relative overflow-hidden bg-[#FFF6B5] rounded-xl border border-b-4 border-r-4 border-black">
                  {/* Left Fade */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#FFF6B5] to-transparent" />

                  {/* Right Fade */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#FFF6B5] to-transparent" />

                  {/* Scrolling sliding stuff's conteent*/}
                  <div className="flex items-center whitespace-nowrap py-3 px-16 bevellier2 tracking-widest">
                    <div className="animate-marquee inline-flex items-center gap-8">
                      <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                        <Rocket className="h-5 w-5" /> Join the $BANANA
                        Revolution!
                      </span>
                      <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                        <Sparkles className="h-5 w-5" /> Memes + Crypto = Fun
                      </span>
                      <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                        <Star className="h-5 w-5" /> Learn, Laugh, HODL!
                      </span>
                      {/* Duplicate - loop */}
                      <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                        <Rocket className="h-5 w-5" /> Join the $BANANA
                        Revolution!
                      </span>
                      <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                        <Sparkles className="h-5 w-5" /> Memes + Crypto = Fun
                      </span>
                      <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                        <Star className="h-5 w-5" /> Learn, Laugh, HODL!
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 bevellier2">
                  <h2 className="text-red-500 bevellier4 tracking-[1rem] text-xl lg:text-2xl">
                    WELCOME TO $BANANA TOKEN
                  </h2>
                  <img
                    src="/src/assets/images/banana-text.png"
                    alt="Banana Token"
                    className="mx-auto lg:mx-0"
                  />
                  <p className="text-2xl lg:text-3xl text-gray-900 max-w-4xl mx-auto lg:mx-0">
                    Welcome to $BANANA - The Meme Coin that&apos;s here to
                    spread laughter and unite the crypto community. Join our
                    vibrant community of banana lovers and crypto enthusiasts as
                    we embark on this exciting journey together.
                  </p>
                </div>

                {/* Counters */}
                <div className="flex flex-wrap gap-8 justify-center lg:justify-start bevellier2 tracking-wider">
                  <div className="text-center">
                    <Users className="mx-auto h-8 w-8 text-gray-900" />
                    <p className="text-lg text-gray-700">50,000+ Members</p>
                  </div>
                  <div className="text-center">
                    <Ban className="mx-auto h-8 w-8 text-gray-900" />
                    <p className="text-lg text-gray-700">$10M+ Traded</p>
                  </div>
                  <div className="text-center">
                    <PartyPopper className="mx-auto h-8 w-8 text-gray-900" />
                    <p className="text-lg text-gray-700">100+ Memes Shared</p>
                  </div>
                </div>

                {/* --------- Divider --------- */}
                <div className="w-full h-1 bg-[#E4B700] my-8 rounded-full shadow-md"></div>

                {/* Contract Address */}
                <div className="space-y-6">
                  <p className="bevellier2 text-lg text-gray-800 tracking-wider">
                    CONTRACT ADDRESS
                  </p>
                  <div className="bg-[#FFF6B5] rounded-xl border border-b-8 border-black px-4">
                    <div className="flex items-center gap-x-4 py-2">
                      <code className="text-base flex-1 truncate px-2">
                        {contractAddress}
                      </code>
                      <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 bg-[#FBEF60] rounded-xl border border-b-4 border-black px-8 py-3 bevellier4 tracking-widest hover:bg-white transition-colors text-lg shrink-0"
                      >
                        <Copy className="h-5 w-5" />
                        {isCopied ? "COPIED!" : "COPY"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start bevellier4 tracking-widest text-xl">
                  <button className="bg-[#FBEF60] rounded-xl border border-b-4 border-black px-12 py-3 hover:bg-white transition-colors">
                    BUY $BANANA
                  </button>
                  <button className="bg-[#FFF6B5] rounded-xl border border-b-4 border-black px-12 py-3 hover:bg-white transition-colors flex items-center gap-2">
                    <img
                      src="/src/assets/images/dex-screener.svg"
                      alt="Dex Screener"
                      className="w-6 h-6"
                    />
                    DEX SCREENER
                  </button>
                </div>
              </div>

              {/* Banana Img - right grid */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="src/assets/images/banana.png"
                  alt="Banana Character"
                  className="w-[700px] xl:w-[900px] 2xl:w-[1100px] h-auto object-contain animate-bounce-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SocialPopup />
    </>
  );
}
