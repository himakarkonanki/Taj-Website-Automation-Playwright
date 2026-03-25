import { Locator, Page } from "@playwright/test"

export class DestinationLocators {
    readonly page: Page
    readonly OUR_DESTINATIONS: Locator
    readonly INPUT_BAR: Locator
    readonly SEARCH_INPUT_FIELD: Locator

    constructor(page: Page) {
        this.page = page
        this.OUR_DESTINATIONS = this.page.locator('.multi-line-banner-title').filter({ has: this.page.locator('span') })
        this.INPUT_BAR = this.page.locator('.MuiInputBase-readOnly Input')
        this.SEARCH_INPUT_FIELD = this.page.locator('.MuiInputBase-root input.MuiInputBase-input').nth(5)

    }

    SEARCHED_SUGGESTION = (text: string) => this.page.locator('[role="tabpanel"] b').filter({ has: this.page.getByText(text, { exact: true }) })
}