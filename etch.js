const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize");

initializeGrid = function(n) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

initializeGrid(16);

document.addEventListener("mouseover", function(event) {
    const target = event.target;
    if (target.className == "square") {
        target.style.backgroundColor = "black";
    }
});

resizeButton.addEventListener("click", function() {
    n = parseInt(window.prompt("Enter grid size (min 4, max 100):"), 10);
    n = (n < 4) ? 4 : ((n > 100) ? 100 : n);
    initializeGrid(n);
});
