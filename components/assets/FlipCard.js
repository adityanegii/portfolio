import React from 'react'
import styles from '../../styles/Assets.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function FlipCard({card}) {
  return (
    <div className={styles.flip_card} style={{color: "#e5eaf5"}}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <p>{card.front1}</p>
          <p>{card.front2}</p>
          <p style={{fontWeight: "300", fontSize:"1.1rem"}}>{card.date}</p>
          <p style={{fontWeight: "100", fontSize:"0.95rem"}}>Hover to find out more</p>
          <div className={styles.image_container}>
            <Image height={'150px'} width={'150px'} objectFit={'contain'} src={'/' + card.photo} alt="Italian Trulli" />
          </div>
        </div>
        <div className={styles.flip_card_back}>
          <p>{card.back}</p>
          <br/>
          {card.link!=null &&
              <Link href={card.link}>
                <button className={styles.link_container} >{card.link2}</button>
              </Link>
          }
        </div>
      </div>
    </div>
  )
}
