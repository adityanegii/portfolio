import HomePage from './HomePage'
import Skills from './Skills'
import Experience from './Experience'
import ContactMe from './ContactMe'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <section className={styles.child}>
        <HomePage />
      </section>
      <section className={styles.child}>
        <Skills />
      </section>
      <section className={styles.child}>
        <Experience />
      </section>
      <section className={styles.child}>
        <ContactMe />
      </section>
    </div>
  )
}

