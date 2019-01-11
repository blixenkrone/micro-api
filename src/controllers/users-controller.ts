import { TokenService, UsersService } from '../services/services-index';
import { Request, Response, NextFunction } from 'express';
import { IUserData } from 'models/user';

const tokenSrv = new TokenService();
const usersSrv = new UsersService();

export class UsersController {

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { query } = req;
            const profiles = await this.getUserByType('admindev@byrd.news', 'Sbk11!', query);
            res.json({ profiles });
            console.log('Fetched profiles!')
        } catch (error) {
            console.log('Error!')
            console.log(error)
            // res.json({ error })
        }
        next();
    }

    private getUserByType = async (email: string, password: string, query: string): Promise<IUserData> => {
        try {
            const res = await tokenSrv.getToken(email, password);
            console.log(res)
            if (res.status === 200) {
                const users = await usersSrv.getUsers({ params: query, headers: res.data.token })
                return users.hits as IUserData;
            } else {
                return res.request;
            }
        } catch (error) {
            return error;
        }
    }
}
