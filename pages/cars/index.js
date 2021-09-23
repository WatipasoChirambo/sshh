import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../../styles/Cars.module.css';
import cars from '../../data/Cars.json';

const basePath = '/images';



function Index() {
  return (
    <>
    <Head>
        <title>First Car Hire | Vehicles</title>
        <meta name="keywords" content="FCH"/>
    </Head>
      <div className={styles.hire}>
        <h5>Vehicles To Hire</h5>
        <span>See our 
        <Link href='/terms' passHref>
          <button className={styles.terms}>
            Terms and conditions
          </button>
        </Link> before hiring for more details.</span>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {cars.map(car=>(
            <div className={styles.vehicle} key={car.id}>
              <div class="w-805 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <h5 style={{textAlign: 'center' , color:'#FEA501' }}>{car.title}</h5>
                <div className={styles.unset_img}>
                    <Image  src={`${basePath}/${car.img}`} alt={car.title} layout="fill" className={styles.custom_img}/>
                </div>
              </div>
              <div className={styles.description}>
                <h5><b>Description</b></h5>
                <span><b>Price: </b>{car.price}</span><br></br>
                <span><b>Seats: </b>{car.Seats}</span><br></br>
                <span><b>Engine: </b>{car.Engine}</span><br></br>
                <div className={styles.hire_btn}>
                  <Link href={`cars/${car.title}`}>
                    <a>Hire</a>
                  </Link>
                </div>
              </div>
            </div>
           ))}
        </div>
      </div>
    </>
  );
}
export default Index;