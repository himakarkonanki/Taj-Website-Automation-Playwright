import {test as base} from "../../../fixtures/baseTest"
import { HomePage } from "../../../../pages/HomePage/HomePage"


export const test = base.extend<{homePageLoaded:HomePage}>({
    homePageLoaded:async({homePage},use)=>{
        await use(homePage)
    }
})