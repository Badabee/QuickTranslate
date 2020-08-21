

// Run at top to get language choices first
getLanguages().then((languages) => {
    languages.forEach(lang => {
      // Output to Select
      select.innerHTML = "<option value=${value}>value</option>"
    });
  })

  const translationForm = document.forms.translation;

  const query = translationForm.query.value;
  const target = translationForm.source.value;


  const translate = async (query, source, target) =>  {
    const res = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${query}&target=${target}&source=${sourc}&format=text&key=`);
    const data = await res.json();

    return data.data.translate.translatedText;
  }

  const getLanguages = async (data) => {
    const res = await fetch(`https://translation.googleapis.com/language/translate/v2/languages?key=`);
    const data = await res.json();

    return data.data.languages.map(langObject => langObject.language);
  }

  translationForm.addEventListener("submit", async e => {
    e.preventDefault();

    const translation = await translate(query,....);
    // Query textarea first
    textareaElement.innerText(translation);

  })
  