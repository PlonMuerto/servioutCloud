import nodemailer from 'nodemailer';

const user = process.env.USEREMAIL || "web@serviout.com";
const pass = process.env.PASSEMAIL || "_daniel_"

const transporter = nodemailer.createTransport({
  host:"serviout.com",
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
    console.log(data);
    console.log("dada");
    transporter.sendMail({
      from:"'Servi Out Messages' <web@serviout.com> ",
      to:"administracion@serviout.com",
      subject:'website contact form',
      text:"text"
    })
    res.status(200).json({ confirm:true});
  }catch(err){
    console.log("Error");
    console.log(err);
    res.status(500).json({confirm:false});
  }
  
}
