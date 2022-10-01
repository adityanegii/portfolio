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
      <Layout>
        <HomePage />
      </Layout>
      <Layout>
        <h1>SKILLS</h1>
        <Skills />
      </Layout>
      <Layout>
        <h1>EXPERIENCE</h1>
        <Experience />
      </Layout>
      <Layout>
        <h1>CONTACT ME</h1>
        <ContactMe />
      </Layout>
        <Footer />
    </div>
  )
}
