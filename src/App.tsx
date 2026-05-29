import Caracteristicas from './components/sections/Caracteristicas'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Localizacion from './components/sections/Localizacion'
import Navbar from './components/sections/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Caracteristicas />
      <Localizacion />
      <Footer />
    </div>
  )
}
