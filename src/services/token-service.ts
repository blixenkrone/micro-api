// import admin from 'firebase-admin'
import env from '../utils/env.config';
import axios, { AxiosResponse } from 'axios';

export class TokenService {
    constructor() { }

    public getToken = async (email: string, password: string): Promise<AxiosResponse> => {
        const val = await this.postToken(email, password);
        return val;
    }

    private postToken = async (email: string, password: string): Promise<AxiosResponse> => {
        return await axios.post(`${env.BYRD_API_URL}/auth`, { email, password });
    }

    private handleError<T extends Error>(e: T): T {
        return e;
    }

}
