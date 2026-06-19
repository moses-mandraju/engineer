export default function Achievements() {
  return (
    <section className="px-6 sm:px-8 pb-24 sm:pb-32">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="glass-card p-6 sm:p-8 achievement-card">
            <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">
              🏆 Platinum Club Member
            </h3>

            <p className="text-gray-400">
              Recognized for consistent high performance and timely delivery.
            </p>
          </div>


          <div className="glass-card p-6 sm:p-8 achievement-card">
            <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">
              ⚡ 57% Performance Improvement
            </h3>

            <p className="text-gray-400">
              Reduced API latency from 700ms to 300ms through backend optimization.
            </p>
          </div>


          <div className="glass-card p-6 sm:p-8 achievement-card">
            <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">
              🔐 Enterprise API Security
            </h3>

            <p className="text-gray-400">
              Implemented OAuth, HMAC and 2-Way SSL security mechanisms.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
