import nodemailer from 'nodemailer';

const user = process.env.USEREMAIL 
const pass = process.env.PASSEMAIL 

const transporter = nodemailer.createTransport({
  "host":"mail.serviout.com.es",
  "secure":true,
  "port":465,
  "auth":{
    "type":"login",
    "user":user,
    "pass":pass
  }

});

export default function handler(req, res) {
  try{
    let data = JSON.parse(req.body);

    await transporter.sendMail({
      from:"administracion@serviout.com.es",
      to:user,
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
    res.status(200).json({ confirm:true, s,transporter,pass,user});
  }catch(err){
    console.log("Error");
    console.log(err);
    res.status(500).json({confirm:false,err:JSON.stringify(err),pass,user});
  }
  
}
