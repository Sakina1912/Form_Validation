const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//check for the required fields
function checkRequired(inputArr){
    inputArr.forEach(function (input){
        if(input.value ===''){
            showError(input,`${getName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

// get the names of the fields
function getName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

//check length of username and password
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getName(input)} should be atleast of ${min} characters`)
    }else if(input.value.length > max){
        showError(input,`${getName(input)} should be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

//show error message
function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

//show success
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//email validation
function emailValidator(input){
    const reg = /\S+@\S+\.\S+/
    if(reg.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,`${getName(input)} is not valid`)
    }
}

//check if password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`${getName(input2)} does not match`)
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2])
    checkLength (username,3,15)
    checkLength(password,6,12)
    emailValidator(email)
    checkPasswordMatch(password,password2)
});
