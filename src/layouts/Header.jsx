import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/config'

const navigationLabel = siteConfig.accessibility.navigationLabel

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const MobileMenuIcon = isMenuOpen ? X : Menu

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          className="text-2xl font-serif font-bold text-slate-900 tracking-tight"
          href="#inicio"
          aria-label={siteConfig.brand.name}
        >
          {siteConfig.brand.name}
        </a>

        <nav aria-label={navigationLabel} className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <a
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="flex h-10 w-10 items-center justify-center text-slate-900 lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <MobileMenuIcon aria-hidden="true" size={22} strokeWidth={1.7} />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={navigationLabel}
        aria-hidden={!isMenuOpen}
        className={`absolute inset-x-0 top-full border-b border-slate-200 bg-white px-6 py-3 transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 pointer-events-none opacity-0'}`}
        inert={!isMenuOpen}
      >
        {siteConfig.navigation.map((item) => (
          <a
            className="block py-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wider"
            href={item.href}
            key={item.href}
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}