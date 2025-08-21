import emailjs from '@emailjs/browser';


const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


export interface EmailParams {
    name: string;
    email: string;
    subject: string;
    message: string;
    [key: string]: unknown;
  }
  
  export const sendEmail = (params: EmailParams) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      return Promise.reject(new Error('Missing EmailJS configuration'));
    }
  
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
  };