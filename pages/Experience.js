import React from 'react'
import FlipCard from '../components/assets/FlipCard';
import styles from '../styles/Experience.module.css';
import Layout from '../components/Layout';
const cards = [
    {
      id: "2",
      front1: "THORASYS",
      front2: "Software Developer Intern",
      date: "July-August 2023",
      back: "During my internship, I was actively engaged in the development of a proof of concept for a Windows service using Delphi. The primary objective of this service was to streamline the retrieval and analysis of data from one of THORASYS' products. Upon completing the analysis, the service had the capability to transmit the processed data to a third-party software via a TCP/IP connection. I am pleased to have successfully implemented it.",
      photo: "thorasys.jfif"
    },
    {
      id: "2",
      front1: "Equifax Inc.",
      front2: "Junior Software Engineer",
      date: "May-August 2022",
      back: "During this internship, I assisted in the development and the testing of the attributes for the Attribute Engine. Furthermore, I Designed and developed a program that transformed Business Credit Reports into a usable format for other teams to utilize. During this internship, I used and learned GitHub, Python, Jupyter Notebook, Pandas, and Numpy.",
      photo: "eqfax1.png"
    },
    {
      id: "3",
      front1: "NHL-Guess-Who", 
      front2: "Personal Project",
      date: "2023",
      back: "NHL based games, one is a wordle like game where the user guesses players on the information of each guess. The other game is the user has to guess the player based on the player's career path. This project was made with Next.js and using information from the NHL api.",
      photo: "nhl.png",
      link2: "Link to project",
      link: "https://nhl-guess-who.vercel.app/"
    },
    {
      id: "4",
      front1: "Match Predictor",
      front2: "Personal Project",
      date: "2023",
      back: "This Match Predictor is a Python-based tool that uses various classifiers and regression models to predict match results and scorelines. The models are trained on data scraped from FBREF, which provides comprehensive football statistics.",
      photo: "soccerball.png",
      link2: "Link to project", 
      link: "https://github.com/adityanegii/Match-Predictor-FBREF"
    },
    {
      id: "5",
      front1: "GleanEazy",
      front2: "Code to Give (Morgan Stanley)",
      date: "November 2022",
      back: "The goal of the project is to design a web application that will faciliate the management of gleaning events across Canada. The application will host services for producers, volunteers, gleaning groups, and food bank organizations. This project was made with Java, SpringBoot, and React.",
      photo: "GleanEasy.png",
      link2: "Link to project", 
      link: "https://github.com/adityanegii/GleanEazy"
    },
    {
      id: "6", 
      front1: "Checkers Game",
      front2: "Personal Project",
      date: "2021",
      back: "Checkers is a project I made in CEGEP. It is a simple checkers game where a user can play against an AI. It utilizes the pygame library to make the GUI for the game, and the minimax algorithm makes up the AI.",
      link: "https://github.com/adityanegii/checkers-game",
      link2: "Link to project",
      photo: "checkers.png"
    },
    {
      id: "7",
      front1: "SafeDrop - CHAP",
      front2: "MAIS Hackathon",
      date: "October 2022",
      back: "SafeDrop is an extension for Ring doorbell to allow users to receive their packages/deliveries and to pay for customs, fees, tips, e.t.c. The camera detects a delivery driver and opens the interface to pay, view payments. This was made through OpenCV and Node.js.",
      photo: "safeDrop.png",
      link2: "Link to project", 
      link: "https://devpost.com/software/safedrop?ref_content=user-portfolio&ref_feature=in_progress"
    }

  ];

const Experience = () => {
    return ( 
      <div id="experience" style={{background:"#03243a", color: "#e5eaf5"}}>
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