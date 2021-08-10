$(document).ready(function(){
  
  $("#registerButton").click(function(){
    let username = $("#usernameRegister").val();
    let password = $("#passwordRegister").val();
    let passwordConfirm = $("#passwordRegisterConfirm").val();
    if(username &&password &&  passwordConfirm){
      if(password !== passwordConfirm){
        swal ( "Oops" ,  "Las contraseñas no coinciden" ,  "error" )
      }else{
        var request = $.ajax({
          url: "http://localhost:8080/user",
          method: "POST",
          contentType:"application/json",
          data: JSON.stringify({
            "username": username,
            "password": password
          })
        });
        
        request.done(function( data ) {
          if(data.id != null){
            swal("Genial", "Ya eres parte de HipShop", "success");
          }else{
            swal ( "Oops" ,  "Ese nombre de usuario ya existe" ,  "error" )
          }
        });
      }
    }else{
      swal ( "Oops" ,  "Ingresa todos los datos" ,  "error" )
    }
    
  });


  $("#login").click(function(){
  
      const email = document.querySelector('#aka');
      const password = document.querySelector('#password');
  
      if(aka.value == ''){
        swal("No se ha ingresado usuario", "El campo A.K.A. no debe estar vacio", "error");
      }
      if(password.value == ''){
        swal("No se ha ingresado contraseña", "El campo password no debe estar vacio", "error");
      }
      if(aka.value != '' && password.value != ''){
          fetch('http://localhost:8080/login',{
              method: 'POST',
              body: JSON.stringify({
                  username: aka.value,
                  password: password.value
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(resp => {
              token = resp.headers.get('Authorization')
              if(token && token.includes('Bearer')){
                  console.log(token);
                  //Almacena en el local storage
                  localStorage.setItem('token',token);
                  //obteniendo urlen donde estamos situados
                  window.location.reload();
                
              }else{
                  localStorage.removeItem('token');
                  swal("No se ha podido iniciar sesión", "El campo A.K.A. o el campo password son incorrectos", "error");
              }
          })
      }
  });
  const isLoggedIn = () => {
    let loggedin = localStorage.getItem('token');
    if(loggedin){
      return true;
    }else{
      localStorage.removeItem('token');
      return false;
    }
  };

  let isLogged = isLoggedIn();
  if(isLogged){
    $("#loginButton").css({"display": "none"})
    $("#signupButton").css({"display": "none"})
  }else{
    $("#nameButton").css({"display": "none"})
    $("#cartIcon").css({"display": "none"})
  }
});