import React from 'react'
import styles from '../../styles/Assets.module.css'

export default function FlipCard() {
  return (
    <div className={styles.flip_card}>
  <div className={styles.flip_card_inner}>
    <div className={styles.flip_card_front}>
    </div>
    <div className={styles.flip_card_back}>
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  )
}
