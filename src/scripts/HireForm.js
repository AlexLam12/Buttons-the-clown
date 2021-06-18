import { sendRequest } from "./dataAccess.js"

export const HireForm = () => {
    let html = `
    <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendance">How many children</label>
            <input type="number" name="attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDate">Reservation Date</label>
            <input type="date" name="eventDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="timeRequired">Length of reservation in hours</label>
            <input type="number" name="timeRequired" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userName = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='attendance']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='eventDate']").value
        const userTime = document.querySelector("input[name='timeRequired']").value

        const dataToSendToAPI = {
            parentName: userName,
            childName: userChild,
            attendance: userAttendance,
            address: userAddress,
            eventDate: userDate,
            timeRequired: userTime
            
        }

        sendRequest(dataToSendToAPI)
    }
})
