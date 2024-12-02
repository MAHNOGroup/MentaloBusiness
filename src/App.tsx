
import './App.css'
import AboutSection from './components/AboutUs/AboutSection'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ServicesSection from './components/Services/ServicesSection'
import TeamSection from './components/Team/TeamSection'

function App() {


  return (
    <>
          <Navbar />

     <HeroSection/>
     <ServicesSection/>
     <AboutSection/>
     <TeamSection/>
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default App
