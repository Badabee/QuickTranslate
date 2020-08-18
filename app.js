const text = document.getElementById("text");
const document = document.getElementById("document");
const itemA = document.getElementById("item1");

itemA.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
    }
});