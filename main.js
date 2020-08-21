

// Run at top to get language choices first
getLanguages().then((languages) => {
    languages.forEach(lang => {
      // Output to Select
      select.innerHTML = "<option value=${value}>value</option>"
    });
  })
  const translationForm = document.forms.translation;

  const query = translationForm.query.value;
  const target = translationForm.source.value
  