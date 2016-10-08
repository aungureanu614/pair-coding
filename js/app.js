$(document).ready(function(){

  $("#menu").on("click",function(){
    $(".modal").css("display","block");
  });  

  $(".close").on("click", function(){
    $(".modal").css("display","none");
  });

  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      $(".nav-bar").css("background-color", "rgb(0, 15, 51)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".nav-bar").css("background-color", "transparent"); // if not, change it back to transparent
    }
  });

});

