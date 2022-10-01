import React, { children } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return ( 
        <div className={styles.container}>
          <div className={styles.principal}>
            { children }
          </div>
      </div>
     );
}
 
export default Layout;