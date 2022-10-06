import styles from '../styles/ContactMe.module.css'
import Layout from '../components/Layout';
// For each div containing a hex grid, change length to (129*lengthOfArray/2)
const ContactMe  = () => {
  return ( 
    <div id="contactMe">
      <Layout style={{paddingBottom:"50px"}}>
        <div className={styles.container} id="contactMe">
            <form className={styles.form}>
                <h3>GET IN TOUCH</h3>
                <input type="text" id="name" placeholder="Your Name" required></input>
                <input type="email" id="email" placeholder="Email Address" required></input>
                <textarea id="message" rows="10" placeholder="How can I help you?" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
      </Layout>
    </div>
   );
}
 
export default ContactMe;