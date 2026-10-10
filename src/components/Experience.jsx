import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const experiences = [
  {
    company: "CGI",
    current: true,
    dates: "Mar 2026 – Present",
    designation: "Senior Software Engineer",
    role: "Full Stack Developer",
    client: "Zions Banking",
    summary:
      "Contributing to enterprise banking applications across Java and Spring Boot backend services and React-based UI development, including API integration and application maintainability.",
    highlights: [
      "Building Java and Spring Boot microservices.",
      "Supporting CI/CD and deployments.",
      "Improving application performance and maintainability.",
    ],
    technologies: ["Java", "Spring Boot", "React", "REST APIs", "Apigee"],
  },
  {
    company: "Infosys",
    dates: "Jun 2022 – Mar 2026",
    designation: "Technology Analyst",
    role: "Java Backend Developer",
    client: "Verizon",
    summary:
      "Developed and enhanced Java and Spring Boot microservices, secured APIs using Apigee, integrated asynchronous messaging, and supported legacy application modernization and performance optimization.",
    highlights: [
      "Migrated Spring Boot 1.x applications to Spring Boot 3.x and upgraded to Java 17.",
      "Implemented IBM MQ and Apache Pulsar integrations.",
      "Improved API latency from 700ms to 300ms.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Apigee",
      "IBM MQ",
      "Apache Pulsar",
      "Apache Camel",
      "MySQL",
    ],
  },
];

export default function Experience() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <section
      id="experience"
      className="scroll-mt-28 px-6 sm:px-8 pb-24 sm:pb-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">
          Experience
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience) => (
            <motion.article
              key={experience.company}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`glass-card min-w-0 p-5 sm:p-8 ${
                experience.current
                  ? "border-cyan-400/40 shadow-[0_0_28px_rgba(34,211,238,.08)]"
                  : ""
              }`}
            >
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {experience.company}
                    </h3>
                    {experience.current && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-400">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400 motion-safe:animate-pulse"
                        />
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-lg font-semibold text-cyan-400 sm:text-xl">
                    {experience.designation}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-cyan-400 sm:pt-2 sm:text-base">
                  {experience.dates}
                </span>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base">
                <span className="font-medium text-white">{experience.role}</span>
                <span aria-hidden="true" className="text-gray-500">
                  ·
                </span>
                <span className="text-gray-400">
                  Client: {experience.client}
                </span>
              </div>

              <p className="mb-5 leading-7 text-gray-400">
                {experience.summary}
              </p>

              <ul className="mb-6 space-y-2 text-sm leading-6 text-gray-400 sm:text-base">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div
                aria-label="Technology stack"
                className="-m-1 flex flex-wrap"
              >
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="tech-badge px-3 py-1.5 text-xs sm:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
