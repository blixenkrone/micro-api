import { TokenService, UsersService } from '../services/services-index';
import { Request, Response, NextFunction } from 'express';
import { IUserData } from 'models/user';

const tokenSrv = new TokenService();
const usersSrv = new UsersService();

export class UsersController {

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        const { query } = req;
        try {
            const profiles = await this.getUserByType('admindev@byrd.news', 'Sbk11!', query);
            res.json({ profiles });
            console.log('Fetched profiles!')
        } catch (error) {
            res.json({ error })
        }
        next();
    }

    private getUserByType = async (email: string, password: string, query: string): Promise<IUserData> => {
        try {
            const token = await tokenSrv.getToken(email, password);
            const res = await usersSrv.getUsers({ params: query, headers: token })
            return res.hits as IUserData;
        } catch (error) {
            return error;
        }
    }
}
