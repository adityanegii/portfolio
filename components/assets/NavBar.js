import React from 'react'
import styles from '../../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <a>AN</a>
      <div className={styles.menu}>
        <a>Home</a>
        <a>Experience</a>
        <a>Skills</a>
        <a>Projects</a>
      </div>
    </div>
  )
}
