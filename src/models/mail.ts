export interface IMailBody {
    subject: string;
    msg: string;
    sender: string;
    senderEmail: string;
    receiver: string;
    receiverEmail: string;
}

export interface IMailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
    // language?: 'danish' | 'swedish' | 'english';
}
