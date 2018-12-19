import { IMailOptions, IMailBody } from 'models/mail';
import env from '../utils/env.config';
import mail from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import MailService from '@sendgrid/mail/src/mail';
import EmailAddress from '@sendgrid/helpers/classes/email-address';

export class SendMailService {
    private sendGridMail = MailService;
    constructor(mailSetup: EmailAddress) {
        this.sendGridMail.setApiKey(env.SENDGRID_API_KEY);
    }

    public async setMailOpt = async (mailSetup: EmailAddress) => {  
        mailSetup.

    }

    public async sendMail(message: MailData) {
        const { to, from, subject } = message;
        console.log(`Trying to send mail to ${to} from ${from} with subject: ${subject}...`)
        return await this.sendGridMail.send(message);
    }

}
