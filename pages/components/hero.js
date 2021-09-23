import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../public/image.jpg';
import styles from '../../styles/Hero.module.css';
import Card from 'react-bootstrap/Card';

function Hero() {
    const route = useRouter()

    return (
        <div className="w-full">
            <div className={styles.jumbotron}>
                <div className="flex w-full h-full bg-gray-900 bg-opacity-50">
                    <div className={styles.text}>
                        <h2 className="text-white">
                            Fresh Out Of The Farm <br></br>
                            <span className="text-green-700">
                                Produce
                            </span>
                        </h2>
                        <p className="text-gray-300">
                            Quality Farm Produce <span className="text-green-700">&</span> Affordable Locomotive Services 
                        </p>
                            
                        <button onClick={()=>route.push('/cars')} type="button" className="bg-green-500 text-white px-6 py-2 font-medium hover:bg-green-600 transition duration-200 each-in-out">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
