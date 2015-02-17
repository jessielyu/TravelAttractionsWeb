$(document).ready(function() {  
var stickyNavTop = $(".nav").offset().top;  
  
var stickyNavbar = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) 
{   
    $(".nav").addClass("stickyNav");
}
else 
{  
    $(".nav").removeClass("stickyNav"); 
}
};  
   
stickyNavbar();  
  
$(window).scroll(function() {  
    stickyNavbar();  
});  
});  

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


$(document).ready(function(){
$('.bxslider').bxSlider({
  mode: 'horizontal',
  useCSS: false,
  infiniteLoop: false,
  hideControlOnEnd: true,
  easing: 'easeOutElastic',
  speed: 2000
});
});

