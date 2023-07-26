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
    
   
        await function checkFields(){
            
            if(this.userFirstName.value === "" || this.userLastName.value === "" || this.userCountry.value === "" || this.userAge.value === ""){
                return new Error('a form is empty. fill it')
            }else{
                return 'forms filled'
            }
        } 
    } 
    


    returnUserDetails(){

        if(this.completeForm instanceof Error){
            alert('fill the fields of the form')
        }
        alert(`My name is ${this.userFirstName.value} ${this.userLastName.value}. I am from ${this.userCountry.value}. I am ${this.userAge.value} years old.`) 
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











