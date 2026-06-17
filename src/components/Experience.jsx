export default function Experience() {

  return (

    <section
      id="experience"
      className="px-8 pb-32"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">

          Experience

        </h2>

        <div className="relative border-l border-cyan-400 pl-10">

          <div className="mb-16 relative">

            <div className="timeline-dot"></div>

            <p className="text-cyan-400 mb-3">

              July 2022 - Present

            </p>

            <h3 className="text-3xl font-bold">

              Infosys

            </h3>

            <p className="text-gray-400 mt-3">

              Full Stack Developer | Verizon Project

            </p>

            <ul className="mt-8 space-y-4 text-gray-400">

              <li>Built Java 17 Spring Boot microservices.</li>

              <li>Implemented IBM MQ and Pulsar integrations.</li>

              <li>Designed secure APIs using Apigee.</li>

              <li>Migrated Spring Boot 1.x → 3.x applications.</li>

              <li>Optimized latency from 700ms → 300ms.</li>

            </ul>

          </div>

          <div className="relative">

            <div className="timeline-dot"></div>

            <h3 className="text-2xl font-bold">

              Platinum Club Recognition

            </h3>

            <p className="text-gray-400 mt-3">

              Recognized for consistent high performance.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}
