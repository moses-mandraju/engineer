import { motion } from "framer-motion";

export default function ParticlesBackground() {

  return (

    <>
      <motion.div
        className="fixed top-20 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px] -z-10"
        animate={{
          y: [0, 150, 0],
          x: [0, 50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity
        }}
      />

      <motion.div
        className="fixed bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[150px] -z-10"
        animate={{
          y: [0, -120, 0],
          x: [0, -80, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity
        }}
      />

      <motion.div
        className="fixed top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-[120px] -z-10"
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
      />
    </>
  );

}
