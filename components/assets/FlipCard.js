import React from 'react'
import styles from '../../styles/Assets.module.css'

export default function FlipCard() {
  return (
    <div className={styles.flipcard_container}>
        <div className={styles.flipcard_card}>
            <div className={styles.flipcard_front}></div>
            <div className={styles.flipcard_back}></div>
        </div>
    </div>
  )
}
