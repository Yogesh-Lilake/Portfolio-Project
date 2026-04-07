import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(scrolled);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9999] transition-all duration-200"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #ef4444, #ff7676)",
        boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
      }}
    />
  );
}