
class SignUpPage {
    public get inputEmail() { return $("~input-email"); }

    public get inputPassword() { return $("~input-password"); }
    public get inputConfirmPassword() { return $("~input-repeat-password"); }

    public get btnSubmit() { return $("//android.view.ViewGroup[@content-desc=\"button-SIGN UP\"]/android.view.ViewGroup/android.widget.TextView"); }

    public get goToSignUp() { return $("//android.view.ViewGroup[@content-desc=\"button-sign-up-container\"]/android.view.ViewGroup/android.widget.TextView") }

    public async signUp(email: string, password: string) {
        await this.goToSignUp.click()
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new SignUpPage();
