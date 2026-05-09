export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* HERO */}
      <section className="text-center py-32 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Building Modern Technology for a Connected Future.
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Flux creates powerful, reliable, and scalable digital solutions for businesses and creators.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-[#5A2DFF] rounded-md font-semibold hover:bg-[#4a23d1] transition"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-gray-500 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-[#111] p-6 rounded-lg border border-[#222]">
          <h3 className="text-xl font-semibold mb-2">Cloud‑Powered Infrastructure</h3>
          <p className="text-gray-400">
            Scalable systems built for performance and reliability.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-lg border border-[#222]">
          <h3 className="text-xl font-semibold mb-2">Enterprise‑Grade Security</h3>
          <p className="text-gray-400">
            Modern security standards to protect your data and users.
          </p>
        </div>

        <div className="bg-[#111] p-6 rounded-lg border border-[#222]">
          <h3 className="text-xl font-semibold mb-2">Modern Development Tools</h3>
          <p className="text-gray-400">
            Clean architecture and future‑proof engineering.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to build with Flux?</h2>
        <a
          href="/contact"
          className="px-8 py-4 bg-[#5A2DFF] rounded-md font-semibold hover:bg-[#4a23d1] transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
