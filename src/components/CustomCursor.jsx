import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);

  // Motion values for smoother animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.3 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const addParticle = (x, y) => {
    const id = Math.random();
    const particle = {
      id,
      x: x - 4 + Math.random() * 8 - 4, // add slight randomness
      y: y - 4 + Math.random() * 8 - 4,
      size: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
    };
    setParticles((prev) => [...prev, particle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 800);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      addParticle(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Particle sparkle trail */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed bg-emerald-400 rounded-full shadow-md"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            rotate: p.rotation,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: [1, 1.5, 0.5],
            rotate: p.rotation + 45,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Main dot with glow */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-emerald-400 pointer-events-none shadow-2xl"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          filter: "drop-shadow(0 0 6px #10b981)",
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? "#10b981" : "#34d399",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          mass: 0.1,
        }}
      />

      {/* Outer ring with pulsing glow */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHovering ? "#10b981" : "#34d399",
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.4 : 0.25,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      />
    </div>
  );
};

export default CustomCursor;
