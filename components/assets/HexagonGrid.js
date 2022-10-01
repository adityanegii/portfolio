import React from 'react'
import styles from '../../styles/HexagonGrid.module.css'

export default function HexagonGrid({list}) {
  return (
      <div className={styles.main}>
          <div className={styles.hexagon_front}>
            {list.map((list) => (
                <div>
                  <img src={list.image} />
                </div>
              ))}
          </div>
      </div>
  )
}