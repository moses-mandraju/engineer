export default function Achievements() {

  return (

    <section className="px-8 pb-32">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">

          Achievements

        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="glass-card p-8 achievement-card">
            🏆 Platinum Club Member
          </div>

          <div className="glass-card p-8 achievement-card">
            ⚡ 57% Performance Improvement
          </div>

          <div className="glass-card p-8 achievement-card">
            🔐 Enterprise API Security
          </div>

        </div>

      </div>

    </section>

  );

}