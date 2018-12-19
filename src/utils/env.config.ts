import { IEnvironment } from 'models/env.model';
import dotenv from 'dotenv';
const config = dotenv.config();

const env: any | NodeJS.ProcessEnv = process.env;
console.log(env.NODE_ENV)
export = env as IEnvironment;
