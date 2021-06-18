import { fetchRequests } from "./dataAccess.js"
import { clownsHTML } from "./clownsHTML.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = clownsHTML()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()