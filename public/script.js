
const button = document.getElementById("messageBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
    result.textContent = "Connecting to server...";

    try {
        const response = await fetch("/api/message");
        const data = await response.json();
        result.textContent = data.message;
    } catch (error) {
        result.textContent = "Could not connect to the server.";
    }
});

