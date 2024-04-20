import {expect, test} from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout'

//hook
test.beforeEach(async({page}, testInfo) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout + 2000)
})

test('timeout', async ({page}) => {
    test.setTimeout(10000)
    test.slow()
    
    const successButton = page.locator('.bg-success')
    
    await successButton.click()
})
    