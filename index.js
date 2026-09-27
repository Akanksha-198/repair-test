const messageDisplay = document.createElement("div");
messageDisplay.id = "message";
messageDisplay.textContent = "Goodbye!";
document.body.appendChild(messageDisplay);

// Create buttons
const button = document.createElement("button");
button.textContent = "Hello Good morning how are you";
button.id = "helloGoodMorningButton";
button.addEventListener("click", () => {
    messageDisplay.textContent = "Hello Good morning how are you";
});
document.body.appendChild(button);

const goodDayButton = document.createElement("button");
goodDayButton.textContent = "Good day!";
goodDayButton.addEventListener("click", () => {
    messageDisplay.textContent = "Good day!";
});
document.body.appendChild(goodDayButton);

const byeButton = document.createElement("button");
byeButton.textContent = "Goodbye!";
byeButton.addEventListener("click", () => {
    messageDisplay.textContent = "Goodbye!";
});
document.body.appendChild(byeButton);