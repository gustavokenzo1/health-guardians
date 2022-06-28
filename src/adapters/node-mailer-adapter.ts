import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (email: string) => {
  const mailOptions = {
    from: "Equipe Guardiões da Insalubridade",
    to: email,
    subject: "🔥🔥🔥 GUARDIÕES DA SAÚDE 🔥🔥🔥",
    html: `<h1>GUARDIÕES DA SAÚDE MARCADO COM SUCESSO 🔥🔥🔥</h1>`,
  };

  await transport.sendMail(mailOptions);
};
