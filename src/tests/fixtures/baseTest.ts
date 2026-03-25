import { test as base, Page } from "@playwright/test"
import { HomePage } from "../../pages/HomePage/HomePage"
import { Destinations } from "../../pages/DestinationsPage/Destinations"
import { SearchedDestinationPage } from "../../pages/SearchedDestinationsPage/SearchedDestination"


type BaseTestFixtures = {
    mainPage: Page
    homePage: HomePage
    destinationPage: Destinations
    searchedDestinationsPage: SearchedDestinationPage
}

export const test = base.extend<BaseTestFixtures>({
    mainPage:
        async ({ browser }, use) => {
            const browserContext = await browser.newContext()
            const newPage = await browserContext.newPage()
            await newPage.goto("/", {
                timeout: 120000,
                waitUntil: "domcontentloaded"
            })
            await use(newPage)
            await browserContext.close();
        },

    page: async ({ mainPage }, use) => {
        await use(mainPage)
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    destinationPage: async ({ page }, use) => {
        await use(new Destinations(page))
    },

    searchedDestinationsPage: async ({ page }, use) => {
        await use(new SearchedDestinationPage(page))
    }

})

export const expect = test.expect