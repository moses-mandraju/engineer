import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const shouldAnimateText = !isMobile && !reduceMotion;

  return (
    <section className="hero-section min-h-screen flex items-center px-6 sm:px-8 overflow-x-hidden">
      <div className="relative w-full max-w-6xl mx-auto">
        <motion.div
          className="hero-copy relative z-20 w-full lg:max-w-[58%]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8">
            <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              Open to Opportunities
            </span>
          </div>

          <div className="mb-6">
            {shouldAnimateText ? (
              <TypeAnimation
                sequence={["Hey there!", 2000, "", 500]}
                wrapper="h2"
                speed={40}
                repeat={Infinity}
                className="text-cyan-400 text-2xl font-medium mb-4"
              />
            ) : (
              <h2 className="text-cyan-400 text-2xl font-medium mb-4">
                Hey there!
              </h2>
            )}

            <h1 className="text-5xl md:text-7xl font-bold leading-tight hero-name">
              I'm Moses
              <br />
              <span className="text-cyan-400">Mandraju</span>
            </h1>
          </div>

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl leading-9 xl:max-w-[28rem]">
            Full Stack Developer specializing in Java,
            Spring Boot and React.
            Building scalable enterprise applications
            and modern microservices.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto">
            <a
              href="https://github.com/moses-mandraju"
              target="_blank"
              rel="noreferrer"
              className="glass-button justify-center sm:justify-start"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/moses-m-5a38b0195/"
              target="_blank"
              rel="noreferrer"
              className="glass-button justify-center sm:justify-start"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Moses_M_Java_Full_Stack_Developer.pdf`}
              className="glass-button justify-center sm:justify-start"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        <img
          src={`${import.meta.env.BASE_URL}images/moses-cartoon.png`}
          alt="Cartoon portrait of Moses Mandraju"
          className="hero-portrait relative z-10 mx-auto mt-8 h-[min(38vh,320px)] max-w-full object-contain object-bottom md:h-[min(50vh,420px)] xl:absolute xl:right-[42%] xl:top-1/2 xl:mx-0 xl:mt-0 xl:h-[min(70vh,550px)] xl:max-w-none xl:-translate-y-1/2"
        />
      </div>
    </section>
  );
}
