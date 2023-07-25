// Create a class with two functions to handle the form. One should be an asynchronous
// function that should ensure that all fields are filled.




// The second one should form a sentence with the first four fields in this way.
// - My name is {first name} {last name}. I am from {country}. I am {age} years
// old. 


let form = document.querySelector("form");
let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
const warning = document.getElementById("warning");


form.addEventListener("submit", function(e) {
    e.preventDefault()

    if (userName.value === '' || email.value === ''){
        warning.style.display = "block"

        setTimeout(() => {
            warning.style.display = "none"
        }, 5000)
        return
    }else{
        alert(`
        Hello ${userName.value}🎊,
        your form has been submitted succesfully.
        Your email is ${email.value}.`
        );

        userName.value = "";
        email.value = "";
    }

});














// function hello(){
//     let doc = document.body;
//     doc.hidden = true
// }


// doc.getElementById("subtmitButton").addEventListener("click", hello);




// let userFirstName = document.getElementById('picture');
// console.log(doc)
// let userLastName = 
// let userCountry = 
// let userAge = 


// async function completeForm(){
//     let formCompleted = await ();
//     return formCompleted
// }


// function fetchUserDetails(userFirstName, userLastName, userCountry, userAge){

//     return `My name is ${userFirstName} ${userLastName}. I am from ${userCountry}. I am ${userAge} years old. `
// }