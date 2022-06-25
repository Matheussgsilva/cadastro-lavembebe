const submit = document.querySelector("#submit");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault()
  
    const emailField = document.querySelector("#email");
    const selectField = document.querySelector("#gestation-select");
    let valid = true;
  
    if (emailField.value === '' || !emailField.value.includes('@')) {
      const emailError = document.querySelector("#emailError");
      emailError.classList.add("visible");
      emailField.classList.add("invalid");
      emailError.setAttribute('aria-hidden', false);
      emailError.setAttribute('aria-invalid', true);
  
    } else if (selectField.options[selectField.selectedIndex].value < 1) {
        const selectError = document.querySelector("#selectError");
        selectError.classList.add("visible");
        selectField.classList.add("invalid");
        selectError.setAttribute('aria-hidden', false);
        selectError.setAttribute('aria-invalid', true);
    
      }
    else {
        window.location.href = `https://lista.lavembebe.com.br/cadastro?email=${emailField.value}&babyWeek=${selectField.options[selectField.selectedIndex].value}&utm_source=blog&utm_medium=cadblog&utm_campaign=normal_blog`
        return valid;
    }
  
}
  