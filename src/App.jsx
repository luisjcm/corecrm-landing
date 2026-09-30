import Header from './layouts/Header'
import Footer from './components/sections/Footer'
import HeroSaaS from './components/sections/HeroSaaS'
import FeaturesSaaS from './components/sections/FeaturesSaaS'
import WaitlistSaaS from './components/sections/WaitlistSaaS'
import { siteConfig } from './data/config'



export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <Header brand={siteConfig.brand} navigation={siteConfig.navigation} />
      <main>
        <HeroSaaS content={siteConfig.hero.content} />
        <FeaturesSaaS content={siteConfig.features} />
        <WaitlistSaaS content={siteConfig.waitlist} />
      </main>
      <Footer
        brand={siteConfig.brand}
        contact={siteConfig.contact}
        footer={siteConfig.footer}
        navigation={siteConfig.navigation}
      />
    </div>
  )
}