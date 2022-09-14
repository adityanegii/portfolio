import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aditya Negi</title>
        <link rel="icon" href='/Letter-V.ico' />
      </Head>
      <main>
        <Header />
        
        <div></div>
        
        <Footer />
      </main>
    </div>
  )
}
