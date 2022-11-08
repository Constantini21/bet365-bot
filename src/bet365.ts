import { webkit } from 'playwright'
import { goToLivePage } from './functions/goToLivePage'
import { nameCompetition } from './functions/nameCompetition'

import { bot } from './services/telegram'
import { telegramUsers } from './services/telegramUsers'

const run = async () => {
  const browser = await webkit.launch({ headless: false })
  const page = await browser.newPage()

  await goToLivePage(page)
  const data = await nameCompetition(page)

  console.log(data)

  // for (const userId of telegramUsers) {
  //   await bot.telegram.sendMessage(userId, 'eufrasio tips')
  // }

  await browser.close()
}

run()
