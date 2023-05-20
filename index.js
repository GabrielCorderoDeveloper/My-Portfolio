// const nodemailer = require('nodemailer');

// // Configura el transporte SMTP
// const transporter = nodemailer.createTransport({
//   host: 'smtp.example.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'gabriel.cordero.clip@gmail.com',
//     pass: 'Robtop1234',
//   },
// });

// // Define la ruta de envío de correo electrónico
// app.post('/send', (req, res) => {
//   const { name, email, message } = req.body;

//   // Define el correo electrónico que se enviará
//   const mailOptions = {
//     from: 'gabriel.cordero.clip@gmail.com',
//     to: 'gabriel.cordero.clip@gmail.com',
//     subject: 'Nuevo mensaje de contacto',
//     text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
//   };

//   // Envía el correo electrónico
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ status: 'fail' });
//     } else {
//       console.log('Correo electrónico enviado: ' + info.response);
//       res.status(200).send({ status: 'success' });
//     }
//   });
// });