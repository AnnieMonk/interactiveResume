$(document).ready(function(){
  $("#dot").click(function(){
   $("#dot").css("display", "none");
  $(".ActualPage").css("display","block");
  $("body").animate({backgroundColor:"#5DFDCB"}, 10000);
});

$(".nose").click(function(){
  $(".navigationContainer").fadeToggle();
  $(".Likes").fadeOut();
  $(".Gallery").fadeOut();
  $(".Contact").fadeOut();
  $(".AboutMe").fadeOut();
});

$(".izbor").hover(function(){
  $(this).toggleClass("lighten");
  
});



$(".first").click(function(){
  $(".podIzbor").fadeOut();
/*
  $(".Likes").hide();
   $(".Gallery").hide();
  $(".Contact").hide();*/
  $(".AboutMe").fadeToggle("slow");
});
$(".second").click(function(){
  $(".podIzbor").fadeOut("slow");
/*
  $(".Likes").hide();
    $(".Gallery").hide();
  $(".Contact").hide();*/
  $(".Likes").fadeToggle("slow");
});
$(".third").click(function(){
  $(".podIzbor").fadeOut("slow");
/*
  $(".Likes").hide();
    $(".Gallery").hide();
  $(".Contact").hide();*/
  $(".Gallery").fadeToggle("slow");
});
$(".fourth").click(function(){
  $(".podIzbor").fadeOut("slow");
/*
  $(".Likes").hide();
    $(".Gallery").hide();
  $(".Contact").hide();*/
  $(".Contact").fadeToggle("slow");
});

$("#instagram").hover(function(){
  $("#kisnapraforgo").show();
},function(){
    $("#kisnapraforgo").hide();
});



});

