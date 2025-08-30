import 'server-only';

import nodemailer from 'nodemailer';
import { ISendMailParams } from '@/types/dashboard';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: Number(process.env.MAIL_PORT) === 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendMail({ from = 'cyberbizztechnologies@gmail.com', to, subject, text, html, attachments = [] }: ISendMailParams) {
  try {
    const info = await transporter.sendMail({ from, to, subject, text, html, attachments });

    console.log('TODO:// remove Message sent', info);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
