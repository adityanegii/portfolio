import CurvedTop from '../components/assets/CurvedTop'
import HomePage from './HomePage'
import Skills from './Skills'
import Experience from './Experience'
import ContactMe from './ContactMe'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home() {
  const SERVICE_ID  = process.env.SERVICE_ID
  const TEMPLATE_ID = process.env.TEMPLATE_ID
  const PUBLIC_KEY = process.env.PUBLIC_KEY
  return (
    <div>
      <NavBar />
      <HomePage />
      <Skills />
      <Experience />
      <ContactMe s={SERVICE_ID} t={TEMPLATE_ID} p={PUBLIC_KEY} />
    </div>
  )
}

