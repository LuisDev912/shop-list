const table = document.getElementById("table");
const tableBody = document.getElementById("table-body");
const buttons = document.querySelector(".buttons"); 
const addBtn = document.getElementById("addProduct");
const calcBtn = document.getElementById("Calculate");
const totalSpan = document.getElementById("total");

// functions
addBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td><input type="text" placeholder="Product" tabindex="0"></td>
    <td><input type="number" placeholder="$" tabindex="0" min="0"></td>
    <td><input type="number" placeholder="1" min="1" value="1"></td>
    `;

    tableBody.appendChild(newRow);
});