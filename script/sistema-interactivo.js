// CONSOLE INTERACTION

let consoleName = prompt("Please enter your name:");
let consoleAgeInput = prompt("Please enter your age:");
let consoleAge = Number(consoleAgeInput);

if (!consoleName.trim()) {
    alert("Error: You must enter a valid name.");
    console.error("Error: Name empty.");
} else if (isNaN(consoleAge) || consoleAge <= 0) {
    alert("Error: Please enter a valid number for age.");
    console.error("Error: Invalid age.");
} else {
    if (consoleAge < 18) {
        alert(`Hello ${consoleName}, you are a minor. Keep learning and enjoying coding!`);
    } else {
        alert(`Hello ${consoleName}, you are an adult. Get ready for great opportunities in the programming world!`);
    }
    console.log("Entered Name (console):", consoleName);
    console.log("Entered Age (console):", consoleAge);
}

// WEBPAGE INTERACTION

const userNameInput = document.getElementById("userName");
const userAgeInput = document.getElementById("userAge");
const submitButton = document.getElementById("submitBtn");
const messageParagraph = document.getElementById("message");

submitButton.addEventListener("click", () => {
    const nameValue = userNameInput.value.trim();
    const ageValue = Number(userAgeInput.value);

    // Validate inputs
    if (!nameValue) {
        messageParagraph.textContent = "Error: Please enter your name.";
        messageParagraph.style.color = "red";
        return;
    }

    if (isNaN(ageValue) || ageValue <= 0) {
        messageParagraph.textContent = "Error: Please enter a valid age.";
        messageParagraph.style.color = "#700000ff";
        return;
    }

    // Dynamic messages based on age
    if (ageValue < 18) {
        messageParagraph.textContent = `Hello ${nameValue}, you are a minor. Keep learning and enjoying coding!`;
        messageParagraph.style.color = "#333333";
    } else {
        messageParagraph.textContent = `Hello ${nameValue}, you are an adult. Get ready for great opportunities in the programming world!`;
        messageParagraph.style.color = "#333333";
    }

    console.log("User Name (web):", nameValue);
    console.log("User Age (web):", ageValue);
});