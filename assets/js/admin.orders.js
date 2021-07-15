$(document).ready(function(){

  /*
    Show and hide the container to add the guide number
  */
  $(".add-number-guide").click(function(){
    if($(this).siblings('.input-container-number-guide').css("display") === "block"){
      $(this).siblings('.input-container-number-guide').css({"display":"none"});
    }else{
      $(this).siblings('.input-container-number-guide').css({"display":"block"});
    }
  });

  /*
    Oculta la caja donde se ingresa el numero de guia
  */
  $(".input-number-guide").keydown(function(e){
    if(e.originalEvent.which === 13){
      $(this).parent().css({"display":"none"})
    }
  });
});