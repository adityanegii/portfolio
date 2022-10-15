import HomePage from './HomePage'
import Skills from './Skills'
import Experience from './Experience'
import ContactMe from './ContactMe'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Aditya&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  )
}

