function validateForm() {
  let x = document.forms["emailForm"]["Email"].value;
  if (x == "") {
    document.forms["emailForm"]["Email"].classList.add('false-input');
    document.getElementsByClassName("error-message")[0].innerHTML = "Please provide a valid email";
    return false;
  }
}

function validateFormEmail() {
  document.forms["emailForm"]["Email"].classList.add('false-input');
  document.getElementsByClassName("error-message")[0].innerHTML = "Please provide a valid email";
}
