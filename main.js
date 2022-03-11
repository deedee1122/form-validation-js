let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let msg = document.getElementById("msg")


/**
 * ! this is a submit event Handler
 */

form.addEventListener('click',(e)=>{
e.preventDefault()
validation()

})

/**
 * ! THis handles form validation
 */

let validation = ()=>{

  if(email.value ==="" || username.value ==="" || password.value===""){
    // msg.style.color = "red"
    msg.classList.add("text-danger")
    msg.innerHTML = "Input cannot be blank"
  }
  else{
    if(password.value.length<6){
      msg.innerHTML = "Please pick a password of atleast 6 characters"
    }
    else{
      msg.classList.remove("text-danger")
      msg.classList.add("text-success")
      msg.innerHTML = "Account Successfully Created !"
    }
  }
}