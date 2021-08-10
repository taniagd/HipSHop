$(document).ready(function(){
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    if(params.get("idproduct")){
      console.log(typeof params.get("idproduct"));
      let request = $.ajax({
        url: "http://localhost:8080/product/"+ params.get("idproduct"),
        method: "GET"
      });

      request.done(function( data ) {
          $("#container-item").append(
            '<div class="container-title-item">'+
              '<h1 class="title-item">'+data["product"]["productName"]+'</h1>'+
            '</div>'+
            '<div class="img-container">'+
              '<img class="main-img-item" src="'+data["product"]["image"]+'" alt="">'+
            '</div>'+
            '<div class="imgs-detail-container">'+
              '<img class="img-detail-item" src="'+data["product"]["image"]+'" alt="">'+
            '</div>'
          );
        

      });

      request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );

      });

    }

  });