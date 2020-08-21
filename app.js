const text = document.getElementById("text");
// const document = document.getElementById("document");
const itemA = document.getElementById("item1");
const awesome = document.getElementById("awesome");
const formality = document.querySelector("forms");
const gold = document.querySelector("gold");

const key = "AIzaSyC4VwycfpPPb8GCUiIwrdmmBjOJcE9LrzM"
 itemA.addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
         event.preventDefault();

         formality.reset();

   }
 });


 function translate(text, source, target) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${key}`;
     const body = {
         q: text,
        source: source,
         target: target,
         format: 'text'
     }
    
     return fetch(url, {method: 'POST', body: JSON.stringify(body) }).then(res => res.json())
 }

 translate();

 gold.addEventListener('click', ($event) => {
    $event.preventDefault();
 
    gold.textContent = translate();
});


// function getLang() {
//     const url = `https://translation.googleapis.com/language/translate/v2/languages?key=${key}`;
    
//     fetch(url).then(res => {  return res.json() }).then(data => console.log("lang", data))
// }
// getLang()
