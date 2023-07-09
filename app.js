const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const ul = document.querySelector(".list-items");
let myArr = [];

btn.addEventListener("click", function() {
    myArr.push(input.value);
    input.value = "";
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    for(let i = 0; i < myArr.length; i++) {
        listItems += `
        <li>
        <a href="${myArr[i]}" target="_blank"><i class="fa-solid fa-link"></i>${myArr[i]}</a>
        </li>
        ` 
    }
    ul.innerHTML = listItems;
}