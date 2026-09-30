import { BriefcaseBusiness, Camera, Code } from 'lucide-react'

const socialIcons = {
  Instagram: Camera,
  LinkedIn: BriefcaseBusiness,
  Linkedin: BriefcaseBusiness,
  GitHub: Code,
  Github: Code,
}

/**
 * Pie de página con identidad de marca, navegación y enlaces sociales configurados.
 * @returns {JSX.Element}
 */
export default function Footer({ brand, contact, footer, navigation }) {
  const year = new Date().getFullYear()

  if (!brand || !footer) return null

  return (
    <footer className="bg-black border-t border-slate-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-12">
          <div className="col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
            <a className="mb-8 text-3xl font-bold leading-none text-white" href="#inicio">
              {brand?.name}
            </a>

            <ul aria-label="Redes sociales" className="flex items-center justify-center gap-3 md:justify-start">
              {contact?.socialLinks?.map((social) => {
                const Icon = socialIcons[social?.icon]
                return (
                  <li key={social?.name}>
                    <a
                      aria-label={social?.name}
                      className="flex h-10 w-10 items-center justify-center border border-slate-800 text-slate-400 transition-colors hover:border-emerald-400 hover:text-emerald-400"
                      href={social?.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {Icon && <Icon aria-hidden="true" size={18} strokeWidth={1.7} />}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-bold mb-4">
              Explorar
            </h3>
            <nav aria-label="Navegación principal">
              <ul className="flex flex-col items-start gap-3">
                {navigation?.map((item) => (
                  <li key={item?.href}>
                    <a className="text-sm text-slate-400 transition-colors hover:text-emerald-400" href={item?.href}>
                      {item?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-bold mb-4">
              Legal
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {footer?.legalLinks?.map((link) => (
                <li key={link?.href}>
                  <a className="text-sm text-slate-400 transition-colors hover:text-emerald-400" href={link?.href}>
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col gap-4 items-center justify-between text-sm text-slate-500 sm:flex-row">
          <p className="text-center sm:text-left">
            © {year} {brand?.name} · {footer?.copyrightLabel}
          </p>
          <p className="text-center sm:text-right">
            {footer?.developerText}{' '}
            <a
              href={footer?.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-400 transition-colors hover:text-emerald-400 hover:underline"
            >
              {footer?.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}