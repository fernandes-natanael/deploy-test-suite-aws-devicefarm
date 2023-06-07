
class LoginPage {

    public get inputEmail() { return $("~input-email"); }

    public get inputPassword() { return $("~input-password"); }

    public get btnSubmit() { return $("//android.view.ViewGroup[@content-desc=\"button-LOGIN\"]/android.view.ViewGroup"); }

    public get loginContainerButton() { return $("//android.view.ViewGroup[@content-desc=\"button-login-container\"]/android.view.ViewGroup/android.widget.TextView")}

    public async login(email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
