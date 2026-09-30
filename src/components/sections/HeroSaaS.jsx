export default function HeroSaaS({ content }) {
  if (!content || Object.keys(content).length === 0) return null

  return (
    <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden text-slate-300" id="inicio">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
        <div className="max-w-2xl">
          {content?.badge && (
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wide border border-emerald-500/20 mb-6">
              {content?.badge}
            </p>
          )}

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            {content?.heading}
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-400">
            {content?.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {content?.primaryButton?.label && (
              <a
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                href={content?.primaryButton?.href}
              >
                {content?.primaryButton?.label}
              </a>
            )}
            {content?.secondaryButton?.label && (
              <a
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
                href={content?.secondaryButton?.href}
              >
                {content?.secondaryButton?.label}
              </a>
            )}
          </div>

          {content?.stats?.length > 0 && (
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-slate-800 pt-6">
              {content.stats.map((stat) => (
                <div key={stat?.label}>
                  <dt className="text-2xl font-bold text-white">{stat?.value}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{stat?.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {content?.image?.url && (
          <figure className="relative rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            <img
              alt={content?.image?.alt || ''}
              className="aspect-4/3 w-full object-cover"
              src={content?.image?.url}
            />
            {content?.image?.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-5 py-4 text-sm text-slate-300 backdrop-blur-sm">
                {content?.image?.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  )
}
