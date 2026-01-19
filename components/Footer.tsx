// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-violet-500">L</span>ycanWeb
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 LycanWeb – Uttar Pradesh to the World
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-violet-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Work
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Subscribe or Social */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 mb-2">Stay in the shadows</p>
            <div className="flex gap-6 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-violet-400">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 text-center text-xs text-gray-600 border-t border-gray-900 pt-8">
          <a href="#" className="mx-3 hover:text-gray-400">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="mx-3 hover:text-gray-400">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="mx-3 hover:text-gray-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
