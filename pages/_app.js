import '../styles/globals.css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/assets/NavBar'
import Footer from '../components/assets/Footer'
import HomePage from '../components/pages/HomePage'
import CurvedTop from '../components/assets/CurvedTop'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <div className={styles.container}>
          <Head>
            <title>Aditya Negi</title>
            <link rel="icon" href='/favicon.ico' />
          </Head>
          <div className={styles.principal}>
            <NavBar />
            <CurvedTop />
            <HomePage />
            <span></span>
            <Footer />
          </div>
      </div>
    </div>
  )
}

export default MyApp
