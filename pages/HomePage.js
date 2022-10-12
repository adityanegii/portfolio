import styles from '../styles/Home.module.css'
import CurvedTop from '../components/assets/CurvedTop'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <div id="home" style={{background:"#03243a"}}>
      <div className={styles.filler}>gasdfasdf</div>
      <Layout>
        <CurvedTop />
        <div className={styles.container} style={{color:"#e5eaf5"}}>
          <div>
            <a style = {{fontSize: "max(6vh, 1.45rem)"}}>Hey, I'm </a>
            <span>Aditya Negi</span>
            <p>I'm a software engineering student at McGill University.</p>
              
            <a href="https://github.com/adityanegii" target="_blank" className={styles.github}><img src="Github_L.png" alt="Italian Trulli"/></a>
            <a href="https://www.linkedin.com/in/negi-aditya/" target="_blank" className={styles.linkdin}><img src="Linkdin.png" alt="Italian Trulli"/></a>
            <br />
            <br />
            <a href="/Aditya_CV.pdf" download="Aditya_CV.pdf">
              <button className={styles.button}>
                Download my CV
              </button>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
