$(".project_body").mouseover(function(event){
   
   
    var panel=$(event.target).next(".panel");
  
    panel.fadeIn("slow");
    panel.fadeToggle(5000);
  });
 
   
  
  