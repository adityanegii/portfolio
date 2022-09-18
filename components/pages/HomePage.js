import React from 'react'
import styles from '../../styles/HomePage.module.css'

export default function HomePage() {
  return (
    <section className={styles.container}>
      <div>
        <a href="https://github.com/adityanegii" target="_blank" className={styles.github}><img src="Github_L.png" alt="Italian Trulli"/></a>
        <a href="https://www.linkedin.com/in/negi-aditya/" target="_blank" className={styles.linkdin}><img src="Linkdin.png" alt="Italian Trulli"/></a>
        <a style = {{fontSize: "max(6vh, 1.45rem)"}}>Hey, I'm </a>
        <span>Aditya Negi</span> 
        <br/>
        <br/>
        <a>I'm a software engineering student at McGill University</a>
        <h1>I suck because I failed to get Damso billets</h1>
      </div>
    </section>
  )
}
