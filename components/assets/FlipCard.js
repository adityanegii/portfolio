import React from 'react'
import styles from '../../styles/Assets.module.css'

export default function FlipCard({card}) {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <p>{card.front1}</p>
          <p>{card.front2}</p>
          <p style={{fontWeight: "300", fontSize:"1.1rem"}}>{card.date}</p>
          <p style={{fontWeight: "100", fontSize:"0.95rem"}}>Hover to find out more</p>
          <img src={card.photo} />
        </div>
        <div className={styles.flip_card_back}>
          <p>{card.back}</p>
          <br/>
          {card.link!=null &&
              <a className={styles.link_container} href={card.link}>
                {card.link2}
              </a>
          }
        </div>
      </div>
    </div>
  )
}
