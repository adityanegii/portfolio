import React from 'react'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <a>Aditya Negi</a>
      <div className={styles.navbar_menu}>
        <a>Home</a>
        <a>Experience</a>
        <a>Skils</a>
        <a>Projects</a>
      </div>
    </div>
  )
}
