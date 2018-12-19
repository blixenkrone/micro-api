export interface IEnvironment {
    PRODUCTION: boolean,
    NODE_ENV: string,
    DATABASE_URL: string;
    FB_PROJECT_ID: string;
    FB_CLIENT_EMAIL: string;
    FB_PRIVATE_KEY: string;
    SENDGRID_API_KEY: string;
    HUBSPOT_API_KEY: string;
    BYRD_API_URL: string;
}
