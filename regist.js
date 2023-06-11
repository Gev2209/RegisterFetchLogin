const bar = document.querySelector('.fa-bars')
const clBar = document.querySelector('.fa-xmark')
const infoStructure = document.querySelector('.bottomList')
const registerr = document.getElementById('register')
const inputContainer = document.getElementById('input-container')
const barRegister = document.querySelector('.btn2')
const barLogin = document.querySelector('.btn3')
const login  = document.getElementById('login')
const loginContainers = document.getElementById('login-container')
const blurSection = document.getElementById('travelList')
const box1Text = document.querySelector('.box1')
const textBox = document.getElementById('text')



function validationRegister () {
    const form = document.getElementById('form')
    const email = document.getElementById('email').value
    const pattern = /^[^ ]+@[^ ]+\.[a-z,A-Z]{2,3}$/;
    const text = document.getElementById('text')
    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address in Valid.';
        text.style.color = 'green';
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter Valid Email Address';
        text.style.color = 'red' 
    }
    if(email === '') {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
        text.style.color = 'green';
    }
}

function validationLogin () {
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('Email').value;
    const loginText = document.getElementById('loginText')
    const loginPattern = /^[^ ]+@[^ ]+\.[a-z,A-Z]{2,3}$/;

    if(loginEmail.match(loginPattern)) {
        loginForm.classList.add('valid');
        loginForm.classList.remove('invalid');
        loginText.innerHTML = 'Your Email Address in Valid.';
        loginText.style.color = 'black';
        // loginText.style.boxShadow = ' 0 0 10px black'
        loginText.style.borderBottom = '2px solid white'
        loginText.style.width = '50%'
        loginText.style.margin = 'auto'
    } else {
        loginForm.classList.remove('valid');
        loginForm.classList.add('invalid');
        loginText.innerHTML = 'Please Enter Valid Email Address';
        loginText.style.color = 'red'
        loginText.style.borderBottom = '1px solid red'
        loginText.style.width = '50%'
        loginText.style.margin = 'auto' 
    }
    if(loginEmail === '') {
        loginForm.classList.remove('valid');
        loginForm.classList.remove('invalid');
        loginText.innerHTML = '';
        loginText.style.color = 'green';
    }
}

// import { bar,clBar,infoStructure,registerr,inputContainer,barLogin,login,loginContainers} from './helpers.js'
function loginContainerBar () {
    loginContainers.style.display= 'block';
    infoStructure.style.display = 'none'

}
barLogin.addEventListener('click', loginContainerBar    )
  

function loginContainer () {
    setTimeout (() => {
        loginContainers.style.display = 'block'
    
        },1000)
    
}
login.addEventListener('click', loginContainer)

//------------------------------------------------------------------


function inputContainerRegister () {
    setTimeout(() => {
        inputContainer.style.display = 'block'
        inputContainer.style.paddingTop = '20px'
        blurSection.classList.toggle('blur')
    },1000)
  
}
registerr.addEventListener('click',inputContainerRegister)

//-------------------------------------------------------------------

function openBarLogin () {
    inputContainer.style.display = 'block'
    infoStructure.style.display = 'none'
}
barRegister.addEventListener('click',openBarLogin)

//-------------------------------------------------------------

function openBar () {
   bar.style.display = 'none'
   bar.style.transition = 'all ease .8s'
   infoStructure.style.display = 'block'
}

function closeBar () {
    clBar.style.display = 'block'
    
}

function openCloseBar () {
    setTimeout(() => {
        clBar.style.display = 'none'
        bar.style.display = 'block'
        infoStructure.style.display = 'none'
        inputContainer.style.display = 'none'
        loginContainers.style.display = 'none'
    },600)
   
}

bar.addEventListener('click', closeBar)
bar.addEventListener('click',openBar)
clBar.addEventListener('click',openCloseBar)






