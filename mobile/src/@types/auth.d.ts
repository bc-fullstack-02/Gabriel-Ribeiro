export interface Auth {
    username: string;
    name ?: string;
    password: string;
}

export interface UserToken {
    profile : string;
    user: string;

}

export interface RegisterAuth {
    username: string;
    email : string;
    name ?: string;
    password: string;
}