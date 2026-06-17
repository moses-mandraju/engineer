const skills = [

{
title:"Backend Engineering",
items:["Java","Spring Boot","JPA","Multithreading"]
},

{
title:"Frontend Development",
items:["React","JavaScript","Tailwind CSS"]
},

{
title:"Messaging Systems",
items:["IBM MQ","Apache Pulsar","Apache Camel"]
},

{
title:"API Security",
items:["Apigee","OAuth","HMAC","2-Way SSL"]
},

{
title:"DevOps",
items:["Jenkins","GitLab","Linux","SonarQube"]
},

{
title:"Databases",
items:["PostgreSQL","MySQL"]
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
              key={skill}
              className="glass-card p-10"
            >

              <h3 className="text-2xl font-bold mb-6">

  {skill.title}

</h3>

<div>

  {skill.items.map((item)=>(

    <span
      key={item}
      className="tech-badge"
    >

      {item}

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