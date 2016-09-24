$(document).ready(function(e) {
   var w = screen.width;
   var h = screen.height;
   $("#mouse_div").css({"margin-top":""+(h * 0.03)+"px"});

   
    $(".webpage-info").mouseenter(function(e) {
	   var bck = document.getElementById("background");
	      $("#background").attr('src','videos/webpage2.mp4');
	      bck.play();
   });
   
   $(".webpage-info").mouseleave(function(e) {
    var bck = document.getElementById("background");
	     $("#background").attr('src','videos/banner2.mp4');
	     bck.play();
    });
   
    /*----------- function mobile ------------------*/
    var device = navigator.userAgent; 
    if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)) {
		/*window.location.href = "http://www.metafisicaactiva.com/Mobile.php ";*/
    }
   if ( device.match(/Ipad/i) )
      {
	    $("video").css({"display":"none"});
		 //$('body').css({"background-image":"url(http://www.metafisicaactiva.com/paginasweb//videos/gif.gif"});
       }else{ }
   
});

function Scroll(){
	  var ypos = window.pageYOffset;
	  if (ypos < 10){
		  //top.style.height = "70px"
		 $("#mouse_div").fadeIn("slow");
		 
	  }else{
		 
		 $("#mouse_div").fadeOut("slow"); 
      }
	 
	}
	window.addEventListener("scroll",Scroll);