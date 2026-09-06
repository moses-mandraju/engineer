import { ExternalLink } from "lucide-react";

export default function PersonalProjects() {
  return (
    <section
      id="personal-projects"
      className="scroll-mt-28 px-6 sm:px-8 pb-24 sm:pb-32"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">

          <div>

            <p className="text-cyan-400 font-semibold mb-3">
              Personal Projects
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold break-words">
              Things I Build Outside Work
            </h2>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="glass-card p-6 sm:p-10 project-card">

            <div className="flex flex-col h-full">

              <div className="flex-1">

                <p className="text-cyan-400 font-semibold mb-4">
                  Recent Project
                </p>

                <h3 className="text-2xl sm:text-4xl font-bold mb-5 break-words">
                  Streak Checker
                </h3>

                <p className="text-gray-400 text-base sm:text-lg leading-8 mb-8">
                  A full-stack streak tracking app that helps users monitor
                  consistency and stay on track with reminder notifications. It
                  combines a responsive React frontend with a Java microservice
                  backend and scheduled reminder workflows.
                </p>

              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Vite</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">Spring Boot</span>
                <span className="tech-badge">Scheduler</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Vercel</span>
              </div>

              <a
                href="https://streak-checker-bice.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="glass-button self-start text-white font-semibold"
                aria-label="Open Streak Checker live project"
              >
                View Project
                <ExternalLink size={18} aria-hidden="true" />
              </a>

            </div>

          </div>

          <div className="glass-card p-6 sm:p-10 project-card">

            <div className="flex flex-col h-full">

              <div className="flex-1">

                <p className="text-cyan-400 font-semibold mb-4">
                  Developer Tool
                </p>

                <h3 className="text-2xl sm:text-4xl font-bold mb-5 break-words">
                  JSON to Java POJO
                </h3>

                <p className="text-gray-400 text-base sm:text-lg leading-8 mb-8">
                  A browser-based developer tool that turns API responses and
                  nested JSON structures into clean, production-ready Java POJO
                  classes.
                </p>

                <ul className="text-gray-400 space-y-3 mb-8">
                  <li>Configure class names, packages, type mappings, and annotations.</li>
                  <li>Shape generated models for real backend API responses.</li>
                  <li>Keep payloads private with browser-only processing.</li>
                </ul>

              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">JSON</span>
                <span className="tech-badge">Browser-only</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Vercel</span>
              </div>

              <a
                href="https://json-to-java-pojo.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="glass-button self-start text-white font-semibold"
                aria-label="Open JSON to Java POJO live project"
              >
                View Project
                <ExternalLink size={18} aria-hidden="true" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
