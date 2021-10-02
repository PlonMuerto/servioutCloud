import React from "react";

import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

//components
import RedesSociales from "./redesSociales";

import styles from '../styles/layout/navbar.module.css'

export default function NavBar(){
    const router = useRouter()

    const goIndex = function(){
        router.push("/");
    }

    return(
        <div id={styles.navbar}>
            <RedesSociales />
            
            <Image
                src={"https://res.cloudinary.com/handelcorp/image/upload/v1633102213/serviout/logo_orqou9.png"}
                alt="Picture of the author"
                width={180}
                height={45}
                onClick={goIndex}
            />     
            
            
            <nav className={styles.navegacion}>
                <Link href="/servicios">
                    <a className={styles.link} id={(router.route === "/servicios" || router.route === "/servicios/[...name]") ? "actived" : ""} >Servicios</a>
                </Link>
                <span className={styles.line} >|</span>
                <Link href="/empresa">
                    <a className={styles.link} id={router.route === "/empresa" ? "actived" : ""}>Empresa</a>
                </Link>
                <span className={styles.line}>|</span>
                <Link href="/contacto">
                    <a className={styles.link} id={router.route === "/contacto" ? "actived" : ""}>Contactos</a>
                </Link>
            </nav>

            <style jsx>
                {
                    `
                    #actived{
                        color: #222;
                    }
                    `
                }
            </style>
        </div>
        
    )
}