document.getElementById("signIn-btn").addEventListener("click", function(){
    // Get input user & pass value
    const username = document.getElementById("input-user").value;
    const password = document.getElementById("input-pass").value;
    
    if (username == 'admin' && password == 'admin123') {
        alert("Login Successful")
        window.location.assign('home.html')
    } else {
        alert("Login Failed")
        return;
    }
})