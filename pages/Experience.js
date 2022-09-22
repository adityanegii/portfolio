import React from 'react'
import FlipCard from '../components/assets/FlipCard';
import styles from '../styles/Experience.module.css';
const cards = [
    {
      id: "1",
      front1: "Equifax Inc.",
      front2: "Junior Software Engineer",
      back1: "Assisted the development, and testing of attributes for the Attribute Engine using Python.",
      back2: "Designed and developed a program to transform fixed format credit reports into CSV format to make them more accessible"
    },
    {
      id: "2",
      front1: "CHAP McGill",
      front2: "Co-founder, Developper",
      back1: "At CHAP our goal is to help students gain experience in software development. We do this by creating projects, and participating in hackathos.",
    }
  ];

const  Experience = () => {
    return ( 
        <div className={styles.container}>
            {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>        
     );
}
 
export default Experience;