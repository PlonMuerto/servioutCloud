import Link from 'next/link';
import {useState} from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Close } from '@material-ui/icons';
import styles from '../styles/layout/redes.module.css'

export default function RedesSociales(){
    const [toggle,setToggle] =useState(true);

    const changeRed = function(){
        setToggle(t=>!t);
    }

    return(
        <div  id={toggle ? styles.closeredes : styles.redes}>
            <div className={styles.container}>
                <Link href="https://www.facebook.com/Servi-Out-102844281668619/">
                    <a target="_blank"><FacebookIcon className={styles.social} /></a>
                </Link>
                <Link href="https://www.instagram.com/servi_o.u.t/">
                    <a target="_blank"><InstagramIcon className={styles.social} /></a>
                </Link>
                <Link href="https://wa.me/573117988916">
                    <a target="_blank"><WhatsAppIcon className={styles.social} /></a>
                </Link>
            </div>
            <span className={styles.close} onClick={changeRed}>
                <Close />
            </span>
        </div>
    ) 
}