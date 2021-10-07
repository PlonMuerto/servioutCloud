import Head from 'next/head'

//components
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar'
import ViewService from '../../components/services/viewService';

//css
import styles from '../../styles/Services.module.css'

//data services
import services from '../../data/services';


export default function Home({telecom,construccion,mudanza}) {
  
  return (
    <div id={styles.body}>
      
      <Head>
        <meta charset="utf-8"/>
        <meta name="keywords" content="servicios, nuestros servicios, bogota servicios, servicios construccion, servicios telecomunicaciones, servicios mudanzas, mudanzas, mudanzas bogota" />
        <meta name="description" content="Todos nuestros servicios para ofrecer"/>
        <title>Servicios</title>
        <meta httpEquiv="expires" content="23200"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="DiosPlon" />
        <meta name="copyright" content="CannibalCommunity es dueña de esta patente y todo este diseño" />
        <meta name="robots" content="index"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.serviciosContainer}>
        

        <section className={styles.services}>
          <h4 className={styles.subtitle}>Construccíon</h4>
          
          {
            (construccion && construccion.length)
            &&
            construccion.map((service,key)=><ViewService key={key} type="construccion" {...service} />)
          }
          
        </section>

        <section className={styles.services}>
          <h4 className={styles.subtitle}>TeleComunicaciones</h4>

          {
            (telecom && telecom.length)
            &&
            telecom.map((service,key)=><ViewService key={key} type="telecomunicaciones" {...service} />)
          }

        </section>

        <section className={styles.services}>

          <h4 className={styles.subtitle}>Mudanzas</h4>

          {
            (mudanza && mudanza.length)
            &&
            mudanza.map((service,key)=><ViewService key={key} type="mudanza" {...service} />)
          }

        </section>

        <Footer/>
        
      </main>
      
    </div>
  )
}

export async function getStaticProps(){
  return {
    props:{
      telecom:services.ServicesTelec,
      construccion:services.ServicesConst,
      mudanza:services.ServicesMud    
    }
  }
}
