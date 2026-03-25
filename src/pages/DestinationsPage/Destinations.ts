import { Page } from "@playwright/test";
import { DestinationLocators } from "./DestinationPageLocators";

export class Destinations {
    readonly page: Page
    readonly destinationLocators: DestinationLocators

    constructor(page: Page) {
        this.page = page
        this.destinationLocators = new DestinationLocators(page)
    }

    async clickOnInputBar() {
        await this.destinationLocators.INPUT_BAR.click()
    }

    async searchDestination(destination: string) {
        await this.clickOnInputBar()
        await this.destinationLocators.SEARCH_INPUT_FIELD.pressSequentially(destination)
    }
}