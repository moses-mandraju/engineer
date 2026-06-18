import {
  FaJava,
  FaReact,
  FaLinux,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  
  
  SiJenkins,
  SiPostman,
  SiMysql,
  SiPostgresql
} from "react-icons/si";

const skills = [
  {
    title: "Backend Engineering",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "JPA", icon: <FaDatabase /> },
      { name: "Multithreading", icon: "⚡" }
    ]
  },

  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },

  {
    title: "Messaging Systems",
    items: [
      { name: "IBM MQ", icon: "📨" },
      { name: "Apache Pulsar", icon: "⚡" },
{ name: "Apache Camel", icon: "🐪" },
    ]
  },

  {
    title: "API Security",
    items: [
      { name: "Apigee", icon: "🔐" },
      { name: "OAuth", icon: "🔑" },
      { name: "HMAC", icon: "🛡️" },
      { name: "2-Way SSL", icon: "🔒" }
    ]
  },

  {
    title: "DevOps & Tools",
    items: [
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  },

  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  }
];

export default function Skills() {
  return (
    <section className="px-8 pb-32">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {skills.map((skill) => (

            <div
              key={skill.title}
              className="glass-card p-10"
            >

              <h3 className="text-2xl font-bold mb-8">
                {skill.title}
              </h3>

              <div className="flex flex-wrap">

                {skill.items.map((item) => (

                  <span
                    key={item.name}
                    className="tech-badge flex items-center gap-3"
                  >
                    <span className="text-lg">
                      {item.icon}
                    </span>

                    {item.name}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}