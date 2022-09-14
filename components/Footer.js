import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.body}></div>
        <div className =  {styles.footer}>
            <a>aditya.negi@mail.mcgill.ca</a>
            <a>Aditya Negi</a>
            <a>438-926-7075</a>
        </div>
    </div>
    )
}
