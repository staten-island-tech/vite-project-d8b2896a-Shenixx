import '../css/style.css';
import './agents';
import './dom'
import { agents } from "./agents";
import { DOMSelectors } from "./dom";

function getData() {
    const duelists = agents.filter((agent) => agent.role === "Duelist")
    const controllers = agents.filter((agent) => agent.role === "Controller")
    const initiators = agents.filter((agent) => agent.role === "Initiator")
    const sentinels = agents.filter((agent) => agent.role === "Sentinel")
    return {
        duelists: duelists,
        controllers: controllers,
        initiators: initiators,
        sentinels: sentinels,
    }
}

const data = getData();

function makeCardD(duelists) {
    data.duelists.forEach((duelist) => DOMSelectors.box.insertAdjacentHTML("afterBegin", 
    `<div class="card"> <h2 class = "">${duelist.name} </h2> <h3 class = "">${duelist.description}</h3> </div> `));
};

function makeCardC(controllers) {
    data.controllers.forEach((controller) => DOMSelectors.box.insertAdjacentHTML("afterBegin", 
    `<div class="card"> <h2 class = "">${controller.name} </h2> <h3 class = "">${controller.description}</h3> </div>`));
};

function makeCardI(initiators) {
    data.initiators.forEach((initiator) => DOMSelectors.box.insertAdjacentHTML("afterBegin", 
    `<div class="card"> <h2 class = "">${initiator.name} </h2> <h3 class = "">${initiator.description}</h3> </div>`));
};

function makeCardS(sentinels) {
    data.sentinels.forEach((sentinel) => DOMSelectors.box.insertAdjacentHTML("afterBegin", 
    `<div class="card"> <h2 class = "">${sentinel.name} </h2> <h3 class = "">${sentinel.description}</h3> </div>`));
};

makeCardC(data);
