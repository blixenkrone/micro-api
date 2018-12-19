import { Request, Response, NextFunction } from 'express';
import { IMailOptions } from 'models/mail';
import { TokenService, SendMailService } from '../services/services-index';
import { MailData } from '@sendgrid/helpers/classes/mail';

// const mailSrv = new SendMailService();

export class MailController {
    constructor() { }
    public sendMail = async (req: Request, res: Response, next: NextFunction) => {
        const mailBody: MailData = req.body;
        const { from } = mailBody;
        // const sentMail = await mailSrv.sendMail(mailBody);
        next();
    }

}
