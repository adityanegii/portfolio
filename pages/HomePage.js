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
            <a style = {{fontSize: "max(6vh, 1.45rem)"}}>Hey, I&apos;m </a>
            <span>Aditya Negi</span>
            <p>I&apos;m a software engineering student at McGill University.</p>
              
            <a href="https://github.com/adityanegii" target="_blank" rel="noreferrer" className={styles.github}>
              <picture>
                <img src="Github_L.png" alt="Italian Trulli"/>
              </picture>
            </a>
            <a href="https://www.linkedin.com/in/negi-aditya/" target="_blank" rel="noreferrer" className={styles.linkdin}>
              <picture>
                <img src="Linkdin.png" alt="Italian Trulli"/>
              </picture>
            </a>
            <br />
            <br />
            <a href="/AdityaCV.pdf" download="Aditya_CV.pdf">
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
