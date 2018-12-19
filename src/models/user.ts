export interface IUserData {
    displayName: string;
    userId: string;
    email: string;
    loginDate: number;
}

export interface IMediaProfile extends IUserData {
    isMedia: boolean;
}
