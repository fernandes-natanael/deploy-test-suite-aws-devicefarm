class Navbar {
    public get loginButton() { return $("//android.widget.Button[@content-desc=\"Login\"]/android.widget.TextView[1]") }
}

export default new Navbar()