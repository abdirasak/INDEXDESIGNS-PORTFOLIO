export default function Footer() {
  return (
    <footer className="bg-dark border-t border-green/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cream-dim text-xs font-syne">
          © {new Date().getFullYear()} Index Designs. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-cream-dim text-xs font-syne hover:text-green transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
