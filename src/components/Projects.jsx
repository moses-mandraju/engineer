const projects = [
  {
    title: "Zions RDB – Full Stack Development",
    organization: "CGI",
    client: "Zions Banking",
    designation: "Senior Software Engineer",
    role: "Full Stack Developer",
    summary:
      "Contributing to enterprise banking applications across Java and Spring Boot backend services and React-based UI development, including API integration and application maintainability.",
    responsibilities: [
      "Build Java and Spring Boot microservices for enterprise banking applications.",
      "Develop React-based user interfaces and support API integration.",
      "Support CI/CD workflows and application deployments.",
      "Improve application performance and maintainability.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React",
      "JavaScript",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Rancher",
      "Splunk",
    ],
  },
  {
    title: "IVAPP",
    organization: "Infosys",
    client: "Verizon",
    designation: "Technology Analyst",
    role: "Java Backend Developer",
    summary:
      "Feature Streams for IVAPP, spanning microservices, platform modernization and messaging, and API gateway security.",
    features: [
      {
        title: "Core Microservices & System Orchestration",
        description:
          "Built and optimized Spring Boot microservices acting as the communication hub between multiple upstream and downstream systems.",
        responsibilities: [
          "Reduced API latency from 700ms → 300ms.",
          "Resolved N+1 query issues and optimized DB access.",
          "Supported JSON and XML payload transformations.",
          "Investigated Linux UAT log issues and API failures.",
          "Collaborated with cross-functional teams to align schemas and contracts.",
        ],
        technologies: ["Java", "Spring Boot", "PostgreSQL", "WebClient"],
      },
      {
        title: "Platform Modernization & Messaging",
        description:
          "Modernized legacy services and introduced asynchronous messaging workflows for scalable backend processing.",
        responsibilities: [
          "Migrated Spring Boot 1.x → 3.x.",
          "Upgraded applications to Java 17.",
          "Implemented IBM MQ listeners and retry flows.",
          "Integrated Apache Pulsar event-driven communication.",
          "Refactored shared utilities for maintainability.",
        ],
        technologies: ["Java 17", "Spring Boot 3", "IBM MQ", "Apache Pulsar"],
      },
      {
        title: "API Gateway & Enterprise Security",
        description:
          "Designed secure API integrations and implemented gateway-level policies for enterprise compliance.",
        responsibilities: [
          "Built 10+ Apigee proxies exposing 45+ endpoints.",
          "Implemented OAuth, HMAC and 2-Way SSL.",
          "Performed 42Crunch security scans.",
          "Troubleshot SSL handshake and routing issues.",
          "Supported internal documentation and audits.",
        ],
        technologies: ["Apigee", "OAuth", "HMAC", "42Crunch"],
      },
    ],
  },
];

function ProjectSection({ project }) {
  return (
    <article className="project-section">
      <header className="mb-8">
        <h2 className="mb-2 break-words text-3xl font-bold sm:text-4xl">
          {project.title}
        </h2>
        <p className="mb-4 font-medium text-cyan-400">
          {[
            project.organization,
            project.client,
            project.designation,
            project.role,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <p className="max-w-4xl leading-7 text-gray-400">{project.summary}</p>
      </header>

      {project.features ? (
        <div className="grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.features.map((feature) => (
            <article
              key={feature.title}
              className="glass-card project-card flex min-w-0 flex-col p-6 sm:p-8"
            >
              <h3 className="mb-5 break-words text-xl font-bold sm:text-2xl">
                {feature.title}
              </h3>

              <p className="mb-6 text-gray-400">{feature.description}</p>

              <ul className="space-y-3 text-gray-400">
                {feature.responsibilities.map((responsibility) => (
                  <li key={responsibility}>✓ {responsibility}</li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap pt-6">
                {feature.technologies.map((technology) => (
                  <span key={technology} className="tech-badge">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <article className="glass-card project-card p-6 sm:p-10">
          <h3 className="mb-5 text-xl font-bold sm:text-2xl">
            Responsibilities
          </h3>
          <ul className="space-y-3 text-gray-400">
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility}>✓ {responsibility}</li>
            ))}
          </ul>

          <h3 className="mb-2 mt-8 text-xl font-bold sm:text-2xl">
            Technologies
          </h3>
          <div className="flex flex-wrap">
            {project.technologies.map((technology) => (
              <span key={technology} className="tech-badge">
                {technology}
              </span>
            ))}
          </div>
        </article>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-6 pb-24 sm:px-8 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl">
        {projects.map((project) => (
          <ProjectSection key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
