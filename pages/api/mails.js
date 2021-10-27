import nodemailer from 'nodemailer';

const user = process.env.USEREMAIL 
const pass = process.env.PASSEMAIL 

const transporter = nodemailer.createTransport({
  host:"mail.serviout.com.es",
  port:2096,
  secure:true,
  auth:{
    type:"login",
    user,
    pass
  }

});

export default function handler(req, res) {
  try{
    let data = JSON.parse(req.body);

    let s =transporter.sendMail({
      from:user,
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
    res.status(200).json({ confirm:true, s,transporter});
  }catch(err){
    console.log("Error");
    console.log(err);
    res.status(500).json({confirm:false});
  }
  
}
