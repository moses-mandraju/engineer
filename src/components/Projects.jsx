export default function Projects() {

  return (

    <section id="projects" className="px-8 pb-32">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">

          Featured Projects

        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="glass-card p-10 project-card">

            <h3 className="text-2xl font-bold mb-6">

              Enterprise API Platform

            </h3>

            <p className="text-gray-400">

              Secure microservice communication
              with Apigee and Java backend systems.

            </p>

            <div className="mt-8">

<span className="tech-badge">Java</span>

<span className="tech-badge">Spring Boot</span>

<span className="tech-badge">Apigee</span>

<span className="tech-badge">MySql</span>

</div>

          </div>

          <div className="glass-card p-10">

            <h3 className="text-2xl font-bold mb-6">

              Legacy Modernization

            </h3>

            <p className="text-gray-400">

              Migrated Spring Boot 1.x applications
              to Spring Boot 3.x.

            </p>

                        <div className="mt-8">

<span className="tech-badge">Java17</span>

<span className="tech-badge">Spring Boot</span>

<span className="tech-badge">IBM MQ</span>

<span className="tech-badge">Apache Pulsar</span>

</div>


          </div>

          <div className="glass-card p-10">

            <h3 className="text-2xl font-bold mb-6">

              Messaging Platform

            </h3>

            <p className="text-gray-400">

              IBM MQ and Pulsar asynchronous integrations.

            </p>

            <div className="mt-8">

<span className="tech-badge">Java</span>

<span className="tech-badge">IBM MQ</span>

<span className="tech-badge">Apache Camel</span>

</div>

          </div>

        </div>

      </div>

    </section>

  );

}