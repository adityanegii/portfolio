import React, { children } from 'react'
import Footer from './assets/Footer'
import NavBar from './assets/NavBar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return ( 
        <div className={styles.container}>
          <div className={styles.principal}>
            <NavBar />
            { children }
            <Footer />
          </div>
      </div>
     );
}
 
export default Layout;