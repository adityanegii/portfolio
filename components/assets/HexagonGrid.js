import React from 'react'
import styles from '../../styles/HexagonGrid.module.css'

export default function HexagonGrid({list}) {
  return (
      <div className={styles.main}>
          <div className={styles.hexagon_front}>
            {list.map((list) => (
                <div key={list.id}>
                  <picture> 
                    <img src={list.image} alt="Italian Trulli"/>
                  </picture>
                </div>
              ))}
          </div>
      </div>
  )
}