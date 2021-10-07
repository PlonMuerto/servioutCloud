import Head from 'next/head'
import Link from 'next/link';

//components
import Navbar from '../layout/navbar'
import Carousel from '../components/carousel/carrouselImages'
import Footer from '../layout/footer';


//css
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import TimerIcon from '@material-ui/icons/Timer';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import styles from '../styles/Home.module.css'

const slides = ["https://res.cloudinary.com/handelcorp/image/upload/v1633647437/serviout/243365929_462987368215993_8673408298028831713_n_bypegp.gif","https://res.cloudinary.com/handelcorp/image/upload/v1633647715/serviout/244429435_343061970930212_5265718064868859633_n_o3zfhm.jpg","https://res.cloudinary.com/handelcorp/image/upload/v1633102049/serviout/inicio2_sr97ny.jpg"];

export default function Home() {
  return (
    <div id={styles.body}>
      <Head>
        <title>Servi O.u.t</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8"/>
        <meta name="robots" content="index"/>
        <meta httpEquiv="expires" content="23200"/>
        <meta name="author" content="DiosPlon" />
        <meta name="copyright" content="CannibalCommunity es dueña de esta patente y todo este diseño" />
        <meta name="keywords" content="servicios, construccion, construccion bogota, mudanzas, mudanzas bogota, serviout,contratistas"/>
        <meta name="description" content="Pagina de Servicios de Construccion, Telecomunicaciones y Mudansas, presentacion como empresa y de nuestros servicios"/>
      </Head>
      <Navbar/>
    
      <section className={styles.presentacion}>
        <div className={styles.background}>

        </div>
        <h3 className={styles.subtitle}>¿Por qué deberías escoger nuestros servicios?</h3>
        <p className={styles.content}>
          Sabemos los requerimientos y necesidades  de nuestros clientes por este motivo, contamos con  un personal idóneo para la ejecución en la variedad de servicios que tenemos , cumpliendo con los precios y tiempos establecidos por el cliente y la empresa , utilizando los materiales con más alta calidad del mercado.
        </p>
      </section>
      
      <section className={styles.quality}>
        <div className={styles.section}>
          
          <span><SentimentVerySatisfiedIcon className={styles.icon}/></span>
          <span className={styles.title}>CALIDAD</span>
          <span className={styles.desc}>Gracias a que nuestros colaboradores se destacan en cada una de sus áreas, cada uno de nuestros servicios se ejecutan de la mejor manera.</span>
        </div>
        <div className={styles.section}>
          <span><TimerIcon className={styles.icon}/></span>
          <span className={styles.title}>TIEMPOS</span>
          <span className={styles.desc}>Conocemos la importancia de este factor en la elaboración de un servicio, por este motivo cumplimos con las fechas establecidas en los contratos para un excelente servicio.</span>

        </div>
        <div className={styles.section}>
          <span><AttachMoneyIcon className={styles.icon} /></span>
          <span className={styles.title}>PRECIOS</span>
          <span className={styles.desc}>Cada uno de nuestros clientes es especial, esto   nos conlleva a tener precios personalizados según sus requerimientos</span>
        </div>
      </section>

      
      <div className={styles.carousel}>
        <Carousel images={slides}/>
      </div>
      


      <div className={styles.services}>
        <h4 className={styles.title}>Nuestros Servicios</h4>
        <div className={styles.servicesContainer}>
          <ul className={styles.service}>
            <li className={styles.subservice}>Construccion</li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Construcción de Proyectos","construccion"]}}}><a>Construcción de Proyectos</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Remodelacion de Interiores y Exteriores","construccion"]}}}><a>Remodelacion de Interiores y Exteriores</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Carpinteria","construccion"]}}}><a>Carpinteria</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Plomeria","construccion"]}}}><a>Plomeria</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Ornamentacion","construccion"]}}}><a>Ornamentacion</a></Link></li>
          </ul>
          <ul className={styles.service}>
            <li className={styles.subservice}>TELECOMUNICACIONES</li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Camaras de Seguridad","telecomunicaciones"]}}}><a>Camaras de Seguridad (CIRCUITOS CCTV)</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Deteccion de Incendios","telecomunicaciones"]}}}><a>Detección de Incendios</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Controles de Accesos","telecomunicaciones"]}}}><a>Controles de accesos</a></Link></li>
          </ul>
          <ul className={styles.service}>
            <li className={styles.subservice}>Mudanzas</li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Mudanza S","mudanza"]}}}><a>Transporte Pequeño</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Mudanza M","mudanza"]}}}><a>Transporte Mediano</a></Link></li>
            <li className={styles.subservice}><Link href={{pathname:"/servicios/[...name]",query:{name:["Mudanza L","mudanza"]}}}><a>Transporte Grande</a></Link></li>
          </ul>
        </div>
        
      </div>

      <Footer />
    
    </div>
  )
}
