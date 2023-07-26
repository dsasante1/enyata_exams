// Create a class with two functions to handle the form. One should be an asynchronous
// function that should ensure that all fields are filled.




// The second one should form a sentence with the first four fields in this way.
// - My name is {first name} {last name}. I am from {country}. I am {age} years
// old. 


let form = document.querySelector("form");
let userFirstName = document.querySelector("#firstName");
let userLastName = document.querySelector("#lastName");
let userCountry = document.querySelector("#country");
let userAge = document.querySelector("#age");



form.addEventListener("submit", function(e) {
    




});





function textFieldsNotEmpty(userFirstName, userLastName, userCountry, userAge){
    if(userFirstName !== "" && userLastName !== " "){
        if (userCountry !== "" && userAge !== ""){
            return true
        }
    } return false

}



async function completeForm(userFirstName, userLastName, userCountry, userAge){

    let formCompleted = await textFieldsNotEmpty(userFirstName, userLastName, userCountry, userAge);
    
    if (formCompleted === true){
        return 'form completer by user'
    }else{
        return 'user must complete form'
    }
   
}



function fetchUserDetails(userFirstName, userLastName, userCountry, userAge){

    if (formCompleted === true){
        return(
            `My name is ${userFirstName} ${userLastName}.
            I am from ${userCountry}. I am ${userAge} years old.
            `)
        
         
    }else{
        alert('the user has not completed the form')
    }
   
   
    

}