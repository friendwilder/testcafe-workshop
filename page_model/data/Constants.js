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

export const USER_DETAILS = {
    STANDARD_USER: {
        FIRST_NAME: process.env.FIRST_NAME,
        LAST_NAME: process.env.LAST_NAME,
        POSTAL_CODE: process.env.POSTAL_CODE
    }
}