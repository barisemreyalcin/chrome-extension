const btn = document.querySelector("#btn-save");
const input = document.querySelector("#input");
const ul = document.querySelector(".list-items");
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

btn.addEventListener("click", function() {
    myLeads.push(input.value);
    input.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
        <a href="${myLeads[i]}" target="_blank"><i class="fa-solid fa-link"></i>${myLeads[i]}</a>
        </li>
        ` 
    }
    ul.innerHTML = listItems;
}