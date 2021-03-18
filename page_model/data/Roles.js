import { Role } from 'testcafe';
import { CREDENTIALS } from './Constants'

export const standardUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText('input[id="user-name"]', CREDENTIALS.VALID_USER.USER_NAME)
        .typeText('#password', CREDENTIALS.VALID_USER.PASSWORD)
        .click('#login-button');
}, { preserveUrl: true });
