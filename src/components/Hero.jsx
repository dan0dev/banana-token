import { motion } from "framer-motion";
import { Copy, Rocket, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";
import SocialPopup from "./SocialPopup";

const CountUp = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const finalNumberWidth = end.toLocaleString().length;

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div
      className="inline-block tabular-nums"
      style={{
        minWidth: `${finalNumberWidth}ch`,
        textAlign: "right",
      }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "0xE1aBD004...01d094FAa180";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <>
      <section className="w-full bg-[#FCCF04]">
        <div className="max-w-[1920px] mx-auto px-4 py-16">
          <div className="rounded-2xl relative overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="relative px-8 mt-8 md:16 md:mt-32 pb-32 z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-left relative">
                  {/* Marquee section */}
                  <motion.div
                    variants={itemVariants}
                    className="relative overflow-hidden bg-[#FFF6B5] rounded-xl border border-b-4 border-r-4 border-black"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#FFF6B5] to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#FFF6B5] to-transparent" />
                    <style>{`
                      @keyframes marquee {
                        0% {
                          transform: translateX(0);
                        }
                        100% {
                          transform: translateX(-50%);
                        }
                      }
                      .animate-marquee {
                        animation: marquee 20s linear infinite;
                      }
                    `}</style>
                    <div className="flex overflow-hidden items-center whitespace-nowrap py-3 px-16 font-medium2 tracking-widest">
                      <div className="animate-marquee inline-flex items-center gap-8">
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Rocket className="h-5 w-5" /> Join the $BANANA Revolution!
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Sparkles className="h-5 w-5" /> Memes + Crypto = Fun
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Star className="h-5 w-5" /> Learn, Laugh, HODL!
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Rocket className="h-5 w-5" /> Join the $BANANA Revolution!
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Sparkles className="h-5 w-5" /> Memes + Crypto = Fun
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Star className="h-5 w-5" /> Learn, Laugh, HODL!
                        </span>
                      </div>
                      {/* Duplicate for seamless loop */}
                      <div className="animate-marquee inline-flex items-center gap-8">
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Rocket className="h-5 w-5" /> Join the $BANANA Revolution!
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Sparkles className="h-5 w-5" /> Memes + Crypto = Fun
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Star className="h-5 w-5" /> Learn, Laugh, HODL!
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Rocket className="h-5 w-5" /> Join the $BANANA Revolution!
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Sparkles className="h-5 w-5" /> Memes + Crypto = Fun
                        </span>
                        <span className="inline-flex items-center gap-2 text-lg text-gray-800">
                          <Star className="h-5 w-5" /> Learn, Laugh, HODL!
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-6 font-medium2">
                    <h2 className="text-red-500 font-semibold tracking-[1rem] text-xl lg:text-xl">
                      WELCOME TO $BANANA TOKEN
                    </h2>
                    <motion.img src="assets/images/banana-text.png" alt="Banana Token" className="mx-auto lg:mx-0" />
                    <p className="text-2xl text-gray-900 max-w-4xl mx-auto lg:mx-0">
                      Welcome to $BANANA - The Meme Coin that&apos;s here to spread laughter and unite the crypto
                      community. Join our vibrant community of banana lovers and crypto enthusiasts as we embark on this
                      exciting journey together.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-8 justify-center lg:justify-start font-medium2 tracking-wider"
                  >
                    {/* Counter components */}
                  </motion.div>

                  <motion.div variants={itemVariants} className="w-full h-1 bg-[#E4B700] my-8 rounded-full shadow-md" />

                  <motion.div variants={itemVariants} className="space-y-6">
                    <p className="font-medium2 text-lg text-gray-800 tracking-wide">CONTRACT ADDRESS</p>
                    <motion.div className="bg-[#FFF6B5] rounded-xl border border-b-8 border-black px-4">
                      <div className="flex items-center gap-x-4 py-2">
                        <code className="text-base flex-1 truncate px-2">{contractAddress}</code>
                        <motion.button
                          onClick={handleCopy}
                          className="inline-flex items-center gap-2 bg-[#FBEF60] rounded-xl border border-b-4 border-black px-8 py-3 font-semibold tracking-wide hover:bg-white transition-colors text-lg shrink-0"
                          whileTap={{ scale: 0.95 }}
                        >
                          <Copy className="h-5 w-5" />
                          {isCopied ? "COPIED!" : "COPY"}
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-6 justify-center lg:justify-start font-semibold tracking-wide text-xl"
                  >
                    <motion.button
                      className="bg-[#FBEF60] rounded-xl border border-b-4 border-black px-8 py-3 hover:bg-white transition-colors"
                      whileTap={{ scale: 0.95 }}
                    >
                      BUY $BANANA
                    </motion.button>
                    <motion.button
                      className="bg-[#FFF6B5] rounded-xl border border-b-4 border-black px-8 py-3 hover:bg-white transition-colors flex items-center gap-2"
                      whileTap={{ scale: 0.95 }}
                    >
                      <img src="assets/images/dex-screener.svg" alt="Dex Screener" className="w-6 h-6" />
                      DEX SCREENER
                    </motion.button>
                  </motion.div>
                </div>

                <motion.div
                  className="flex justify-center lg:justify-end"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.img
                    src="assets/images/banana.png"
                    alt="Banana Character"
                    className="w-[700px] xl:w-[900px] 2xl:w-[1100px] h-auto object-contain"
                    animate={{ y: [-20, 20] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <SocialPopup />
    </>
  );
}
