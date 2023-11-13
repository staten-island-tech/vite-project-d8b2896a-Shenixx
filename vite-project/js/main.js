import '../css/style.css';
import './agents';
import './dom'
import {agents} from "./agents";

const DOMSelectors = {
    box: document.getElementById("app"),
};  

function getData(){
    const duelists = agents.filter((agent)=> agent.role === "Duelist").forEach((agent) => console.log(agent));
    const controllers = agents.filter((agent)=> agent.role === "Controller").forEach((agent) => console.log(agent));
    const initiators = agents.filter((agent)=> agent.role === "Initiator").forEach((agent) => console.log(agent));
    const sentinels = agents.filter((agent)=> agent.role === "Sentinel").forEach((agent) => console.log(agent));
    return {
        duelists: duelists,
        controllers: controllers,
        initiators: initiators,
        sentinels: sentinels,
    }
}

function makeCard() {
    const data = getData();
    DOMSelectors.box.insertAdjacentHTML("afterend", `<div id="card"> <h2> My name is ${data.duelists.forEach((duelist) => console.log(duelist))} </div>`);
}

getData();

// const letMePass = cards.filter((card)=> card.rarity === "Common").forEach((common) => console.log(common));
// const dontFail = cards.filter((card)=> card.printings.includes("5ED")).forEach((printing) => console.log(printing));
