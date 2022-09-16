import React from 'react'
import styles from '../styles/HomePage.module.css'
export default function HomePage() {
  return (
    <div className={styles.container}>
       <a style = {{fontSize: "3em"}}>Hey, I'm </a>
       <span>Aditya Negi</span> 
       <br/>
       <a>I'm a software engineering student at McGill University</a>
       <h1>I suck because I failed to get Damso billets</h1>
    </div>
  )
}
