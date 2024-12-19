import { Instagram, Send, Twitter, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // prevent scrolling
  const lockScroll = () => {
    // current scroll position
    const scrollPosition = window.pageYOffset;
    // extra styles to prevent scrolling
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  };

  // restore scrolling
  const unlockScroll = () => {
    // Remove extra styles
    const scrollPosition = document.body.style.top;
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    // Restore scroll position
    window.scrollTo(0, parseInt(scrollPosition || "0", 10) * -1);
  };

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      // Check if user has scrolled at all
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
        // delay before showing popup
        setTimeout(() => {
          setIsVisible(true);
          lockScroll(); // scroll lock when popup shows
          // fade-in timeout
          setTimeout(() => {
            setMounted(true);
          }, 50);
        }, 500);
      }
    };

    // event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (isVisible) {
        unlockScroll(); // ensures scroll is unlocked when component unmounts
      }
    };
  }, [hasScrolled, isVisible]);

  const handleClose = () => {
    setMounted(false);
    unlockScroll();
    // Wait for fade-out animation before hiding
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
        mounted
          ? "bg-black/60 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none"
      }`}
    >
      <div
        className={`w-full max-w-lg mx-4 bg-[#FCCF04] rounded-2xl relative overflow-hidden transition-all duration-300 ease-in-out ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* fekete pontos background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(black 1px, transparent 0)",
            backgroundSize: "40px 40px",
            backgroundPosition: "-19px -19px",
          }}
        />

        <div className="relative p-8 space-y-6">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 hover:bg-[#FFF6B5] rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="bevellier4 text-3xl tracking-wider">
              Join the $BANANA Community!
            </h2>
            <p className="bevellier2 text-xl">
              Connect with fellow crypto enthusiasts and stay updated with the
              latest $BANANA news!
            </p>
          </div>

          {/* Social buttons */}
          <div className="space-y-4">
            <a
              href="#telegram"
              className="flex items-center gap-4 w-full bg-[#FFF6B5] hover:bg-white transition-colors rounded-xl border border-b-4 border-black p-4 bevellier4 text-lg"
            >
              <Send className="w-6 h-6" />
              Join our Telegram Community
            </a>

            <a
              href="#twitter"
              className="flex items-center gap-4 w-full bg-[#FFF6B5] hover:bg-white transition-colors rounded-xl border border-b-4 border-black p-4 bevellier4 text-lg"
            >
              <Twitter className="w-6 h-6" />
              Follow us on X (Twitter)
            </a>

            <a
              href="#instagram"
              className="flex items-center gap-4 w-full bg-[#FFF6B5] hover:bg-white transition-colors rounded-xl border border-b-4 border-black p-4 bevellier4 text-lg"
            >
              <Instagram className="w-6 h-6" />
              Check our Instagram
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-4">
            <p className="bevellier2 text-gray-700">
              Don&apos;t miss out on exclusive updates and community events!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
