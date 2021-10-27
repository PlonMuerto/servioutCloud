import nodemailer from 'nodemailer';

const user = process.env.USEREMAIL 
const pass = process.env.PASSEMAIL 

const transporter = nodemailer.createTransport({
  host:"serviout.com.es",
  port:465,
  secure:true,
  auth:{
    user,
    pass
  }

});

export default function handler(req, res) {
  try{
    let data = JSON.parse(req.body);
    transporter.sendMail({
      from:`mensaje de ${data.name}`,
      to:"administracion@serviout.com.es",
      subject:`cotizar servicio ${data.service}`,
      html:`
      <article>
        <header>
          <h3>email de comprador ${data.email}</h3>
          <h5>${data.phone}</h5>
        </header>
        <p>
          ${data.message}
        </p>
      </article>
`
    })
    res.status(200).json({ confirm:true});
  }catch(err){
    console.log("Error");
    console.log(err);
    res.status(500).json({confirm:false});
  }
  
}
