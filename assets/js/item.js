$(document).ready(function(){

  /*
    Show in the main div the image choosed for the small boxes.
  */
  $(".img-detail-item").click(function(){
    let src = $(this).attr("src");
    $(".main-img-item").attr("src", src)
  });

  /*
    Select size box
  */
  $(".option-box-size").click(function(){
    if($(this).attr("class") === "option-box-size selected"){
      $(this).attr("class", "option-box-size")
    }else{  
      $(".option-box-size").each(function(){
        $(this).attr("class", "option-box-size");
      });
      $(this).attr("class", "option-box-size selected");
    }
  });
  /*
    Select color
  */
  $(".option-box-color").click(function(){
    if($(this).attr("class") === "option-box-color selected"){
      $(this).attr("class", "option-box-color")
    }else{  
      $(".option-box-color").each(function(){
        $(this).attr("class", "option-box-color");
      });
      $(this).attr("class", "option-box-color selected");
    }
  });
});