console.log("Project-4");


const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false
// console.log(name,email,phone);

name.addEventListener('blur', ()=>{

console.log("Name is lurred")
 //VALIDATE name
 let regex = /^[a-zA-z]([0-9A-Za-z]){3,10}$/;
 let   str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Matched");
        name.classList.remove('is-invalid');
         validUser = true;
    }else{
        console.log("no Matched");
        name.classList.add('is-invalid');
        validUser = false;
    }
})
     
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

    phone.addEventListener('blur', ()=>{

        console.log("phone is lurred")
         //VALIDATE phone

         let regex = /^([0-9]){10}$/;    ///^[a-zA-z]([0-9A-Za-z]){3,10}$/;
         let   str = phone.value;
            console.log(regex, str);
         if(regex.test(str)){
            console.log("Matched");
            phone.classList.remove('is-invalid');
            validPhone = true;
        }else{
            console.log("no Matched");
            phone.classList.add('is-invalid');
            validPhone = false;
        }

        })

        const sumit = document.getElementById("sumit");
         sumit.addEventListener('click', (e)=>{
            e.preventDefault();
          console.log("you clicked on sumit");


          if(validEmail && validPhone && validUser){
              console.log("Your form isa valid");
              let success = document.getElementById("success");
              success.classList.add("show");
              failure.classList.remove("show");
          } else{
              console.log("plz fullfill oalll the details");
              let failure = document.getElementById("failure");
              failure.classList.add("show");
              success.classList.remove("show");
          }
              
              
         }) 