$(document).ready(function(){
    console.log("ya se cargo")
    let contador=0;
    $(".btn").click(function(){
        contador=contador +1
        swal("title","el contador va en: " + contador,"success")
    });
});