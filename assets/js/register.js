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
  const formLogin = document.querySelector('#login');
  formLogin.addEventListener('submit', (e) =>{
  
      e.preventDefault(e);
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
                  url = window.location;
                  console.log(url);//imprime la localizacion en la que estamos ubicados
  
                  //Construyendo nuestro path, es decir la ruta en donde estamos
                  const path = url.pathname.substring(0,url.pathname.lastIndexOf('/') + 1)
                  //El substring hace un recorte del texto, va del inicio hasta el ultimo "/"
  
                  //Lo redireccionamos a la ottra pagina
                  location.href = path + 'success.html';
              }else{
                  localStorage.removeItem('token');
                  swal("No se ha podido iniciar sesión", "El campo A.K.A. o el campo password son incorrectos", "error");
              }
          })
      }
  });
  
  /*.then((resp) => resp.text()).then(token => {
      if(token.includes('Bearer')){
          //console.log(token);
          localStorage.setItem('token',token);
          url = window.location;
          console.log(url);
          const path = url.pathname.substring(0,url.pathname.lastIndexOf('/') + 1)
  
          location.href = path + 'success.html';
      }else{
          localStorage.removeItem('token');
          emailError.textContent = 'Usuario o contraseña incorrecta';
      }
  })*/
});