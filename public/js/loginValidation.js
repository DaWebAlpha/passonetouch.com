const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.querySelector("form")
const validateNameMessage = document.querySelector(".validateNameMessage")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    if (!username.value.trim()) {
      validateNameMessage.textContent = "Username is required.";
      return;
    }
    if (!password.value.trim()) {
      validateNameMessage.textContent = "Password is required.";
      return;
    }

    form.submit();
})


