import Link from "next/link";

//css
import styles from '../styles/layout/footer.module.css';
export default function Footer(){

    return(
        <footer id={styles.Footer}>
            <div className={styles.data}>
                <h6 className={styles.title}>Construcciones</h6>
                
                <ul className={styles.services}>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Construcción de Proyectos","construccion"]}}}><a>Construcción de Proyectos</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Remodelacion de Interiores y Exteriores","construccion"]}}}><a>Remodelacion de Interiores y Exteriores</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Carpinteria","construccion"]}}}><a>Carpinteria</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Plomeria","construccion"]}}}><a>Plomeria</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Ornamentacion","construccion"]}}}><a>Ornamentacion</a></Link></li>
                    
                </ul>
                
            </div>
            <div className={styles.data}>
                <h6 className={styles.title}>Telecomunicaciones</h6>
                
                <ul className={styles.services}>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Camaras de Seguridad","telecomunicaciones"]}}}><a>Camaras de Seguridad (CIRCUITOS CCTV)</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Deteccion de Incendios","telecomunicaciones"]}}}><a>Detección de Incendios</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Controles de Accesos","telecomunicaciones"]}}}><a>Controles de accesos</a></Link></li>
                </ul>
                
            </div>
            <div className={styles.data}>
                <h6 className={styles.title}>Mudanzas</h6>
                
                <ul className={styles.services}>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Mudanza S","mudanza"]}}}><a>Transporte Pequeño</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Mudanza M","mudanza"]}}}><a>Transporte Mediano</a></Link></li>
                    <li className={styles.service}><Link href={{pathname:"/servicios/[...name]",query:{name:["Mudanza L","mudanza"]}}}><a>Transporte Grande</a></Link></li>
                </ul>
                
            </div>
            <div className={styles.data}>
                <h6 className={styles.title}>Nosotros</h6>
                
                <ul className={styles.services}>
                    <li className={styles.service}><Link href="/empresa"><a>Terminos y Condiciones</a></Link></li>
                    <li className={styles.service}><Link href="/empresa"><a>Empresa</a></Link></li>
                </ul>
                
            </div>
            
            <div className={styles.data}>
                
                <span className={styles.button}><Link href="/contacto"><a>Contactanos</a></Link></span>        
                
            </div>

        </footer>
        
    )
}