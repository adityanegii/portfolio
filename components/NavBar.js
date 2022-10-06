import React from 'react'
import styles from '../styles/NavBar.module.css'
// import Link from 'next/link';
import { Link } from 'react-scroll/modules'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link to="home" spy={true} smooth={true} duration={500}>AN</Link>
      <div className={styles.menu}>
        <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
        <Link to="experience" spy={true} smooth={true} duration={500}>Experience</Link>
        <Link to="contactMe" spy={true} smooth={true} duration={500}>Contact Me</Link> 
      </div>
    </div>
  )
}
