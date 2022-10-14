import React, {useState, useEffect} from 'react'
import styles from '../styles/NavBar.module.css'
import { Link } from 'react-scroll/modules'

export default function NavBar() {
  
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [contact, setContact] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= window.innerHeight*3) {
      setSkills(false);
      setExperience(false);
      setContact(true);
    }
    else if (window.scrollY >= window.innerHeight*2){
      setSkills(false);
      setExperience(true);
      setContact(false);
    }
    else if (window.scrollY >= window.innerHeight){
      setSkills(true);
      setExperience(false);
      setContact(false);
    }
    else{
      setSkills(false);
      setExperience(false);
      setContact(false);
    }
  }
  
  if (typeof window !== "undefined"){
    window.addEventListener('scroll', changeBackground);
  }

  return (
    // <div className={styles.navbar}>
    <div className={contact ? styles.navbar_cm : experience ? styles.navbar_exp : skills ? styles.navbar_skills : styles.navbar}>
      <div className={styles.container}>
        <Link to="home" spy={true} smooth={true} duration={1250}>AN</Link>
        <div className={styles.menu}>
          <Link to="home" spy={true} smooth={true} duration={1250}>Home</Link>
          <Link to="skills" spy={true} smooth={true} duration={1250}>Skills</Link>
          <Link to="experience" spy={true} smooth={true} duration={1250}>Experience</Link>
          <Link to="contactMe" spy={true} smooth={true} duration={1250}>Contact Me</Link> 
        </div>
      </div>
    </div>
  )
}
