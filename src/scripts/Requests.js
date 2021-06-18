import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    // const sortedActivities = requests.slice().sort((a, b) => b.eventDate - a.eventDate)
    let html = `
        <ul>
            ${
                requests.map(
                    (request) => `
                    <li>${request.eventDate}
                        <button class="request__delete" id="request--${request.id}">
                            Deny
                        </button>
                    </li>`
                ).join("")
                
            }
`

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})