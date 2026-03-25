import { Page } from "@playwright/test";
import { GUEST_TYPE, SearchedDestinationPageLocators } from "./SearchedDestinationPageLocators";

export class SearchedDestinationPage {
    readonly page: Page
    readonly searchedDestinationLocators: SearchedDestinationPageLocators

    constructor(page: Page) {
        this.page = page
        this.searchedDestinationLocators = new SearchedDestinationPageLocators(page)
    }

    async selectDate(month: string, checkInDate: string, checkOutDate: string) {
        await this.searchedDestinationLocators.CALENDER_NAVIGATION_LABEL.click()
        await this.searchedDestinationLocators.CALENDER_MONTH(month).click()
        await this.searchedDestinationLocators.CALENDER_DATE(checkInDate).click()
        await this.searchedDestinationLocators.CALENDER_DATE(checkOutDate).click()
    }

    async addGuest(guestType: GUEST_TYPE, roomNumber: number) {
        await this.searchedDestinationLocators.ADD_GUEST(guestType, roomNumber).click()
    }

    async removeGuest(guestType: GUEST_TYPE, roomNumber: number) {
        await this.searchedDestinationLocators.REMOVE_GUEST(guestType, roomNumber).click()
    }
}