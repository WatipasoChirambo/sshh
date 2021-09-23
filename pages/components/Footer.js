import Link from 'next/link'
import styles from '../../styles/footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h3>Location</h3>
                    <span>
                        Keza Office Park <br></br>
                    </span>
                    <span>
                        Block 3<br></br>
                    </span>
                    <span>
                        East Wing<br></br>
                    </span>
                    <span>
                        CNR Chipembere Highway<br></br>
                    </span>
                    <span>
                        Moi Road<br></br>
                    </span>
                    <span>
                        Blantyre Malawi<br></br>
                    </span>
                    <span>
                        P.O. Box 5660 Limbe<br></br>
                    </span>
                </div>
                <div className={styles.right}>
                    <div>
                        <h3 style={{color:'white', marginBottom:'1%'}}>Contacts</h3>
                    </div>
                    <span>
                        +265 888 814 777<br></br>
                    </span>
                    <span>
                        +265 212 814 777<br></br>
                    </span>
                    <span>
                        firstcarhiremalawi@outlook.com
                    </span>
                </div>
            </div>
            <span style={{color:'white', marginBottom:'1%'}}>Copyright 2021 First Car Hire</span>
        </footer>
     );
}
 
export default Footer;