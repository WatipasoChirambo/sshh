import React from 'react';
import styles from '../styles/Terms.module.css'
import terms from '../public/terms.svg'
import Image from 'next/image';

function Terms() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h4>Terms and Policies</h4>
                <div style={{ textAlign: 'center', marginBottom:'5%'}}>
                    <Image src={terms} alt="about us"/>
                </div>
                <div style={{ justifyContent: 'left', marginBottom:'5%'}}>
                    <ul>
                        <li>
                            Vehicles shall be hired from our offices and delivered to the client.
                        </li>
                        <li>
                            Vehicles are provided with comprehensive insurance and fuel full tank.
                        </li>
                        <li>
                            Similarly a client is required to return the vehicles with a full tank fuel or pay the cost of the difference.
                        </li>
                        <li>
                            The rates are subject to change within the contract period due to economic movements and other factors affecting prices of goods and services in the economy.
                        </li>
                        <li>
                            First Can Hire requires payment within 7 days of invoice either by cheque or bank credit transfer where First Car Hire issues a receipt upon receiving a cheque or verification with the bank of a credit transfer.
                        </li>
                        <li>
                            For short term hiring, invoices are issued upon returning the vehicle.
                        </li>
                        <li>
                            For longterm contracts invoices are issued on a monthly basis.
                        </li>
                    </ul>
                </div>    
            </div>
        </div>
    )
}

export default Terms
