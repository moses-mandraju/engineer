import { motion } from "framer-motion";

export default function About() {

  return (

    <section id="about" className="px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="glass-card p-12"
        >

          <h2 className="text-4xl font-bold mb-10">

            About Me

          </h2>

          <p className="text-gray-400 leading-10 text-lg max-w-4xl">

            Results-driven Full Stack Developer with 4 years of experience
            specializing in Java, Spring Boot and React.

            Experienced in building scalable enterprise applications,
            modernizing legacy systems and integrating APIs securely.

            Passionate about backend engineering, performance optimization
            and creating maintainable software solutions.

          </p>

        </motion.div>

      </div>

    </section>

  );

}