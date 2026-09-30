import { Database, ShieldCheck, Zap } from 'lucide-react'

const featureIcons = {
  Database,
  Zap,
  ShieldCheck,
}

export default function FeaturesSaaS({ content }) {
  if (!content?.items || content.items.length === 0) return null

  return (
    <section id="features" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {content?.eyebrow && (
            <p className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-3">
              {content?.eyebrow}
            </p>
          )}
          {content?.heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content?.heading}
            </h2>
          )}
          {content?.description && (
            <p className="text-lg leading-relaxed text-slate-400">
              {content?.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {content.items.map((item, index) => {
            const Icon = featureIcons[item?.icon] ?? Database

            return (
              <article
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 hover:border-emerald-500/30 transition-all duration-300 group"
                key={item?.title ?? index}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {item?.title}
                </h3>
                <p className="leading-relaxed text-slate-400">
                  {item?.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
