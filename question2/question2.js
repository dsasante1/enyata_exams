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



class UserForm {

    constructor(userFirstName, userLastName, userAge, userCountry){
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userAge = userAge;
        this.userCountry = userCountry;
    }

    async completeForm(){
    
    if(this.userFirstName === "" || this.userLastName === "" || this.userCountry !== "" || this.userAge === ""){
            throw new Error('fill all the fields of the form')
        }
    } 
    


    returnUserDetails(){

   
        alert(
            `My name is ${this.userFirstName} ${this.userLastName}.
            I am from ${this.userCountry}. I am ${this.userAge} years old.
            `) 
}



}



let userFormDetails = new UserForm(userFirstName, userLastName, userAge, userCountry)

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    try{
        await userFormDetails.completeForm();
        userFormDetails.returnUserDetails();

    }catch(error){
        alert(error.message)
    }

});











