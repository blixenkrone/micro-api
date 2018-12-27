// import admin from 'firebase-admin'
import env from '../utils/env.config';
import axios, { AxiosResponse } from 'axios';

export class TokenService {
    constructor() { }

    public getToken = async (email: string, password: string): Promise<string | any> => {
        const val = await this.postToken(email, password);
        return val.data.token;
    }

    private postToken = async (email: string, password: string): Promise<AxiosResponse> => {
        const res = await axios.post(`${env.BYRD_API_URL}/auth`, { email, password });
        return res.data || undefined;
    }

    private handleError<T extends Error>(e: T): T {
        // console.log(e)
        return e;
    }

}
