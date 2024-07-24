
export interface AuthResponseType{
    jwt: string,
    user: userType
}

export interface userType{
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean
}