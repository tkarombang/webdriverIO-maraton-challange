describe("myFirstTestRec", () => {
  it("tests myFirstTestRec", async () => {
    await browser.setWindowSize(662, 647)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyUp',
        value: ''
      }]
    }])
    await browser.$("//*[@id=\"content\"]/div/h4/em[1]").doubleClick()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyUp',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyUp',
        value: ''
      }]
    }])
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("//*[@id=\"content\"]/div/h4/em[2]").doubleClick()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyUp',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyDown',
        value: ''
      }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{
        type: 'keyUp',
        value: ''
      }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    // await browser.$("text/ Login").click()
    await browser.$("//*[@id=\"login\"]/button/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("text/Logout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});