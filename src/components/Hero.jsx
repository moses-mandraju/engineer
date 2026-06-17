import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">

      <div className="max-w-6xl mx-auto">

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

          <h1 className="text-7xl md:text-8xl font-bold leading-tight hero-name">

  Moses

  <br />

  <span className="text-cyan-400">

    Mandraju

  </span>

</h1>

          {/* Subtitle */}

          <p className="mt-10 text-gray-400 text-xl max-w-3xl leading-10">

            Full Stack Developer specializing in Java,
            Spring Boot and React.

            Building scalable enterprise applications
            and modern microservices.

          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-12 flex-wrap">

            <a
              href="https://github.com/moses-mandraju"
              target="_blank"
              className="glass-button"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/moses-m-5a38b0195/"
              target="_blank"
              className="glass-button"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="#"
              className="glass-button"
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