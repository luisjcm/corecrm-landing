import { Lock } from 'lucide-react'

export default function WaitlistSaaS({ content }) {
  if (!content || Object.keys(content).length === 0) return null

  return (
    <section id="waitlist" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden flex justify-center">
      <div className="absolute left-1/2 top-1/2 h-64 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {content?.eyebrow && (
          <p className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4">
            {content?.eyebrow}
          </p>
        )}
        {content?.heading && (
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {content?.heading}
          </h2>
        )}
        {content?.description && (
          <p className="text-slate-400 text-lg mb-10">
            {content?.description}
          </p>
        )}

        <form
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            aria-label="Correo electrónico"
            autoComplete="email"
            className="w-full bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            name="email"
            placeholder={content?.inputPlaceholder}
            required
            type="email"
          />
          <button
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all whitespace-nowrap"
            type="submit"
          >
            {content?.buttonLabel}
          </button>
        </form>

        {content?.disclaimer && (
          <p className="text-xs text-slate-500 mt-6 flex items-center justify-center gap-2">
            <Lock aria-hidden="true" size={14} />
            {content?.disclaimer}
          </p>
        )}
      </div>
    </section>
  )
}
