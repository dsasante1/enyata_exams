// Create a class with two functions to handle the form. One should be an asynchronous
// function that should ensure that all fields are filled.




// The second one should form a sentence with the first four fields in this way.
// - My name is {first name} {last name}. I am from {country}. I am {age} years
// old. 


let form = document.querySelector("form");
let userName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
const warning = document.getElementById("warning");


form.addEventListener("submit", function(e) {
    e.preventDefault()

    if (userName.value === '' || lastName.value === ''){
        warning.style.display = "block"

        setTimeout(() => {
            warning.style.display = "none"
        }, 5000)
        return
    }else{
        alert(`
        Hello ${userName.value}🎊,
        your form has been submitted succesfully.
        Your lastName is ${lastName.value}.`
        );

        userName.value = "";
        lastName.value = "";
    }

});


// let form = document.querySelector("form");
// let userName = document.querySelector("#firstName");
// let lastName = document.querySelector("#lastName");
// const warning = document.getElementById("warning");

let userFirstName = document.querySelector("#firstName");
let userLastName = document.querySelector("#lastName");
let userCountry = document.querySelector("#country");
let userAge = document.querySelector("#age");


// async function completeForm(){
//     let formCompleted = await ();
//     return formCompleted
// }


function fetchUserDetails(userFirstName, userLastName, userCountry, userAge){

    alert(`My name is ${userFirstName} ${userLastName}. I am from ${userCountry}. I am ${userAge} years old. `)
}