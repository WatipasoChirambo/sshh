import Image from 'next/image';
import cars from '../../data/Cars.json';
import { useState } from 'react';
import styles from '../../styles/Car.module.css';
import Contact from '../components/contact';

const basePath = '/images';


export async function getStaticPaths(){
    const paths = cars.map(car =>({
        params:{car: car.title}
    }))
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}){
    const car = cars.find(car=> car.title === params.car)
    return { props: { car }}
}

export default function Car({car}){
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        const data = {
            name,
            vehicle,
            message,
        };
        fetch('../api/contact',{
            method:'post',
            body:JSON.stringify(data)
        })
    };

    return(
        <div style={{marginBottom: 100, marginTop: 50, }}>
            <div className={styles.wrapper}>
                <div className={styles.unset_img}>
                    <Image src={`${basePath}/${car.img}`} alt={car.title} layout="fill" className={styles.custom_img}/>
                </div>
                <div className={styles.info}>
                    <Contact/>
                </div>
            </div>
        </div>
    )
}