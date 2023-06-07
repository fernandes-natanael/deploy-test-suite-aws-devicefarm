import NativeAlert from '../pageobjects/components/nativeAlert'
import loginPage from '../pageobjects/login.page'
import Navbar from '../pageobjects/navbar'
import SignUpPage from '../pageobjects/signUp.page'

// const email = `teste@gmail.com`
const email = `teste+${Date.now()}@gmail.com`
const senha = "12345678"

describe('Test suite', () => {
    it('should sign Up with valid credentials', async () => {
        await Navbar.loginButton.click()
        await SignUpPage.signUp(email, senha)
        await driver.pause(2000);
        await NativeAlert.waitForIsShown()
        await expect(await NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!ajfhauoidsgvabd saygahi')

        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    })

    it('should login with valid credentials', async () => {
        await loginPage.loginContainerButton.click();
        await loginPage.login(email, senha)
        await NativeAlert.waitForIsShown()
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!')
    })
})



