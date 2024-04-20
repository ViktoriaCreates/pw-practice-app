import {expect, test} from '@playwright/test'

//hook
test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})
test.describe('Form Layouts page', () => {
    test.beforeEach( async({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('input fields', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})

        await usingTheGridEmailInput.fill('test2@test.com')
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('test3@test.com', {delay: 500})

        //generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test3@test.com')

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test3@test.com')

    })

    
})