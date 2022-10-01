import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Index from './index';

function MyApp({ Component, pageProps }) {
  return(
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
  )

  // return <Component {...pageProps} />
}

export default MyApp

