import React, {useState, useEffect} from 'react'
import styles from '../styles/NavBar.module.css'
import { Link } from 'react-scroll/modules'

export default function NavBar() {
  
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [contact, setContact] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
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
    <div className={contact ? styles.container_cm : experience ? styles.container_exp : skills ? styles.container_skills : styles.container_home}>
      {/* <div className={styles.container}> */}
        <Link to="home" spy={true} smooth={true} duration={1250}><a>AN</a></Link>
        <div className={styles.menu}>
          <Link to="home" spy={true} smooth={true} duration={1250}>Home</Link>
          <Link to="skills" spy={true} smooth={true} duration={1250}>Skills</Link>
          <Link to="experience" spy={true} smooth={true} duration={1250}>Experience</Link>
          <Link to="contactMe" spy={true} smooth={true} duration={1250}>Contact Me</Link> 
        {/* </div> */}
      </div>
    </div>
  )
}
