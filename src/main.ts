const codeElement = document.getElementById("Text-1");
const keyElement = document.getElementById("formkey");
const locationElement = document.getElementById("location");

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (codeElement) {
        codeElement.textContent = event.keyCode;
    }
    if (keyElement) {
        keyElement.textContent = event.key;
    }
    if (locationElement) {
        locationElement.textContent = event.location.toString();
    }
});
