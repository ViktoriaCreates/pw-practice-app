import {test} from '@playwright/test'

//hook
test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('locating child elements', async({page}) =>{
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()

    //Try do not use by index .nth() because the order of web elements can changed on web page. 
    // This may result that the wrong elements can be selected.
    await page.locator('nb-card').nth(3).getByRole('button').click()

})