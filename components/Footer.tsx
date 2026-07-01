export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-white mb-4">
          Nova Studio
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-400">
          Creating modern websites, memorable brands and digital experiences
          that help businesses grow.
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#portfolio" className="hover:text-white transition">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <div className="border-t border-slate-700 pt-6 text-sm text-gray-500">
        <p>Designed & Developed with Next.js and Tailwind CSS</p>
        <p className="mt-2">© 2026 Nova Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}