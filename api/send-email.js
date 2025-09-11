const nodemailer = require('nodemailer');

export default async function handler(require, res){
  if(require.method !=='POST'){
    return res.satatus(405).json({error: 'Método não permitido'});
  }
}

const {name, email, subject, message} = req.body;

if(!name || !email || !subject || !message){
  return res.status(400).json({error: 'Todos os campos são obrigatórios'});
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
})

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `Nova mensagem de ${name}: ${subject}`,
  html: `
  <p><strong>Nome:</strong> ${name} </p>
  <p><strong>Email:</strong> ${email} </p>
  <p><strong>Assunto:</strong> ${subject} </p>
  <p><strong>Mensagem:</strong> ${message} </p>
  `,
};

try{
  await transporter.sendMail(mailOptions);
  res.status(200).json({message: 'Email enviado com sucesso!'});
}catch (error){
  console.error('Erro ao enviar email: ', error);
  res.status(500).json({error: 'Falha ao enviar email'});
}
