
import env from '../utils/env.config';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

export class UsersService {

    public getUsers = async (requestCfg: AxiosRequestConfig) => {
        try {
            const { headers, params } = requestCfg;
            // tslint:disable-next-line:max-line-length
            const res: AxiosResponse<any> = await axios.get(`${env.BYRD_API_URL}/profiles`, { headers: { user_token: headers }, params });
            return res.data;
        } catch (e) {
            return this.handleError(e);
        }
    }

    private handleError<T extends Error>(e: T): T {
        // console.log(e)
        return e;
    }

}
