import { Locator, Page } from "@playwright/test"

export class HomePageLocators {
    readonly page: Page
    readonly BOOK_A_STAY: Locator
    readonly ENTER_DESTINATION: Locator
    readonly DESTINATIONS: Locator

    constructor(page: Page) {
        this.page = page
        this.BOOK_A_STAY = this.page.getByRole('button').getByText('BOOK A STAY')
        this.DESTINATIONS = this.page.getByRole("link", { name: "DESTINATIONS" })
        this.ENTER_DESTINATION = this.page.getByPlaceholder('Find a Hotel or Destination')
    }




}