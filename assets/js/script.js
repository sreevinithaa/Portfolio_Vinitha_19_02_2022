$(".project_body").mouseover(function(event){
    $(event.target).next("img").css("opacity",".1");
    var panel=$(event.target).next(".panel");
  
    panel.fadeIn("slow");
    panel.fadeToggle(3000);
  });
  