const sourceInputElem = document.getElementById("texter");
const sourceLangElem = document.getElementById("selectA");
const targetLangElem = document.getElementById("selectB");
const translateBtn = document.getElementById("submit");
const resultsDiv = document.querySelector(".'item2");
const key = "AIzaSyDp27j-6ch9gnZVY6-4GwbvzLn-5TjqYEQ";

translateBtn.addEventListener('click', async ($event) => {
   const text = sourceInputElem.value;
   const source = sourceLangElem.value;
   const target = targetLangElem.value;

   console.log( sourceInputElem.value,
    sourceLangElem.value,
    targetLangElem.value
   )
   const data = await translate(text, source, target);
   const res = data.data.translations[0].translatedText;

   resultsDiv.textContent = res;
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

