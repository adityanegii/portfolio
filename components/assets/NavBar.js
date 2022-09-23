import React from 'react'
import styles from '../../styles/NavBar.module.css'
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/">AN</Link>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/Experience">Experience</Link>
        <Link href="/Skills">Skills</Link>
        <Link href="/ContactMe">Contact Me</Link> 
      </div>
    </div>
  )
}
