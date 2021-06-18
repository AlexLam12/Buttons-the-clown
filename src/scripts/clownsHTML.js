import { HireForm } from "./HireForm.js"
import { Requests } from "./Requests.js"

export const clownsHTML = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="serviceForm">
    ${HireForm()}
    </section>

    <section class="serviceRequests">
        <h2>Reservation Requests</h2>
        ${Requests()}
    </section>
    `
}
