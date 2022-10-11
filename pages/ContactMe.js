import styles from '../styles/ContactMe.module.css';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com'
import Layout from '../components/Layout';

const ContactMe  = ( {s, t, p} ) => {

    function sendEmail(e) {
        console.log(s)
        e.preventDefault();
        // emailjs.sendForm('service_v7uqc8f', 'template_8niwv1a', e.target, 'kanbu4SFOglNx0zLY')
        emailjs.sendForm(s, t, e.target, p)
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
                    <textarea name="message" rows="10" placeholder="How can I help you?" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </Layout>
            <Footer />
        </div>
    );
}

export default ContactMe;

