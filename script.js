const grnerateBtn = document.getElementById("grnerateBtn");
const colorContainer = document.querySelector(".colorContainer");

grnerateBtn.addEventListener("click", generatePalette);
//copy the hex code 
colorContainer.addEventListener("click", function (event) {
    //copy button
    if (event.target.classList.contains("copy-btn")) {
        const hexValue = event.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue).then(() => showCopySuccess(event.target));
    } else if (event.target.classList.contains("color")) {
        const hexValue = event.target.nextElementSibling.querySelector(".hex-value").textContent;
        navigator.clipboard.writeText(hexValue).then(() => showCopySuccess(event.target.nextElementSibling.querySelector(".copy-btn")));
    }
});

function showCopySuccess(element) {
    element.classList.remove("fa-regular", "fa-copy");
    element.classList.add("fa-solid", "fa-check");

    element.style.color = "green";

    setTimeout(() => {
        element.classList.remove("fa-solid", "fa-check");
        element.classList.add("fa-regular", "fa-copy");
        element.style.color = "";
    }, 1500);
}

function generatePalette() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        colors.push(generateRoandomColor());
    }
    updateColorDisplay(colors);
}

//this method will generate a random color
function generateRoandomColor() {
    const letters = "0123456789ABCDEF";//0-15
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//update evrey color and hex 
function updateColorDisplay(colors) {
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    });
}

// whene the user reload the page will show a new palette
generatePalette();