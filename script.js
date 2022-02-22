const form=document.getElementById("form");
 const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
form.addEventListener('submit',(e)=>{
e.preventDefault();

checkInputs();
});

 function checkInputs(){
    //get the values from inputs
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const password2value=password2.value.trim();
    
    if(usernamevalue ===''){
    //show error
    //add error class
    setErrorFor(username,'username cannot be blank');
    }
    else if (usernamevalue ==='1') {
        setErrorFor(username,'username cannot be number');
    }else{
    //add success class
    setSuccessFor(username);
    }
if(emailvalue ===''){
setErrorFor(email,'Email cannot be blank');
}else if(!isEmail(emailvalue))
{
setErrorFor(email,'Email is not valid')
}else{
    setSuccessFor(email);
}

if(passwordvalue===''){
    setErrorFor(password,'password cannot be blank');
}else{
    setSuccessFor(password);
}
if(password2value===''){
    setErrorFor(password2,'password cannot be blank')
}else if(passwordvalue !== password2value){
setErrorFor(password2,'password2 does not match')
}else{
    setSuccessFor(password2);
}

}
    function setErrorFor(input,message)
    {
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
     small.innerHTML=message;
    //add error class
    formControl.className='form-control error';
    }
    function setSuccessFor(input)
    {
        const formControl=input.parentElement;
        formControl.className='form-control success';
    }
    function isEmail(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }