const assert = require('assert');

describe('Demo Test', function () {

  it('My First Test', async () => {


    await browser.url('https://tutorialsninja.com/demo/index.php')

    // await $('[name="q"]').setValue('WebdirverIO')

    // await $('[name="btnK"]').click()

    // await browser.keys('Enter');

    // TUGAS MODUL 8 GROWIA
    const dropdownEl = $$('.list-inline li.dropdown');
    dropdownEl.forEach(el => {
      el.click()
      const loginText = el.$('//a[text()="Login"]');
      loginText.click();
    })
    await $('[id="input-email"]').setValue('hilibrikateu-4757@yopmail.com');
    await $('[id="input-password"]').setValue('123456');
    await $('[value="Login"]').click();

    // Menunggu hingga elemen dengan teks "My Orders" muncul
    await browser.waitUntil(() => {
      return $('h2=My Orders').isDisplayed();
    }, {
      timeout: 20000,
      timeoutMsg: 'My Orders element is not visible'
    });

    // Mendapatkan teks aktual dari elemen
    const myTxtActual = $('h2=My Orders').getText();
    const myTxtExpected = 'My Orders';

    assert.strictEqual(await myTxtActual, myTxtExpected);




    await browser.pause(3000)
  })

})