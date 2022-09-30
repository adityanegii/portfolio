import React from 'react'
import styles from '../../styles/HexagonGrid.module.css'

export default function HexagonGrid({list}) {
  return (
      <div className={styles.main}>
          <div className={styles.hexagon}>
            {list.map((list) => (
                <div>
                  <img src={list.image} />
                  <p>
                    {list.skill}
                  </p>
                </div>
              ))}
          </div>
      </div>
  )
}