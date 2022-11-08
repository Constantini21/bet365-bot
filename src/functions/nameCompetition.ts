import { Page } from 'playwright'

interface SoccerData {
  competitionName: string

  teamOne: {
    name: string
    odds: string
    attacks: string
    dangerousAttacks: string
    corners: string
    redCards: string
    yellowCards: string
  }

  teamTwo: {
    name: string
    odds: string
    attacks: string
    dangerousAttacks: string
    corners: string
    redCards: string
    yellowCards: string
  }

  x: {
    odds: string
  }
}

const soccerData: SoccerData[] = []

const chanceMatchLiveSoccer = async (
  page: Page,
  competitionName: string,
  competitionNumber: number,
  soccerNumber: number,
) => {
  // chance soccer static canvas
  await page
    .locator(
      `.ovm-CompetitionList > div:nth-child(${competitionNumber}) > div:nth-child(2) > div:nth-child(${soccerNumber}) > div:nth-child(2) > div > div`,
    )
    .click()

  await page.waitForTimeout(80)

  const matchData: SoccerData = {
    competitionName,
    teamOne: {
      name: (
        await page
          .locator(
            `.ovm-CompetitionList > div:nth-child(${competitionNumber}) > div:nth-child(2) > div:nth-child(${soccerNumber}) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`,
          )
          .allTextContents()
      )[0],

      odds: (await page
      .locator(
        `.ovm-CompetitionList > div:nth-child(${competitionNumber}) > div:nth-child(2) > div:nth-child(${soccerNumber}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`,
      )
      .allTextContents())[0],

      attacks: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').allTextContents())[0],
      dangerousAttacks: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)').allTextContents())[0],
      corners: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').allTextContents())[0],
      redCards: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').allTextContents())[0],
      yellowCards: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)').allTextContents())[0]
    },

    teamTwo: {
      name: (
        await page
          .locator(
            `.ovm-CompetitionList > div:nth-child(${competitionNumber}) > div:nth-child(2) > div:nth-child(${soccerNumber}) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`,
          )
          .allTextContents()
      )[0],

      odds: (await page
        .locator(
          `.ovm-CompetitionList > div:nth-child(${competitionNumber}) > div:nth-child(2) > div:nth-child(${soccerNumber}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)`,
        )
        .allTextContents())[0],

        attacks: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').allTextContents())[0],
        dangerousAttacks: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)').allTextContents())[0],
        corners: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)').allTextContents())[0],
        redCards: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)').allTextContents())[0],
        yellowCards: (await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(3)').allTextContents())[0]      
      },

    x: {
      odds: (await page
        .locator(
          `.ovm-CompetitionList > div:nth-child(${competitionNumber}) > div:nth-child(2) > div:nth-child(${soccerNumber}) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`,
        )
        .allTextContents())[0]
    }
  }

  soccerData.push(matchData)
}

// ml1-AllStats ml1-AllStats_PosBar
// console.log(await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div').allTextContents())

// ml1-StatsUpper ml1-StatsUpper_ThreeWheels 
// console.log(await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1)').allTextContents())

// all attacks
// .ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1)

// canvas estatistica parte cima
// .ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1)

// attacks
// await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').allTextContents()

// dangerous attacks
// .ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)

export const nameCompetition = async (page: Page) => {
  const oldpage = { ...page }

  try {
    // parte de cima ataques
    console.log((await page.locator('.ml1-MatchLiveSoccerModule_Wrapper > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)').allTextContents()))
    // conta quantas ligas está tendo jogos ao vivo
    const countCompetition = await page.locator('.ovm-CompetitionList > div').count()

    // nome das ligas
    const competitionsNames = await page.locator('.ovm-CompetitionHeader_NameText').allTextContents()

    for (let index = 2; index < countCompetition + 1; index++) {
      // skip e-soccer
      if (competitionsNames[index - 2].toLocaleLowerCase().includes('e-soccer')) continue

      // conta quantos jogos ao vivo que determinada liga está acontecendo
      const countSoccer = await page
        .locator(`.ovm-CompetitionList > div:nth-child(${index}) > div:nth-child(2) > div`)
        .count()

      for (let i = 2; i < countSoccer + 1; i++) {
        await chanceMatchLiveSoccer(page, competitionsNames[index - 2], index, i)
      }
    }
  } catch (error) {}

  page = oldpage
  return soccerData
}
