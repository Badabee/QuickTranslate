const text = document.getElementById("text");
const document = document.getElementById("document");
const itemA = document.getElementById("item1");
const awesome = document.getElementById("awesome");
const formality = document.querySelector("form");

itemA.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

awesome.addEventListener("onclick", function(event) {
    if (event.key === "onclick") {
        event.preventDefault();

        formality.reset()
    }
});

