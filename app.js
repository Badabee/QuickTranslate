const text = document.getElementById("text");
const document = document.getElementById("document");
const itemA = document.getElementById("item1");
const awesome = document.getElementById("awesome");
const formality = document.querySelector("forms");
const gold = document.querySelector("gold");

itemA.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

gold.addEventListener('click', ($event) => {
    $event.preventDefault();
    alert('Form Submitted Successfully');
    formality.reset();
});