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

});