export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-6 sm:px-8 pb-24 sm:pb-32"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 sm:mb-20">
          Experience
        </h2>

        <div className="relative border-l border-cyan-400 ml-3 sm:ml-5 pl-8 sm:pl-14">

          {/* CGI */}
          <div className="relative mb-24">

            {/* Dot */}
            <div className="absolute -left-[44px] sm:-left-[68px] top-3 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.8)]"></div>

            <div className="flex items-baseline justify-between gap-4 mb-4">

              <h3 className="text-3xl sm:text-5xl font-bold">
                CGI
              </h3>

              <span className="text-cyan-400 text-sm sm:text-xl whitespace-nowrap">
                Mar 2026 – Present
              </span>

            </div>

            <p className="text-gray-400 mb-8">
              Full Stack Developer | Zions Bank Client
            </p>

            <ul className="space-y-5 text-gray-400">

              <li>• Developing enterprise banking applications.</li>

              <li>• Building Java Spring Boot microservices.</li>

              <li>• Working on React-based UI development.</li>

              <li>• Supporting CI/CD and deployments.</li>

              <li>• Improving performance and maintainability.</li>

            </ul>

          </div>

          {/* Infosys */}
          <div className="relative">

            {/* Dot */}
            <div className="absolute -left-[44px] sm:-left-[68px] top-3 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.8)]"></div>

            <div className="flex items-baseline justify-between gap-4 mb-4">

              <h3 className="text-3xl sm:text-5xl font-bold">
                Infosys
              </h3>

              <span className="text-cyan-400 text-sm sm:text-xl whitespace-nowrap">
                Jun 2022 – Mar 2026
              </span>

            </div>

            <p className="text-gray-400 mb-8">
              Full Stack Developer | Verizon Client
            </p>

            <ul className="space-y-5 text-gray-400">

              <li>• Built Java 17 Spring Boot microservices.</li>

              <li>• Implemented IBM MQ and Apache Pulsar integrations.</li>

              <li>• Designed secure APIs using Apigee.</li>

              <li>• Migrated Spring Boot 1.x → 3.x applications.</li>

              <li>• Improved latency from 700ms → 300ms.</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
