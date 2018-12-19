import express from 'express';
import path from 'path';
import { MailController, UsersController } from './controllers/controllers-index';
import bodyparser from 'body-parser';
// import cors from 'cors';
// import * as epx from 'express-sslify';

class App {
    private app: express.Application;
    private mailController = new MailController();
    private usersController = new UsersController();
    private port = process.env.PORT || 2000;

    constructor() {
        this.app = express();
        this.initApp();
        this.initEndpoints();
    }

    /** API Application init */
    private initApp = () => {
        console.log('Mail tipper API starting...')
        this.app.use(express.static(path.join(__dirname, 'dist')))
        this.app.use(bodyparser.urlencoded({ extended: true }))
        this.app.use(bodyparser.json())
        this.app.listen(this.port, () => console.log(`Listening on the port ${this.port}`));

    }
    private initEndpoints = () => {
        this.app.get('/', (req, res) => res.send('Tipper API'))
        this.app.post('/v1/send/mail/:userId', this.mailController.sendMail);
        this.app.get('/v1/users/', this.usersController.getUsers);
        console.log('App index file ran');
    }

}

export = new App();
