import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Plataformas from './components/Plataformas'
import FeatureSection from './components/FeatureSection'
import Content from './components/Content'
import StatsBar from './components/StatsBar'
import Reseñas from './components/Reseñas'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeatureSection/>
    <Content/>
    <Plataformas/>
    <StatsBar/>
    <Reseñas/>
    <Newsletter/>
    <Footer/>
    </>
  )
}