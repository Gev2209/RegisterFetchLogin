
const registerBTN = document.querySelector("#reg")
registerBTN.addEventListener("click", function(e){
    e.preventDefault()
    let fullName = document.querySelector("#full_name").value
    let username = document.querySelector("#username").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    sendRequestPost("register", {
        name: fullName,
        username,
        email,
        password
    })
    .then(result => location.href = "./register.html")
    .catch(error => console.log('error', error));
})




function sendRequestPost(url, data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(data);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const baseUrl = "https://logixdevops.com/api/v1/";
   return fetch(baseUrl+url, requestOptions)
      .then(response => response.text())
     
}


function sendRequestGet(url, token){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const baseUrl = "https://logixdevops.com/api/v1/";
     return fetch(baseUrl+url, requestOptions)
      .then(response => response.text())
     
}

// function login (){
//     sendRequestPost("login", {
//         email: "mirzoyan.gevorg.23@gmail.com",
//         password: "qwert123!"
//     });
// }

// login()

// function checkVerificationCode(){
//     sendRequestPost("checkVerificationCode",{
//         code: 3405,
//         email: "mirzoyan.gevorg.23@gmail.com"
//     });
// }

// checkVerificationCode();

// function me(){
//     let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbG9naXhkZXZvcHMuY29tXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTY4NjQ0NDQ1NSwiZXhwIjoxNjg2NDQ4MDU1LCJuYmYiOjE2ODY0NDQ0NTUsImp0aSI6IkNPUUtLRzVVVjloanFRVHUiLCJzdWIiOjMxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.b-vr2uBFj6n5Wxr9xMr_u2VOV7rlribytBTWYSFdIDY";
//     sendRequestGet("me", token)
//     .then(result => {
//       location.href = "./register.html";
//     })
//     .catch(error => console.log('error', error));
// }

// me();

