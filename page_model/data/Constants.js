import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USER_NAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USER_NAME: process.env.LOCKED_OUT_USER,
        PASSWORD: process.env.PASSWORD
    }
}