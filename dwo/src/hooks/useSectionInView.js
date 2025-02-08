import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Hook for triggering animations when a section enters view
const useSectionInView = (threshold = 0.3, delay = 0) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView, animation: isInView ? "visible" : "hidden", delay };
};

// Motion animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export { useSectionInView, fadeIn, motion };
