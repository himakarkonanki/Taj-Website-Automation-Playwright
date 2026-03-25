import { Locator, Page } from "@playwright/test";


export enum GUEST_TYPE {
    ADULT,
    CHILD
}

export class SearchedDestinationPageLocators {
    readonly page: Page
    readonly DESTINATION_HEADING: Locator
    readonly DATE_FIELD: Locator
    readonly DATE_PICKER: Locator
    readonly CHECK_IN_DATE: Locator
    readonly CHECK_OUT_DATE: Locator
    readonly CALENDER_PREV_BUTTON: Locator
    readonly CALENDER_NEXT_BUTTON: Locator
    readonly CALENDER_NAVIGATION_LABEL: Locator
    readonly GUEST_FIELD: Locator
    readonly ADD_MORE_ROOMS: Locator
    readonly PER_HEAD_COUNT: Locator
    readonly ROOM_COUNT: Locator


    constructor(page: Page) {
        this.page = page
        this.DESTINATION_HEADING = this.page.locator('.multi-line-banner-title span')
        this.DATE_FIELD = this.page.locator('.css-zvaja1')
        this.DATE_PICKER = this.page.locator('.react-calendar')
        this.CHECK_IN_DATE = this.page.locator('.css-1tqonga').nth(0)
        this.CHECK_OUT_DATE = this.page.locator('.css-1tqonga').nth(1)
        this.CALENDER_PREV_BUTTON = this.page.locator('.react-calendar__navigation__prev-button')
        this.CALENDER_NEXT_BUTTON = this.page.locator('.react-calendar__navigation__next-button')
        this.CALENDER_NAVIGATION_LABEL = this.page.locator('.react-calendar__navigation__label')
        this.GUEST_FIELD = this.page.locator('.css-kn78ea')
        this.PER_HEAD_COUNT = this.GUEST_FIELD.locator('span').nth(0)
        this.ROOM_COUNT = this.GUEST_FIELD.locator('span').nth(1)
        this.ADD_MORE_ROOMS = this.page.getByText('ADD MORE ROOMS').nth(0)
    }

    CALENDER_MONTH = (month: string) => this.page.getByRole('button', { name: month })
    CALENDER_DATE = (stayDate: string) => this.page.getByRole('button', { name: new RegExp(stayDate) })
    ADD_GUEST = (guest: GUEST_TYPE, room: number) => this.page.locator('.css-8zxvtc').nth(room).locator('.css-rovv6h').nth(guest).getByAltText('plus-icon')
    REMOVE_GUEST = (guest: GUEST_TYPE, room: number) => this.page.locator('.css-8zxvtc').nth(room).locator('.css-rovv6h').nth(guest).getByAltText('minus-icon')

}