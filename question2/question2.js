// Create a class with two functions to handle the form. One should be an asynchronous
// function that should ensure that all fields are filled.




// The second one should form a sentence with the first four fields in this way.
// - My name is {first name} {last name}. I am from {country}. I am {age} years
// old. 




async function completeForm(){
    let formCompleted = await ();
    return formCompleted
}


function fetchUserDetails(userFirstName, userLastName, userCountry, userAge){

    return `My name is ${userFirstName} ${userLastName}. I am from ${userCountry}. I am ${userAge} years old. `
}