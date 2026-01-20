console.log("JS linked successfully");
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.innerText);
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (
        (key >= "0" && key <= "9") ||
        ["+", "-", "*", "/", ".", "%"].includes(key)
    ) {
        handleInput(key);
    }
    else if (key === "Enter") {
        handleInput("=");
    }
    else if (key === "Backspace") {
        handleInput("⌫");
    }
    else if (key === "Escape") {
        handleInput("C");
    }
});

function handleInput(value) {
    if (value === "C") {
        currentValue = "";
        display.value = "";
    }
    else if (value === "⌫") {
        currentValue = currentValue.slice(0, -1);
        display.value = currentValue;
    }
    else if (value === "=") {
        try {
            currentValue = eval(currentValue).toString();
            display.value = currentValue;
        } catch {
            display.value = "Error";
            currentValue = "";
        }
    }
    else {
        currentValue += value;
        display.value = currentValue;
    }
}