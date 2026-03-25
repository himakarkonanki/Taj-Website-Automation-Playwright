import { GUEST_TYPE } from "../../../pages/SearchedDestinationsPage/SearchedDestinationPageLocators";
import { expect } from "../../fixtures/baseTest";
import { test } from "./setup/homepagefixture";

test("Navigate to Taj", async ({ homePage, destinationPage, searchedDestinationsPage }) => {
    await test.step("Click on destinations in nav bar and verify the navigation", async () => {
        await homePage.clickOnDestinations()
        await expect(destinationPage.destinationLocators.OUR_DESTINATIONS, 'Verify the text in destinations page').toHaveText("Our Destinations")
    })

    await test.step("Click on input bar and search for destination", async () => {
        await destinationPage.searchDestination("Taj MG Road, Bengaluru")
        await destinationPage.destinationLocators.SEARCHED_SUGGESTION("Taj MG Road, Bengaluru").click()
        await expect(searchedDestinationsPage.searchedDestinationLocators.DESTINATION_HEADING, "Verify whether, the searched destination is displayed").toHaveText('Taj MG Road, Bengaluru')
    })

    await test.step("Select the check in and check out date", async () => {
        await searchedDestinationsPage.searchedDestinationLocators.DATE_FIELD.click()
        await searchedDestinationsPage.selectDate("May 2026", "May 15, 2026", "May 20, 2026")
        await expect(searchedDestinationsPage.searchedDestinationLocators.CHECK_IN_DATE, "Verify check in date").toHaveText('15 May 2026')
        await expect(searchedDestinationsPage.searchedDestinationLocators.CHECK_OUT_DATE, "Verify check out date").toHaveText('20 May 2026')
    })

    await test.step("Add guests and rooms", async() => {
        await searchedDestinationsPage.searchedDestinationLocators.GUEST_FIELD.click()
        await searchedDestinationsPage.addGuest(GUEST_TYPE.ADULT,0)
        await searchedDestinationsPage.addGuest(GUEST_TYPE.CHILD,0)
        await searchedDestinationsPage.searchedDestinationLocators.ADD_MORE_ROOMS.click()
        await searchedDestinationsPage.addGuest(GUEST_TYPE.ADULT,1)
        await searchedDestinationsPage.addGuest(GUEST_TYPE.CHILD,1)
        await searchedDestinationsPage.searchedDestinationLocators.GUEST_FIELD.click()
        await expect(searchedDestinationsPage.searchedDestinationLocators.PER_HEAD_COUNT,'Verify the number of persons added').toHaveText('6 Guests')
        await expect(searchedDestinationsPage.searchedDestinationLocators.ROOM_COUNT,'Verfiy the number of rooms added').toHaveText('2 Rooms')
    })
});