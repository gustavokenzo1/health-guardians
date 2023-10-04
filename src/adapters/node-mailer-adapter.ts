import nodemailer from "nodemailer";
import { IUserEmail } from "src/utils/malandragem";

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

export const sendSuccessEmail = async (emails: IUserEmail[]) => {
  const mailOptions = {
    from: "Equipe Guardiões da Insalubridade",
    to: emails.map((email) => email.email),
    subject: "🔥🔥🔥 GUARDIÕES DA SAÚDE 🔥🔥🔥",
    html: `<h1>GUARDIÕES DA SAÚDE MARCADO COM SUCESSO 🔥🔥🔥</h1>`,
  };

  await transport.sendMail(mailOptions);
};

export const sendErrorEmail = async (emails: IUserEmail[]) => {
  const mailOptions = {
    from: "Equipe Guardiões da Insalubridade",
    to: emails.map((email) => email.email),
    subject: "😭😭😭 GUARDIÕES DA SAÚDE 😭😭😭",
    html: `
      <h1>OCORREU UM ERRO AO MARCAR O GUARDIÕES DA SAÚDE</h1>
      <p>${emails[0].subject}</p>
    `,
  };

  await transport.sendMail(mailOptions);
};

export const sendQuizAnswersEmail = async (emails: IUserEmail[]) => {
  const mailOptions = {
    from: "Equipe Guardiões da Insalubridade",
    to: emails.map((email) => email.email),
    subject: "🔥🔥🔥 QUIZ DO GUARDIÕES DA SAÚDE MARCADO COM SUCESSO 🔥🔥🔥",
    html: `
      <h1>RESPOSTAS DO QUIZ</h1>
      <p>${JSON.stringify(emails[0].subject)}</p>
    `,
  };

  await transport.sendMail(mailOptions);
}

export const sendQuizAnswersErrorEmail = async (emails: IUserEmail[]) => {
  const mailOptions = {
    from: "Equipe Guardiões da Insalubridade",
    to: emails.map((email) => email.email),
    subject: "😭😭😭 QUIZ DO GUARDIÕES DA SAÚDE 😭😭😭",
    html: `
      <h1>OCORREU UM ERRO AO MARCAR O QUIZ DO GUARDIÕES DA SAÚDE</h1>
      <p>${emails[0].subject}</p>
    `,
  };

  await transport.sendMail(mailOptions);
}