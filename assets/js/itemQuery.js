$(document).ready(function(){
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    if(params.get("branch")){
      console.log(typeof params.get("branch"));
      let request = $.ajax({
        url: "http://localhost:8080/product/"+ params.get("idTypeProduct"),
        method: "GET"
      });

      request.done(function( data ) {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
          $("#container-item").append(
          '<h1 class="title-item">Playera "Masta Quba"'+
                  '</h1>'+
                  '<a href="artista-personl.html?artista='+data[index]["id"]+'" class="autor-link">Masta Quba</a>'+
                '</div>'+
                '<div class="img-container">'+
                  '<img src="'+ data[index]["image"]>''+
                '</div>'+
                '<div class="imgs-detail-container">'+
                  '<img class="img-detail-item" src="'+ data[index]["image"]>''+
                '</div>'
          );
        }

      });

      request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );

      });

    }

  });