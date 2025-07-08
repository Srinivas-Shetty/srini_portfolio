import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsHovering(target.closest('a, button, [data-cursor-hover]') !== null);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Ring (Pulsing) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border-2 border-cyan-400"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.8,
          borderWidth: isClicking ? "1px" : "2px",
          boxShadow: isHovering 
            ? "0 0 15px rgba(34, 211, 238, 0.7)" 
            : "0 0 10px rgba(34, 211, 238, 0.5)"
        }}
        transition={{ 
          type: "spring", 
          mass: 0.1,
          scale: { duration: 0.2 }
        }}
      >
        {/* Inner Dot (Color-changing) */}
        <motion.div
          className="absolute inset-1 rounded-full bg-cyan-400"
          animate={{
            scale: isHovering ? 0.8 : 0.5,
            backgroundColor: isHovering ? "#f472b6" : "#22d3ee" // Pink when hovering
          }}
        />
      </motion.div>

      {/* Trailing Effect (Tech-inspired) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 0.6,
          scale: isHovering ? 3 : 1
        }}
        transition={{ 
          type: "spring", 
          damping: 20,
          stiffness: 300
        }}
      />
    </>
  );
};

export default CustomCursor;