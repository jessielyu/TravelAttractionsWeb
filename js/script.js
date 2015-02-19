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
    if (top>358 && top<1190) {
    	$(".nav ul li a").removeClass("highlight");
    	$(".nav ul li a#TW").addClass("highlight");
    }
    else if (top>1190 && top<1567) {
    	$(".nav ul li a").removeClass("highlight");
    	$(".nav ul li a#HI").addClass("highlight");
    }
    else if (top>1567 && top<2368) {
        $(".nav ul li a").removeClass("highlight");
        $(".nav ul li a#ORD").addClass("highlight");
    }
    else if (top>2368 && top<3439) {
        $(".nav ul li a").removeClass("highlight");
        $(".nav ul li a#CHI").addClass("highlight");
    }
    else if (top>3439 && top<4000) {
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

var flag = true;
function resize() {
    if(flag) {
        document.getElementById("cuteicon").style.width = "4%";
        document.getElementById("cuteicon").style.height = "4%";
    } else {
        document.getElementById("cuteicon").style.width = "10%";
        document.getElementById("cuteicon").style.height = "10%";
    }
    (flag)?flag=false:flag=true;
} 

function modal() {
        document.getElementById("window").style.display = "block";
        console.log("Jessiehaha");
        break;
}

function closeModal() {
        document.getElementById("window").style.display = "none";
        console.log("haha");
        break;
}