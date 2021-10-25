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
                    <a target="_blank" className={"social face"}><FacebookIcon  /></a>
                </Link>
                <Link href="https://www.instagram.com/serviout_/">
                    <a target="_blank" className={"social inst"}><InstagramIcon  /></a>
                </Link>
                <Link href="https://wa.me/573117988916">
                    <a target="_blank" className="social what"><WhatsAppIcon  /></a>
                </Link>
            </div>
            
            <span className={styles.close} onClick={changeRed}>
                <Close />
            </span>
            <style jsx>{`
                            .social{ 
                                padding: 5px;
                                margin-bottom: 4px;
                                width: 45px;
                                height: 45px;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                background-color: crimson;
                                border-radius: 100%;
                                font-size:var(--font-redes);
                                color:rgb(255, 255, 255);
                                transition: all 500ms ease;
                            }
                .face:hover{
                    color:#1651EE;
                    cursor:pointer;
                }
                .inst:hover{
                    color:#6A19F9;
                    cursor:pointer;
                }
                .what:hover{
                    color:#15F22E;
                    cursor:pointer;
                }
            `}</style>
        </div>
    ) 
}