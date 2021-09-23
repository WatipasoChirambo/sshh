import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'
import VReplacement from '../public/replacement.png'
import service from '../public/services.png'
import recovery from '../public/towtruck.png'
import Head from 'next/head'

function services() {
    return (
<>
    <Head>
        <title>First Car Hire | Services</title>
        <meta name="keywords" content="FCH"/>
    </Head>
    <div className={styles.service_heading}>
      <h2>Our Services</h2>
      <Image src={service}/>
    </div>
    <div className={styles.wrapper}>
    <div className={styles.right_side}>
        <div>
            <h5>Vehicle Replacement</h5>
            <div className={styles.right_side_img}>
                <Image src={VReplacement} alt="Vehicle recovery"/>
            </div>
            <div>
                <p className={styles.right_side_p}>
                    We will arrange for your vehicle to be recovered using specialist equipment from the location of your accident. 
                    we also arrange vehicle storage in a safe location while awaiting repairs.
                </p>
            </div>
        </div>
    </div>
    <div className={styles.right_side}>
            <div>
                <h5>Vehicle Recovery & Storage</h5>
                <div className={styles.right_side_img}>
                    <Image src={recovery} alt="Vehicle recovery"/>
                </div>
                <div>
                    <p className={styles.right_side_p}>
                        We will arrange for your vehicle to be recovered using specialist equipment from the location of your accident. 
                        we also arrange vehicle storage in a safe location while awaiting repairs.
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default services;
