import CurvedTop from '../components/assets/CurvedTop'
import HomePage from './HomePage'
import Skills from './Skills'
import Experience from './Experience'
import ContactMe from './ContactMe'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  )
}
