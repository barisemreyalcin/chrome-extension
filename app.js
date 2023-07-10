const btnSave = document.querySelector("#btn-save");
const input = document.querySelector("#input");
const ul = document.querySelector(".list-items");
const btnDelete = document.querySelector("#btn-delete");
let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
        <a href="${leads[i]}" target="_blank"><i class="fa-solid fa-link"></i>${leads[i]}</a>
        </li>
        ` 
    }
    ul.innerHTML = listItems;
}

btnSave.addEventListener("click", function() {
    if(input.value == "") {
        alert("Please, enter a lead.");
    } else {
        myLeads.push(input.value);
        input.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
})

btnDelete.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})