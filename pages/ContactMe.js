import styles from '../styles/ContactMe.module.css';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com'
import Layout from '../components/Layout';
import Popup from '../components/assets/Popup';
import { useState } from 'react';

const ContactMe  = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    function sendEmail(e) {
        setButtonPopup(true)
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return ( 
        <div className={styles.main} style={{background: "#E4EAF5"}}>
            <Layout >
                <div className={styles.container} id="contactMe">
                    <form className={styles.form} onSubmit={sendEmail}>
                        <h3>GET IN TOUCH</h3>
                        <input name="name" type="text" placeholder="Your Name" required></input>
                        <input name="email" type="email" placeholder="Email Address" required></input>
                        <textarea name="message" rows="10" placeholder="Send me a message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <Footer />
            </Layout>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
    );
}

export default ContactMe;

