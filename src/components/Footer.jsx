export default function Footer() {

  return (

    <footer
      id="contact"
      className="pb-20 text-center"
    >
      <img
        src={`${import.meta.env.BASE_URL}moses_mandraju_dark.png`}
        alt="Moses Mandraju logo"
        className="footer-logo footer-logo-dark mx-auto mb-8 h-16 w-auto"
      />
      <img
        src={`${import.meta.env.BASE_URL}moses_mandraju_light.png`}
        alt="Moses Mandraju logo"
        className="footer-logo footer-logo-light mx-auto mb-8 h-16 w-auto"
      />

      <p className="mt-4 text-gray-500">

        © 2026 Moses Mandraju

      </p>
      <p className="text-gray-600 text-sm mt-2">
        Hyderabad, India 🇮🇳
      </p>
      <p className="text-gray-500 text-sm mt-6">
        Built with React • Tailwind CSS • Framer Motion
      </p>

    </footer>

  );

}