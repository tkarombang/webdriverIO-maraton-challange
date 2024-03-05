class LoginPage {

  get usernameTextBox() {
    return $('#username')
  }
  get passwordTextBox() {
    return $('#password')
  }
  get loginButton() {
    return $('button[type="submit"]')
  }
  get loginMessage() {
    return $('#flash')
  }

  async login(usr, pass) {
    await this.usernameTextBox.setValue(usr)
    await this.passwordTextBox.setValue(pass)
    await this.loginButton.click()
  }

  async checkMessage(msg) {
    await expect(this.loginMessage).toHaveTextContaining(msg)
  }
}

module.exports = new LoginPage();