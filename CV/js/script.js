$(function() {
    $(".navbar a, footer a").on("click", function(event) {
        
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });
})


$(document).ready(function (){
  function timer(p,n) {
    n=Math.min(n,p.attr("aria-valuenow"));
    p.css("width", n + "%");
    if(n < p.attr("aria-valuenow")) {
      setTimeout(function() {
        timer(p, n + 10);
      }, 250);
    }
  }
  $(".progress-bar").each(function(i,pb){
    timer($(pb),0); 
  });
}); 

$(function() {
$("#skills-link").on("click", function (){
  function timer(p,n) {
    n=Math.min(n,p.attr("aria-valuenow"));
    p.css("width", n + "%");
    if(n < p.attr("aria-valuenow")) {
      setTimeout(function() {
        timer(p, n + 10);
      }, 250);
    }
  }
  $(".progress-bar").each(function(i,pb){
    timer($(pb),0); 
  });
}); 
})