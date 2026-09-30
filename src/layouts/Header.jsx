import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header({ brand, navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const MobileMenuIcon = isMenuOpen ? X : Menu

  if (!brand) return null

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          className="text-2xl font-extrabold text-white tracking-tighter"
          href="#inicio"
          aria-label={brand?.name}
        >
          {brand?.name}<span className="text-emerald-500">.</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {navigation?.map((item) => (
            <a
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
              href={item?.href}
              key={item?.href}
            >
              {item?.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/20 px-4 py-2 rounded-lg text-sm font-bold transition-all"
            href="#contacto"
          >
            Agendar Cita
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-10 w-10 items-center justify-center text-slate-300 lg:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <MobileMenuIcon aria-hidden="true" size={22} strokeWidth={1.7} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navegación principal"
        aria-hidden={!isMenuOpen}
        className={`absolute inset-x-0 top-full border-b border-slate-800 bg-slate-950 px-6 py-3 transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 pointer-events-none opacity-0'}`}
        inert={!isMenuOpen}
      >
        {navigation?.map((item) => (
          <a
            className="block py-3 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            href={item?.href}
            key={item?.href}
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item?.label}
          </a>
        ))}
      </nav>
    </header>
  )
}