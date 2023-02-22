import styles from '../styles/SkillsPage.module.css'
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
      skill: "Bash",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
  },
  {
      id: "9",
      skill: "ARM Assembly",
      image: ""
  },
  {
      id: "10",
      skill: "SQL",
      image: ""
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
        skill: "Visual Studio Code",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        id: "3",
        skill: "UML",
        image: "umple.png",
    },
    {
        id: "4",
        skill: "Jupyter",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"
    },
    {
        id: "5",
        skill: "Vim",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg"
    },
    {
        id: "6",
        skill: "PostgreSQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
    },
    {
        id: "7",
        skill: "REST Architecture",
        image: ""
    },
    {
        id: "8",
        skill: "Database Design",
        image: ""
    },
    {
        id: "9",
        skill: "Linux",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg"
    }
]
const libs = [
    {
        id: "1",
        skill: "React.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
        id: "2",
        skill: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        id: "3",
        skill: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        id: "4",
        skill: "Pandas",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
      
    },
    {
        id: "5",
        skill: "Numpy",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
    },
    {
        id: "6",
        skill: "Pygame",
        image: "pygame.png",
    },
    {
        id: "7",
        skill: "SpringBoot",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
    },
    {
        id: "8",
        skill: "Express.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    }
]
const Skills = () => {
  return ( 
    <div id="skills" className={styles.skills}>
        <Layout>
            <h2 className={styles.title}>SKILLS</h2>
            <div className={styles.container}>
                <div className={styles.cardLang}>
                    <h3>LANGUAGES</h3>
                    {languages.map((e) => (
                        <div key={e.id}>
                        {e.skill}
                        </div>
                    ))}
                </div>

                <div className={styles.cardLibs}>
                    <h3>LIBRARIES & FRAMEWORKS</h3>
                    {libs.map((e) => (
                        <div key={e.id}>
                        {e.skill}
                        </div>
                    ))}
                </div>

                <div className={styles.cardOther}>
                    <h3>OTHER TECHNOLOGIES</h3>
                    {tools.map((e) => (
                        <div key={e.id}>
                        {e.skill}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    </div>
   );
}
 
export default Skills;

