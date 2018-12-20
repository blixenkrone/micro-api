import { Request, Response, NextFunction } from 'express';
import { IMailOptions } from 'models/mail';
import { TokenService, SendMailService } from '../services/services-index';
import { MailData } from '@sendgrid/helpers/classes/mail';

export class MailController {
    constructor() { }
    public sendMail = async (req: Request, res: Response, next: NextFunction) => {
        const mailBody: MailData = req.body;
        const mailSrv = new SendMailService(mailBody);
        const { from, to, subject, text, isMultiple } = mailBody;
        try {
            const sentMail = await mailSrv.sendMail(isMultiple);
            console.log(`Sent mail to ${to} from ${from}!`);
            res.json({ mailBody })
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
        next();
    }

}
