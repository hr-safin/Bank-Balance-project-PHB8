const submitButton = document.getElementById("submit-btn")

submitButton.addEventListener("click", function(){
    const emailField = document.getElementById("email")
    const passwordField = document.getElementById("password")
    
    if(emailField.value === "safin@gmail.com" && passwordField.value === "mahi"){
        window.location.href = "account.html"
    }else{
        alert("Invalid email or password")
    }
})