let KeyCode: number;
let KeyCode2: string = "KeyCode2";
let KeyCode3 = document.getElementById("Text-1") as HTMLInputElement;
document.addEventListener("keypress", event => {
    KeyCode = event.keyCode;
    let KeyCode2: string = KeyCode.toString();
    KeyCode3.textContent = KeyCode2;
    console.log(event);
});

