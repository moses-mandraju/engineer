import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 sm:px-8 overflow-x-hidden">

      <div className="w-full max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Availability */}

          <div className="mb-8">

            <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">

              🟢 Open to Opportunities

            </span>

          </div>

          {/* Name */}

          <div className="mb-6">

            <TypeAnimation
              sequence={[
                "Hey there! 👋",
                2000,
                "",
                500
              ]}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="text-cyan-400 text-2xl font-medium mb-4"
            />

            <h1 className="text-5xl md:text-7xl font-bold leading-tight hero-name">
              I'm Moses
              <br />
              <span className="text-cyan-400">
                Mandraju
              </span>
            </h1>

          </div>

          {/* Subtitle */}

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl leading-9">

            Full Stack Developer specializing in Java,
            Spring Boot and React.

            Building scalable enterprise applications
            and modern microservices.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto">

            <a
              href="https://github.com/moses-mandraju"
              target="_blank"
              className="glass-button justify-center sm:justify-start"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/moses-m-5a38b0195/"
              target="_blank"
              className="glass-button justify-center sm:justify-start"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="/engineer/Moses_M_Java_Full_Stack_Developer.pdf"
              className="glass-button justify-center sm:justify-start"
            >
              <FileText size={18} />
              Resume
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
