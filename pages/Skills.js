import styles from '../styles/SkillsPage.module.css'
import FlipCard from '../components/assets/FlipCard';
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