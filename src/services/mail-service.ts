import { IMailOptions, IMailBody } from 'models/mail';
import env from '../utils/env.config';
import mail from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';

export class SendMailService {
    private sendGridMail = mail;
    private mailData: MailData;

    constructor(mailData: MailData) {
        this.sendGridMail.setApiKey(env.SENDGRID_API_KEY);
        this.mailData = mailData;
    }

    /**
     * @param isMultiple if theres more than one independent receiver add to "to" array,
     */
    public async sendMail(isMultiple?: boolean) {
        // This is req.body
        const { to, from, subject } = this.mailData;
        console.log(`Trying to send mail to ${to} from ${from} with subject: ${subject}...`)
        if (isMultiple) { console.log('Multiple mail!') }
        return await this.sendGridMail.send(this.mailData, isMultiple);
    }

}
