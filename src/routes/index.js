const {Router} = require("express");
const router = Router();


router.get("/email/",(req,res)=>{
    //---------------------------------------------------
    try{
    const {from,to,subject,text,html} = req.body;
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'kemistry.clothing@gmail.com',
          pass: 'otpa lyyi fzjs keit'
        }
      });
      transporter.verify().then(()=>{
        console.log("Mensaje enviado");
      });
      transporter.sendMail({
        from,
        to,
        subject,
        text,
        html
      });

    //---------------------------------------------------
    res.send({
      code:"200",
      message:"Mensaje enviado con exito"
    });
    }catch(err){
      res.send({
        code:"501",
        message:err
      });
    }
})

module.exports = router;