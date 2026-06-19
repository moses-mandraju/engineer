export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-6 sm:px-8 pb-24 sm:pb-32">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 break-words">
          Feature Streams – IVAPP
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Core Microservices */}
          <div className="glass-card p-6 sm:p-10 project-card">

            <h3 className="text-xl sm:text-2xl font-bold mb-6 break-words">
              Core Microservices & System Orchestration
            </h3>

            <p className="text-gray-400 mb-6">
              Built and optimized Spring Boot microservices acting as the
              communication hub between multiple upstream and downstream systems.
            </p>

            <ul className="text-gray-400 space-y-3">
              <li>✓ Reduced API latency from 700ms → 300ms.</li>
              <li>✓ Resolved N+1 query issues and optimized DB access.</li>
              <li>✓ Supported JSON and XML payload transformations.</li>
              <li>✓ Investigated Linux UAT log issues and API failures.</li>
              <li>✓ Collaborated with cross-functional teams to align schemas and contracts.</li>
            </ul>

            <div className="mt-8">
              <span className="tech-badge">Java</span>
              <span className="tech-badge">Spring Boot</span>
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">WebClient</span>
            </div>

          </div>

          {/* Modernization */}
          <div className="glass-card p-6 sm:p-10 project-card">

            <h3 className="text-xl sm:text-2xl font-bold mb-6 break-words">
              Platform Modernization & Messaging
            </h3>

            <p className="text-gray-400 mb-6">
              Modernized legacy services and introduced asynchronous messaging
              workflows for scalable backend processing.
            </p>

            <ul className="text-gray-400 space-y-3">
              <li>✓ Migrated Spring Boot 1.x → 3.x.</li>
              <li>✓ Upgraded applications to Java 17.</li>
              <li>✓ Implemented IBM MQ listeners and retry flows.</li>
              <li>✓ Integrated Apache Pulsar event-driven communication.</li>
              <li>✓ Refactored shared utilities for maintainability.</li>
            </ul>

            <div className="mt-8">
              <span className="tech-badge">Java 17</span>
              <span className="tech-badge">Spring Boot 3</span>
              <span className="tech-badge">IBM MQ</span>
              <span className="tech-badge">Apache Pulsar</span>
            </div>

          </div>

          {/* Security */}
          <div className="glass-card p-6 sm:p-10 project-card">

            <h3 className="text-xl sm:text-2xl font-bold mb-6 break-words">
              API Gateway & Enterprise Security
            </h3>

            <p className="text-gray-400 mb-6">
              Designed secure API integrations and implemented gateway-level
              policies for enterprise compliance.
            </p>

            <ul className="text-gray-400 space-y-3">
              <li>✓ Built 10+ Apigee proxies exposing 45+ endpoints.</li>
              <li>✓ Implemented OAuth, HMAC and 2-Way SSL.</li>
              <li>✓ Performed 42Crunch security scans.</li>
              <li>✓ Troubleshot SSL handshake and routing issues.</li>
              <li>✓ Supported internal documentation and audits.</li>
            </ul>

            <div className="mt-8">
              <span className="tech-badge">Apigee</span>
              <span className="tech-badge">OAuth</span>
              <span className="tech-badge">HMAC</span>
              <span className="tech-badge">42Crunch</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
