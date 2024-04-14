import {test} from '@playwright/test'

//hook
test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('suite1', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Auth').click()
    })

    test('The first test', async ({page}) => {
        await page.getByText('Extra Components').click()
    })
    
    test('Navigate to datepicker page', async ({page}) => {
        await page.getByText('Tables & Data').click()
    })   
})

test.describe('suite1', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click()
    })
    test('The first test2', async ({page}) => {
        await page.getByText('Form Layouts').click()
    })
    
    test('Navigate to datepicker page2', async ({page}) => {
        await page.getByText('Datepicker').click()
    }) 
})