import { Page } from "@playwright/test";
import { HomePageLocators } from "./HomePageLocators";

export class HomePage {
    readonly page: Page
    readonly homePageLocators: HomePageLocators

    constructor(page: Page) {
        this.page = page
        this.homePageLocators = new HomePageLocators(page)
    }

    async clickOnDestinations() {
        await this.homePageLocators.DESTINATIONS.click()
    }

    async bookAStay(destination: string) {
        await this.homePageLocators.BOOK_A_STAY.click()
        await this.homePageLocators.ENTER_DESTINATION.click()
        await this.homePageLocators.ENTER_DESTINATION.pressSequentially(destination)
    }
}