import React from 'react'
import styles from '../styles/HomePage.module.css'
export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <a style = {{fontSize: "3em"}}>Hey, I'm </a>
        <span>Aditya Negi</span> 
      </div>
       <br/>
      <div>
        <a>I'm a software engineering student at McGill University</a>
        <h1>I suck because I failed to get Damso billets</h1>
      </div>
    </div>
  )
}
