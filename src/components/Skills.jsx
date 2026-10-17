import { useRef, useState } from "react";
import {
  FaJava,
  FaReact,
  FaLinux,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaCss3Alt,
  FaTools,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiJenkins,
  SiPostman,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";

const skills = [
  {
    title: "Backend Engineering",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Microservices", icon: "⚙️" },
      { name: "JPA", icon: <FaDatabase /> },
      { name: "Multithreading", icon: "⚡" },
      { name: "Spring Boot Admin", icon: <FaTools /> },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Messaging Systems",
    items: [
      { name: "IBM MQ", icon: "📨" },
      { name: "Apache Pulsar", icon: "⚡" },
      { name: "Apache Camel", icon: "🐪" },
      { name: "Kafka", icon: "📨" },
    ],
  },
  {
    title: "API Security",
    items: [
      { name: "Apigee", icon: "🔐" },
      { name: "OAuth", icon: "🔑" },
      { name: "HMAC", icon: "🛡️" },
      { name: "2-Way SSL", icon: "🔒" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "SonarQube", icon: <FaTools /> },
      { name: "Checkmarx", icon: <FaTools /> },
      { name: "Rancher", icon: <FaTools /> },
      { name: "Splunk", icon: <FaTools /> },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Azure", icon: <FaCloud /> },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeSkill = skills[activeIndex];

  function handleTabKeyDown(event, index) {
    let nextIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % skills.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + skills.length) % skills.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = skills.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="px-6 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Core Expertise</h2>

        <div className="glass-card p-5 sm:p-8">
          <div
            aria-label="Expertise categories"
            className="mb-8 flex flex-wrap gap-2 sm:gap-3"
            role="tablist"
          >
            {skills.map((skill, index) => (
              <button
                key={skill.title}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`expertise-tab-${index}`}
                aria-controls="expertise-panel"
                aria-selected={activeIndex === index}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:px-5 sm:py-2.5 sm:text-base ${
                  activeIndex === index
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400"
                    : "border-white/10 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-400"
                }`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                role="tab"
                tabIndex={activeIndex === index ? 0 : -1}
                type="button"
              >
                {skill.title}
              </button>
            ))}
          </div>

          <div
            id="expertise-panel"
            aria-labelledby={`expertise-tab-${activeIndex}`}
            className="min-h-24"
            role="tabpanel"
            tabIndex={0}
          >
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">
              {activeSkill.title}
            </h3>
            <div className="flex flex-wrap">
              {activeSkill.items.map((item) => (
                <span
                  key={item.name}
                  className="tech-badge flex items-center gap-3"
                >
                  <span aria-hidden="true" className="text-lg">
                    {item.icon}
                  </span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
