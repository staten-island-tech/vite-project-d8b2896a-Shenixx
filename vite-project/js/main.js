import '../css/style.css';
import './agents';
import './dom'
import {agents} from "./agents";
import {DOMSelectors} from "./dom";

function getData(){
    const duelists = agents.filter((agent)=> agent.role === "Duelist")
    const controllers = agents.filter((agent)=> agent.role === "Controller")
    const initiators = agents.filter((agent)=> agent.role === "Initiator")
    const sentinels = agents.filter((agent)=> agent.role === "Sentinel")
    return {
        duelists: duelists,
        controllers: controllers,
        initiators: initiators,
        sentinels: sentinels,
    }
}

function makeCard() {
    const data = getData(duelists);
    data.duelists.forEach((duelist) => DOMSelectors.box.insertAdjacentHTML("afterend", `<div id="card"> <h2 class = "card">${duelist.name} ${duelist.description}</h2> </div>`));
}

makeCard();


// function makeCard(x) {
//     const data = getData(x);
//     data.duelists.forEach((duelist) => DOMSelectors.box.insertAdjacentHTML("afterend", `<div id="card"> <h2 class = "card">${duelist.name} ${duelist.description}</h2> </div>`));
// }

// makeCard(duelists);
