import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 4,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 10 + 15,
  xOffset: Math.random() * 80 - 40,
  color: ["#22d3ee", "#3b82f6", "#a855f7"][
    Math.floor(Math.random() * 3)
  ]
}));

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: particle.color,
            boxShadow: `0 0 12px ${particle.color}`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

    </div>
  );
}