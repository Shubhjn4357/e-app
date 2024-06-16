'use server'
import { CustomError, ErrorResponse } from '@/types';
import nodemailer from 'nodemailer';
interface sendMailProps {
  to: string;
  subject: string;
  htmldata: string;
}

const sendEmail=async({to,subject,htmldata}:sendMailProps): Promise<void>=> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    html: htmldata,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    const customError = handleMailError(error as CustomError);
    console.error(`Mail Error: ${customError.message} (Code: ${customError.name})`);
    throw customError;
  }
}
const handleMailError=(error: CustomError): ErrorResponse=> {
    switch (error.code) {
      case 'ENOTFOUND':
        return { message: 'Mail server not found', name: 'not_found' };
      case 'EAUTH':
        return { message: 'Invalid email or password', name: 'invalid_access' };
      case 'EENVELOPE':
        return { message: 'Invalid from address', name: 'invalid_from_address' };
      case 'ETIMEDOUT':
        return { message: 'Connection timed out', name: 'application_error' };
      case 'ECONNECTION':
        return { message: 'Connection error', name: 'internal_server_error' };
      case 'EADDRNOTAVAIL':
        return { message: 'Invalid region', name: 'invalid_region' };
      case 'ERATE':
        return { message: 'Rate limit exceeded', name: 'rate_limit_exceeded' };
      case 'EINVALIDPARAM':
        return { message: 'Invalid parameter', name: 'invalid_parameter' };
      case 'EMISSINGREQUIRED':
        return { message: 'Missing required field', name: 'missing_required_field' };
      default:
        return { message: 'Internal server error', name: 'internal_server_error' };
    }
  }
  sendEmail.displayName="sendEmail"
  
export { sendEmail };
export type { ErrorResponse };
