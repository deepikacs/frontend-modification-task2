
$(document).ready(function(){

	$(".about1").hide();
    $("#home").click(function(){
    	debugger;
        $(".about1").hide();
        $(".home1").show();
    });
     $("#about").click(function(){
 	debugger;
        $(".home1").hide();
        $(".about1").show();
    });
     debugger;
    $("#info").click(function(){
        debugger
       $(".home1").hide();
        $(".about1").show();
   });
     $("#info1").click(function(){
        debugger
       $(".home1").hide();
        $(".about1").show();
   });
      $("#info2").click(function(){
        debugger
       $(".home1").hide();
        $(".about1").show();
   });
    $("#more").click(function(){
        debugger
       $(".home1").hide();
        $(".about1").show();
   });
   
   // function showAbout() {
   //  debugger;
   //  $(".home1").hide();
   //  $(".about1").show();
   //      // body...
   //  }
// 
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollup').fadeIn();
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });

    // $('.scrollup').click(function () {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 600);
    //     return false;
    // });
    $(".scrollup").click(function() {
        debugger;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // $("#showAbout").click(function(){
        // debugger
    // })

});
