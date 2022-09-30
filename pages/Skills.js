import styles from '../styles/SkillsPage.module.css'
import FlipCard from '../components/assets/FlipCard';
const languages = [
    {
        id: "1",
        skill: "Python",
        image: "devicon-python-plain-wordmark colored"
    },
    {
        id: "2",
        skill: "Java",
        image: "devicon-java-plain-wordmark colored"
    },
    {
        id: "3",
        skill: "C",
        image: "devicon-c-plain-wordmark colored"
    },
    {
        id: "4",
        skill: "HTML",
        image: "devicon-html5-plain-wordmark colored"
    },
    {
        id: "5",
        skill: "CSS",
        image: "devicon-css3-plain-wordmark colored"
    },
    {
        id: "7",
        skill: "JavaScript",
        image: "devicon-javascript-plain colored"
    },
    {
        id: "8",
        skill: "SQLite",
        image: "devicon-sqlite-plain-wordmark"
    }
]
const tools = [
    {
        id: "1",
        skill: "GitHub",
        image: "devicon-github-original-wordmark"
    },
    {
        id: "2.js",
        skill: "React.js",
        image: "devicon-react-original-wordmark colored"
    },
    {
        id: "Next.js",
        image: "devicon-nextjs-plain colored"
    },
    {
        id: "Node.js",
        image: "devicon-nodejs-plain-wordmark colored"
    },
    {
        id: "Pandas",
        image: "devicon-pandas-original-wordmark"
    },
    {
        id: "Numpy",
        image: "devicon-numpy-original-wordmark colored"
    },
    {
        id: "Visual Studio Code",
        image: "devicon-vscode-plain-wordmark colored"
    },
    {
        id: "UML",
        image: "umple.png",
        type: "image"
    },
    {
        id: "Jupyter",
        image: "devicon-jupyter-plain-wordmark colored"
    },
    {
        id: "Pygame",
        image: "pygame.png",
        type: "image"
    }
]

const Skills = () => {
  return ( 
    <>
      <div className={styles.row}>
        <div className={styles.column}>
        <section className={styles.container}>
          <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={4}>Languages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i class="devicon-python-plain-wordmark colored"></i></td>
                        <td><i class="devicon-java-plain-wordmark colored"></i></td>
                        <td><i class="devicon-c-plain-wordmark colored"></i></td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>Java</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td><i class="devicon-html5-plain-wordmark colored"></i></td>
                        <td><i class="devicon-css3-plain-wordmark colored"></i></td>
                        <td><i class="devicon-javascript-plain colored"></i></td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>CSS</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td><i class="devicon-sqlite-plain-wordmark"></i></td>
                    </tr>
                    <tr>
                        <td>SQLite</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </section>
        </div>
        <div className={styles.column}>
          <section className={styles.container}>
            <div>
              <table>
                  <thead>
                      <tr>
                          <th colSpan={4}>Tools and Technologies</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><i class="devicon-github-original-wordmark"></i></td>
                          <td><i class="devicon-react-original-wordmark colored"></i></td>
                          <td><i class="devicon-nextjs-plain colored"></i></td>
                          <td><i class="devicon-nodejs-plain-wordmark colored"></i></td>
                      </tr>
                      <tr>
                          <td>GitHub</td>
                          <td>React.js</td>
                          <td>Next.js</td>
                          <td>Node.js</td>
                      </tr>
                      <tr>
                          <td><i class="devicon-pandas-original-wordmark"></i></td>
                          <td><i class="devicon-vscode-plain-wordmark colored"></i></td>
                          <td><img src="umple.png" alt="Italian Trulli" className={styles.umple}/></td>
                          <td><i class="devicon-numpy-original-wordmark colored"></i></td>
                      </tr>
                      <tr>
                          <td>Pandas</td>
                          <td>Visual Studio Code</td>
                          <td>UML</td>
                          <td>Numpy</td>
                      </tr>
                      <tr>
                          <td><i class="devicon-jupyter-plain-wordmark colored"></i></td>
                          <td colSpan={3}><img src="pygame.png" alt="Italian Trulli" className={styles.pygame}/></td>
                      </tr>
                      <tr>
                          <td>Jupyter</td>
                          <td colSpan={3}>Pygame</td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
   );
}
 
export default Skills;