import styles from '../styles/SkillsPage.module.css'
import HexagonGrid from '../components/assets/HexagonGrid'
import Layout from '../components/Layout'
const languages = [
  {
      id: "1",
      skill: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg"
  },
  {
      id: "2",
      skill: "Java",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg"
  },
  {
      id: "3",
      skill: "C",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"
  },
  {
      id: "4",
      skill: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
  },
  {
      id: "5",
      skill: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
  },
  {
      id: "7",
      skill: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
  },
  {
      id: "8",
      skill: "SQLite",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg"
  }
]
const tools = [
    {
        skill: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
    },
    {
        skill: "React.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
        skill: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        skill: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        skill: "Express.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
    },
    {
        skill: "Pandas",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
      
    },
    {
        skill: "Numpy",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
    },
    {
        skill: "Visual Studio Code",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        skill: "UML",
        image: "umple.png",
    },
    {
        skill: "Jupyter",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
    },
    {
        skill: "Pygame",
        image: "pygame.png",
    }
]

const Skills = () => {
  return ( 
    <div id="skills">
        <Layout>
            <h2>SKILLS</h2>
            <div className={styles.container}>
                <div className={styles.languages}>
                    <HexagonGrid list={languages}/> 
                    <br />
                    <a className={styles.header}>LANGUAGES</a>
                </div>
                <div className={styles.tech}>
                    <a className={styles.header} style={{marginLeft: "20%"}}>TOOLS</a>
                    <HexagonGrid list={tools}/> 
                </div>
            </div>
        </Layout>
    </div>
   );
}
 
export default Skills;