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
    var top = $(window).scrollTop();
    if (top > 10) {
    	//small
    	$(".nav").addClass("smallerNav");
    	$(".nav ul li a").addClass("smallerNav ul li a");
    } else {
    	//big
    	$(".nav").removeClass("smallerNav");
    	$(".nav ul li a").removeClass("smallerNav ul li a");
    }
    console.log(top);
    if (top>358 && top<1002) {
    	$(".nav ul li a").removeClass("highlight");
    	$(".nav ul li a#TW").addClass("highlight");
    }
    else if (top>1002 && top<1178) {
    	$(".nav ul li a").removeClass("highlight");
    	$(".nav ul li a#HI").addClass("highlight");
    }
    else if (top>1178 && top<1777) {
        $(".nav ul li a").removeClass("highlight");
        $(".nav ul li a#ORD").addClass("highlight");
    }
    else if (top>1777 && top<2340) {
        $(".nav ul li a").removeClass("highlight");
        $(".nav ul li a#CHI").addClass("highlight");
    }
    else if (top>2340 && top<2387) {
        $(".nav ul li a").removeClass("highlight");
        $(".nav ul li a#LAX").addClass("highlight");
    }
    else 
    {
    	$(".nav ul li a").removeClass("highlight");
    }
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
        var targetOffset = $target.offset().top-30;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


$(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    var a = $('a.control_next');
});



//modal window function
$(document).ready(function() {    
    //select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //transition effect        
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.8);    
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
    
        //transition effect
        $(id).fadeIn(2000); 
    
    });
    
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });        
    
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });            
    
});
