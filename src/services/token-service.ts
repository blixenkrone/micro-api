// import admin from 'firebase-admin'
import env from '../utils/env.config';
import axios, { AxiosResponse } from 'axios';

export class TokenService {
    constructor() { }

    public getToken = async (email: string, password: string) => {
        try {
            const val = await this.postToken(email, password);
            return val.data.token;
        } catch (error) {
            console.log(error)
        }
    }

    private postToken = async (email: string, password: string): Promise<AxiosResponse> => {
        const res = await axios.post(`${env.BYRD_API_URL}/auth`, { email, password });
        if (!res.data.error) {
            return res;
        } else {
            console.log(res.data)
            return res;
        }
    }

}
