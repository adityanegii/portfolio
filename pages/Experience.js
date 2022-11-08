import React from 'react'
import FlipCard from '../components/assets/FlipCard';
import styles from '../styles/Experience.module.css';
import Layout from '../components/Layout';
const cards = [
    {
      id: "1",
      front1: "Equifax Inc.",
      front2: "Junior Software Engineer",
      date: "May-August 2022",
      back: "During this internship, I assisted in the development and the testing of the attributes for the Attribute Engine using Python. Furthermore, I designed and developed a program to transform fixed-format credit reports into CSV format to make them more accessible. During this internship, I used and learned GitHub, Python, Jupyter Notebook, Pandas, and Numpy.",
      photo: "eqfax1.png"
    },
    {
      id: "2",
      front1: "CHAP McGill",
      front2: "Co-founder, Developper",
      date: "2022-present",
      back: "At CHAP, our goal is to help students gain experience in software development. We do this by creating projects and participating in hackathons.",
      photo: "mcgill.png"
    },
    {
      id: "5",
      front1: "GleanEazy",
      front2: "Code to Give (Morgan Stanley)",
      date: "November 2022",
      back: "The goal of the project is to design a web application that will faciliate the management of gleaning events across Canada. The application will host services for producers, volunteers, gleaning groups, and food bank organizations. This project was made with Java, SpringBoot, and Next.js.",
      photo: "GleanEasy.png",
      link2: "Link to project", 
      link: "https://github.com/GianlucaP106/MS-CODE-TO-GIVE-APP"
    },
    {
      id: "3", 
      front1: "Checkers Game",
      date: "2021",
      back: "Checkers is a project I made in CEGEP. It is a simple checkers game where a user can play against an AI. It utilizes the pygame library to make the GUI for the game, and the minimax algorithm makes up the AI.",
      link: "https://github.com/adityanegii/checkers-game",
      link2: "Link to project",
      photo: "checkers.png"
    },
    {
      id: "4",
      front1: "SafeDrop - CHAP",
      front2: "MAIS Hackathon",
      date: "October 2022",
      back: "SafeDrop is an extension for Ring doorbell to allow users to receive their packages/deliveries and to pay for customs, fees, tips, e.t.c. The camera detects a delivery driver and opens the interface to pay, view payments, and see the delivery man walk up to your door. This was made through OpenCV and Node.js.",
      photo: "safeDrop.png",
      link2: "Link to project", 
      link: "https://devpost.com/software/safedrop?ref_content=user-portfolio&ref_feature=in_progress"
    }
    
  ];

const Experience = () => {
    return ( 
      <div id="experience" style={{background:"#595E73", color: "#a0d2eb"}}>
        <Layout>
          <h2 style={{textAlign:"center"}}>EXPERIENCE</h2>
          <div className={styles.container}>
              {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>    
        </Layout>
      </div>   
     );
}
 
export default Experience;