/*eslint-disable*/
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export  default (message, subject, userEmail) => {
        try{const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.PARENT_EMAIL,
                    pass: process.env.PARENT_PASSWORD
                }
            });
            transporter.sendMail({
                from: process.env.PARENT_EMAIL,
                to: `${userEmail}`,
                subject: `${subject}`,
                html: `${message}`
            });
        return {message: 'Email sent succesfully'}   
    }catch(error){
        const _error = `Failed sending the email to ${userEmail}, Please try again ...`;
        return {error: _error};
    }
}