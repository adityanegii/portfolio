import React from 'react'
import styles from '../../styles/Assets.module.css'

export default function FlipCard({card}) {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <p>{card.front1}</p>
          <p>{card.front2}</p>
        </div>
        <div className={styles.flip_card_back}>
          <p>{card.back1}</p>
          <p>{card.back2}</p>
        </div>
      </div>
    </div>
  )
}
