import {useState} from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

//css
import { styled,alpha } from '@material-ui/core';
import { Button,TextField,MenuItem } from '@material-ui/core'
import styles from '../styles/Contact.module.css'

//components
import Footer from '../layout/footer';
import Navbar from '../layout/navbar'

const currencies = [
  {
    label:"Construccion de Proyectos",
    value:"Construccion de Proyectos"
  },
  {
    label:"Remodelacion de Interiores y Exteriores",
    value:"Remodelacion de Interiores y Exteriores"
  },
  {
    label:"Carpinteria",
    value:"Carpinteria"
  },
  {
    label:"Plomeria",
    value:"Plomeria"
  },
  {
    label:"Ornamentacion",
    value:"Ornamentacion"
  },
  {
    label:"Camaras de Seguridad",
    value:"Camaras de Seguridad"
  },
  {
    label:"Deteccion de Incendios",
    value:"Deteccion de Incendios"
  },
  {
    label:"Controles de Accesos",
    value:"Controles de Accesos"
  },
  {
    label:"Desarrollo de Sistemas",
    value:"Desarrollo de Sistemas"
  },
  {
    label:"Mudanza S",
    value:"Mudanza S"
  },
  {
    label:"Mudanza M",
    value:"Mudanza M"
  },
  {
    label:"Mudanza L",
    value:"Mudanza L"
  }
];

const CustomTextField = styled((props) => (
  <TextField InputLabelProps={{style: { color: '#777',fontSize:"18px" }}} InputProps={{ disableUnderline: true }} {...props}  />
))(({ theme }) => ({
  
  '& .MuiFilledInput-root': {
    minWidth:"200px",
    color:'#7a7a71',
    border: '1px solid #7a7a71',
    overflow: 'hidden',
    
    borderRadius: 4,
    fontSize:"15px",
    
    margin:"5px 0px 0 0",
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `#7a7a71 0 0 0 2px`,
      borderColor: "#7a7a71",
    }
    
  }
}));

const ColorButton = styled(Button)(() => ({
  color: "#222",
  marginTop:"10px",
  backgroundColor: "#eee",
  '&:hover': {
    backgroundColor: "crimson",
  },
}));

export default function Contacto() {


  
  const router = useRouter();

  const [currency,setCurrency] = useState(router.query.service ? router.query.service :"camaras");
  const [message,setMessage] = useState();
  const [errors,setErrors] = useState({
    name:false,
    email:false,
    phone:false,
    message:false
  });

  const sendReq = async function(e){
    e.preventDefault();
    
    setErrors({
      name:false,
      email:false,
      phone:false,
      message:false
    })

    const { name,email,phone,message} = e.currentTarget;

    if(!name.value || name.value.length < 2){
      
      setErrors(s=>{
        return{
          ...s,
          name:true
        }
      })
      return
    }

    if(!email.value || email.value.length < 10){
      setErrors(s=>{
        return{
          ...s,
          email:true
        }
      })
      return
    }

    if(!phone.value){

      let largo = phone.value.toString().split("").length;
      if(largo===10){
          return
      }
      setErrors(s=>{
        return{
          ...s,
          phone:true
        }
      })
      
    }

    if(!message.value){
      setErrors(s=>{
        return{
          ...s,
          message:true
        }
      })
      return
    }

    const pedido = {
      message:message.value,
      name:name.value,
      email:email.value,
      phone:phone.value,
      service:currency,
    }

    let res = await fetch("api/mails",{
      method:"POST",
      body:JSON.stringify(pedido)
    });

    let data = await res.json();

    console.log("sadd");

    console.log(data);

    if(data.err){
      console.log(JSON.parse(data.err))
    }

    
  }
  
  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  return (
    <div id={styles.body}>
      <Head>
        <meta charset="utf-8"/>
        <title>Contacto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="DiosPlon" />
        <meta httpEquiv="expires" content="23200"/>
        <meta name="robots" content="index"/>
        <meta name="copyright" content="CannibalCommunity es dueña de esta patente y todo este diseño" />
        <meta name="description" content="Pagina de Contacto, para cotizar servicios a nuestra empresa"/>
        <meta name="keywords" content="contratar contructor, contratar mudanza, instalar redes, profecionales en instalacion, instalaciones bogota" />
      </Head>
      <Navbar/>

      <main className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.info}>
            <h4 className={styles.title}>Contáctanos</h4>
            <div className={styles.data}>
              <p className={styles.subtitle}>Póngase en contacto con nosotros a través de nuestras redes sociales </p>
              <p>Contactanos: <span className={styles.subtitle}>+57 311 798 8916</span> </p>
              <p>Dirección: <span className={styles.subtitle}>Calle 69b 105-80</span> </p>
              
            </div>
          </div>
          

          
          <form className={styles.contactForm} onSubmit={sendReq}  >
              
              <CustomTextField
                required
                error={errors.name}
                name="name"
                id="name"
                label="Nombre"
                helperText={errors.name && "agrege su Nombre"}
                type="text"
                variant="filled"
              />
              
              <CustomTextField
                required
                error={errors.email}
                name="email"
                id="email"
                label="Email"
                helperText={errors.email &&"agrege su Email"}
                type="email"
                variant="filled"
              />
              
              <CustomTextField
                required
                type="tel"
                error={errors.phone}
                helperText={errors.phone &&  "agrege su numero de Telefono"}
                id="phone" 
                name="phone" 
                label="Numero"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                variant="filled"
              />
              

              <CustomTextField
                id="outlined-select-currency"
                select
                name="services"
                label="Servicio"
                value={currency}
                onChange={handleChange}
                variant="filled"
                
                >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomTextField>
              
              <CustomTextField
                error={errors.message}
                label="Mensaje"
                multiline
                name="message"
                helperText={errors.message && "agrege un Mensaje"}
                maxRows={5}
                variant="filled"
                value={message}
                onChange={messageChange}
              />
              <ColorButton  type="submit">
                Enviar
              </ColorButton>
            
          </form>
        
        </div>

        <Footer />
        
      </main>
      
    </div>
  )
}