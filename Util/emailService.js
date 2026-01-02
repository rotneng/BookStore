// xmqyewamsirsaeyo

const { text } = require('body-parser');
const nodemailer = require('nodemailer');

const createTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        // port: 587,
        // secure: false,
        auth: {
            user: "rotneng@gmail.com",
            pass: "xmqyewamsirsaeyo"
        }
    })
}

const emailLayout = (otp) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome</h1>
        <p>Signup Succesfull</p>
        <p>Your Verification code is ${otp}</p>
    </body>
    </html>`
}

const sendEmail = async (email, otp) => {
  try {
    const transporter = createTransporter()
    const info = await transporter.sendMail({
      from: "rotneng@gmail.com",
      to: email, 
      subject: "Welcome to MyApp",
      text: `Welcome, Your verification token is ${otp}`,
      html: emailLayout(otp)
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
module.exports = {createTransporter, sendEmail}

// const sendEmail =async () => {
//     const transporter = createTransporter()
//     const mailOptions = {
//         from:{
//             name: "Rotnen",
//             address: "rotneng@gmail.com"    
//         },
//         to: "rotnen10@gmail.com",
//         subject: "Welcome Message",
//         text: "Hello, welvome to my app",
//         html: emailLayout()
//     }
//     try {
//         const emailSend = await transporter.sendMail(mailOptions)
//         console.log("email sent succesfully")
//         return {success:true, messageId: emailSend.messageId}
//     }catch(err){
//         console.log("Unable to send email", err)
//     }
// }





