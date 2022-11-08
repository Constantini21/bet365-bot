import { Page } from 'playwright'

export const goToLivePage = async (page: Page) => {
  await page.goto('https://www.bet365.com/#/h0')
  await page.waitForLoadState('networkidle')
  await page.locator('text=Aceitar').click()
  await page.locator('.hm-MainHeaderCentreWide > div:nth-child(2) > div').click()
  await page.waitForURL('https://www.bet365.com/#/IP/B1')
  await page.locator('.iip-IntroductoryPopup_Cross').click()
  // await page.waitForTimeout(7500)
}
