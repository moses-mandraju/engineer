import { motion } from "framer-motion";

export default function Stats() {

  const stats = [

    {
      number: "4+",
      title: "Years Experience"
    },

    {
      number: "10+",
      title: "Microservices"
    },

    {
      number: "45+",
      title: "API Endpoints"
    },

    {
      number: "700ms → 300ms",
      title: "Latency Improvement"
    }

  ];

  return (

    <section className="pb-28 sm:pb-40 px-6 sm:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (

            <motion.div

              whileHover={{ y: -8 }}

              className="glass-card p-6 sm:p-8"

              key={item.title}

            >

              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 break-words">

                {item.number}

              </h2>

              <p className="mt-4 text-gray-400">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}
