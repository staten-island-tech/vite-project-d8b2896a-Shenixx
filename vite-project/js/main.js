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

function makeCard(array) {
    array.forEach((el) => DOMSelectors.box.insertAdjacentHTML("afterBegin", 
    `<div class="card"> <h2 class = "">${el.name} </h2> <h3 class = "">${el.description}</h3> <img class="image" src="${el.image}"</div> `));
};

DOMSelectors.button.addEventListener("click", function() {
    if (duelist.checked){
        makeCard(data.duelists);    
    }
    if (controller.checked){
        makeCard(data.controllers);    
    }
    if (initiator.checked){
        makeCard(data.initiators);    
    }
    if (sentinel.checked){
        makeCard(data.sentinels);    
    }
    
});
