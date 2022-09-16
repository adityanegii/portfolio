import '../styles/globals.css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HomePage from '../pages/HomePage'

function MyApp({ Component, pageProps }) {
  return( 
    <div className={styles.container}>
      <Head>
        <title>Aditya Negi</title>
        <link rel="icon" href='/Letter-V.ico' />
      </Head>
      <main>
        
        <NavBar />
        <HomePage />

        <Footer />
      </main>
    </div>
  )
}

export default MyApp
