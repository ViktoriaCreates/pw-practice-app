import {test} from '@playwright/test'

//hook
test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async({page}) => {
// by Tag name
page.locator('input')
// by ID
page.locator('#inputEmail1')
// by Class value
page.locator('.shape-rectangle')
// by Attribute
page.locator('[placeholder="Email"]')
// by Class value (full)
page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
// by Combining different selectors
page.locator('input[placeholder="Email"][nbinput]') 
// by XPath (NOT RECOMMENDED with PLAYWRIGHT)
page.locator('//*[id="inputEmail1"]')
// by Partial text match
page.locator(':text("Using")')
// by Exact text match
page.locator(':text-is("Using the Grid")')
})