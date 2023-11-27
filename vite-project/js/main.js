import '../css/style.css';
import './agents';
import './dom'
import { agents } from "./agents";
import { DOMSelectors } from "./dom";



// function filter(){
//     let buttons = DOMSelectors.button
//     buttons.forEach((i)=>i.addEventListener("click", function(){
//         let afflatus = i.textContent
//         document.querySelector(".flexbox").innerHTML = ""
//         if (afflatus === "All") {
//             insert(array)
//         }
//         else{
//             let filter = array.filter((j)=>j.afflatus===afflatus)
//             insert(filter)
//         }

//     }))
// }


// function getData() {
//     const duelists = agents.filter((agent) => agent.role === "Duelist")
//     const controllers = agents.filter((agent) => agent.role === "Controller")
//     const initiators = agents.filter((agent) => agent.role === "Initiator")
//     const sentinels = agents.filter((agent) => agent.role === "Sentinel")
//     return {
//         duelists: duelists,
//         controllers: controllers,
//         initiators: initiators,
//         sentinels: sentinels,
//     }
// }
// const data = getData();

// function makeCard(array) {
//     array.forEach((el) => DOMSelectors.box.insertAdjacentHTML("afterBegin", 
//     `<div class="card"> <h2 class = "">${el.name} </h2> <h3 class = "">${el.role} </h3> <h3 class = "">${el.description}</h3> <img class="image" src="${el.image}"</div> `));
// };

// function normalPage(){
//     makeCard(data.sentinels); 
//     makeCard(data.initiators);
//     makeCard(data.controllers); 
//     makeCard(data.duelists);
// }

// DOMSelectors.button.addEventListener("click", function() {
//     DOMSelectors.box.innerHTML = "";
//     if (sentinel.checked){
//         makeCard(data.sentinels);    
//     }
//     if (initiator.checked){
//         makeCard(data.initiators);    
//     }
//     if (controller.checked){
//         makeCard(data.controllers);    
//     }
//     if (duelist.checked){
//         makeCard(data.duelists);    
//     }
// });
// normalPage();