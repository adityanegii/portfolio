import styles from '../styles/SkillsPage.module.css'
import HexagonGrid from '../components/assets/HexagonGrid'
import Layout from '../components/Layout'
const languages = [
  {
      id: "1",
      skill: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
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
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
      id: "8",
      skill: "PostgreSQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
  },
  {
      id: "9",
      skill: "Bash",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
  }
]
const tools = [
    {
        id: "1",
        skill: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
    },
    {
        id: "2",
        skill: "React.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
        id: "3",
        skill: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        id: "4",
        skill: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        id: "5",
        skill: "Express.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
    },
    {
        id: "6",
        skill: "Pandas",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
      
    },
    {
        id: "7",
        skill: "Numpy",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
    },
    {
        id: "8",
        skill: "Visual Studio Code",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        id: "9",
        skill: "UML",
        image: "umple.png",
    },
    {
        id: "10",
        skill: "Jupyter",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
    },
    {
        id: "12",
        skill: "Pygame",
        image: "pygame.png",
    },
    {
        id: "13",
        skill: "MaterialUi",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
        id: "14",
        skill: "SpringBoot",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
    },
    {
        id: "15",
        skill: "Vim",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg"
    }
]

const Skills = () => {
  return ( 
    <div id="skills" className={styles.skills}>
        <Layout>
            <h2 className={styles.title} style={{textAlign:"center", marginBottom:"4vh"}}>SKILLS</h2>
            <div className={styles.container}>
                <div className={styles.languages}>
                    <HexagonGrid list={languages}/> 
                    <br/>
                    <a className={styles.header_lang}>LANGUAGES</a>
                </div>
                <div className={styles.tech}>
                    <a className={styles.header_tool} style={{marginLeft: "25%"}}>LIBRARIES</a>
                    <br></br>
                    <a className={styles.header_tool} style={{marginLeft: "25%"}}>& FRAMEWORKS</a>
                    <HexagonGrid list={tools}/> 
                </div>
            </div>
        </Layout>
    </div>
   );
}
 
export default Skills;

