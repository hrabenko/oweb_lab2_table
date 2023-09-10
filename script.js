const table = document.getElementById("table");

for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 6; j++) {

        const cell = document.createElement("td");
        const innerText = String(i * 6 + j + 1);
        cell.innerText = innerText;
        cell.id = innerText;

        row.appendChild(cell);
    }
    table.appendChild(row);
}

function getRandomColor() {
    return "#" + (Math.floor(Math.random() * 16777215).toString(16));
}

const cell = document.getElementById("4");

cell.addEventListener("mouseover", function () {
    cell.style.backgroundColor = getRandomColor();
});

cell.addEventListener("click", function () {
    const color = document.getElementById("color-input").value;
    cell.style.backgroundColor = color;
});

cell.addEventListener("dblclick", function () {
    const color = document.getElementById("color-input").value;
    for (let i = 6; i < 32; i += 5) {
        const cell = document.getElementById(String(i));
        cell.style.backgroundColor = color;
    }
});