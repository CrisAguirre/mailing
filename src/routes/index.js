const {Router} = require("express");
const router = Router();


router.get("/email/",(req,res)=>{
    //---------------------------------------------------
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
        console.log("ready for send emails");
      });

      transporter.sendMail({
        from:'kemistry.clothing@gmail.com',
        to:"krontroth@gmail.com;kemistry.clothing@gmail.com",
        subject:"Confirmación de pedido en tienda Kemistry-Clothing",
        text:"Confirmación de pedido en tienda Kemistry-Clothing",
        html:"<b>Confirmación de pedido en tienda Kemistry-Clothing</b>"
      });

    //---------------------------------------------------
    //res.send("email");
})

module.exports = router;