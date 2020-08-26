const sourceInputElem = document.getElementById("texter");
const sourceLangElem = document.getElementById("selectA");
const targetLangElem = document.getElementById("selectB");
const translateBtn = document.getElementById("submit");
const resultsDiv = document.querySelector(".item2A");
const key = "AIzaSyDp27j-6ch9gnZVY6-4GwbvzLn-5TjqYEQ";


//SELECT DROPDOWN
function langList (languages) { 
    languages.forEach(language => {
        const option = `<option value=${language.language}>${language.name}</option>`
        sourceLangElem.innerHTML += option;
        targetLangElem.innerHTML += option;
    })

}

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
   console.log(resultsDiv);
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

(() => {
    const url = `https://translation.googleapis.com/language/translate/v2/languages?key=${key}&target=en`;
    
    fetch(url, {method: 'GET' })
        .then(res => res.json())
        .then(data => langList(data.data.languages))
        .catch(err => console.log(err))
})()

//DICTIONARY API
function dictionary() {
    const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=81027104-8893-48ea-a529-d02ae4855353";
 
    fetch(url, {method: 'POST' })
        .then(res => res.json())
        .then(data => meta.id, stems, syns)
        .catch(err => console.log(err))

        console.log(data);
}


// const getLanguages = async (data) => {
//     const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=81027104-8893-48ea-a529-d02ae4855353`);
//     const data = await res.json();
  
//     return data;
//   }
//   getLanguages();



