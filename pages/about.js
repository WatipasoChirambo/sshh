import Head from "next/head";
import Us from '../public/us.svg';
import Mission from '../public/mission.svg';
import Vision from '../public/vision.svg';
import Values from '../public/values.svg';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import Why from '../public/why.png';

const About = () => {
    return (
        <>
        <Head>
        <title>First Car Hire | About </title>
        <meta name="keywords" content="Atemeje"/>
        </Head>

        <div className={styles.wrapper}>
        <h4 style={{textAlign: 'center', color: '#FEA501',marginBottom:'3%'}}>ABOUT US</h4>
        <div className={styles.mid_section}>
          <div className={styles.vision}>
          <h4 style={{ textAlign: 'center' }}>Vision</h4>
              <p>
                <Image src={Vision} alt="about us" style={{textAlign: 'center'}}/>
              </p>
              <p>
                To be the premier and preferred rental company on the Malawi car hire market and offer services beyond our clients expectations and demand, 
                while delivering measurable results.
              </p>
          </div>
          <div className={styles.mission}>
              <h4 style={{ textAlign: 'center' }}>Mission</h4>
              <p>
                <Image src={Mission} alt="about us" style={{textAlign: 'center'}}/>
              </p>
              <p>
                To stipulate the necessary reinforcement through provision of good cars, and dedicated employees 
                that is sensitive and responsive to the needs of clients and promote quality of service to enhance 
                competitiveness.
              </p>
          </div>
          <div className={styles.values}>
            <h4 style={{ textAlign: 'center' }}>Values</h4>
            <p>
              <Image src={Values} alt="about us" style={{textAlign: 'center'}}/>
            </p>
                <ul className={styles.ListOfValues}>
                  <li>
                    We are committed to providing value to our corporate clients and individual clients
                  </li>
                  <li>
                    We are a customer focused
                  </li>
                  <li>
                    We value a culture of open communications and a spirit of teamwork with our clients.
                  </li>
                </ul>
          </div>
          </div>
          <div>
        <div>
          <div className={styles.who_we_are}>
          <div>
              <Image src={Us} alt="about us" style={{textAlign: 'center'}}/>
          </div>
          <div className={styles.who_we_are_left}>
              <p>
                <h3 style={{color: 'black'}}>First Car Hire</h3> offer&apos;s one of the practical car rental choices for Non-Governmental organisation, tourists, businessmen and locals who want to visit and explore the whole of Malawi. 
                We are a home grown Car Rental company. We are one of the leading Car Rental in Malawi. 
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default About;