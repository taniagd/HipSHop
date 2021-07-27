$(document).ready(function(){

  $(".format-disc").click(function(){
    if($(this).attr("class") === "format-disc selected"){
      $(this).attr("class", "format-disc")
    }else{  
      $(".format-disc").each(function(){
        $(this).attr("class", "format-disc");
      });
      $(this).attr("class", "format-disc selected");
    }
  });

  /*
    Player in the list of songs
  */
  $(".img-icon-play-song").click(function(){
    if( $(this).attr("data-src-audio") ===  $("#sourceaudio").attr("src") ){
      if($(this).attr("src") === "./assets/img/play.png"){
        $("#audiotag")[0].play();
        $(this).attr("src", "./assets/img/pause.png");
      }else{
        $("#audiotag")[0].pause();
        $(this).attr("src", "./assets/img/play.png");
      }
      
    }else{
      $(".img-icon-play-song").each(function(){
        $(this).attr("src", "./assets/img/play.png");
      });
      let audioPath = $(this).attr("data-src-audio");
      $("#sourceaudio").attr("src", audioPath);
      $("#audiotag")[0].load();
      $("#audiotag")[0].play();
      $(this).attr("src", "./assets/img/pause.png")
    }
  });
  /*
    Favorite icon
  */
    $(".favorite-icon").click(function(){
      if($(this).attr("fill") === "#000"){
        $(this).attr("fill", "red");
        $(this).children(".favorite-icon-outline").css({"display":"none"});
        
        $(this).children(".favorite-icon-filled").css({"display":"block"});
      }else{  
        $(this).attr("fill", "#000");
        
        $(this).children(".favorite-icon-outline").css({"display":"block"});
        
        $(this).children(".favorite-icon-filled").css({"display":"none"});
      }
    });
});