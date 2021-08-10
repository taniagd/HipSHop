
$(document).ready(function(){
  let queryString = window.location.search;
  let params = new URLSearchParams(queryString);
  if(params.get("artista")){
    let request = $.ajax({
      url: "http://localhost:8080/user/"+ params.get("artista"),
      method: "GET"
    });
    
    request.done(function( data ) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        $("#container-artist").append(
          '<div class="col">'+
            '<div class="foto-artista">'+
                '<a href= "artista-personal.html?artista='+data[index]["id"]+'">'+
                    '<img src="'+data[index]["image"]+'" class="img-fluid" alt="Foto de la rapera">'+
                    '<p class="nombre-artista">'+data[index]["username"]+'</p>'+
                '</a>'+
            '</div>'+
          '</div>'
        );
      }
    });
    request.fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });
  }
});