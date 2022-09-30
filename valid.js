//Validation code for input
var Username=document.forms['form']['username'];
var password=document.forms['form']['password'];
var username_error=document.getElementById('username_error');
var password_error=document.getElementById('password_error');
Username.addEventListerner('textinput',Username_verify);
Password.addEventListener('textInput' password_verify);
function validated(){
    if(Username.value.length < 9){
        Username.style.border="1px solid red";
        Username_error.style.display = "block";
        Username.focus();
        return false;
    }
    if(Password.value.length < 6){
        Password.style.border="1px solid red";
        Password_error.style.display = "block";
         Password.focus();
        return false;
    }
    function Username_verify(){
        if(Username.value.length>=8){
            Username.style.border = "1px solid silver";
            Username_error-style.display="none";
            return true;
        }
    }
        function password_verify(){
            if(password.value.length>=8){
                Password.style.border = "1px solid silver";
                Password_error-style.display="none";
                return true;
    }
}