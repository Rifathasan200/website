



$(".main-slider").slick({
    dots:true,
    prevArrow:'<i class="fa-solid fa-arrow-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right next"></i>',
    speed:1000,
})


$(".item").click(function(){
    $(".iner-img").toggleClass("sidebar")
})

$(".close").click(function(){
    $(".iner-img").removeClass("sidebar")
})


AOS.init();


// $('.jqueryscript').single-progressbar({
    
//           percentage: 99,
    
          
    
//         });      ( note: eta dile nav scroll kaj kore na )

//  $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
	
// ----------------------

$(window).scroll(function (){
    console.log($(window).scrollTop())

    if ($(window).scrollTop() > 250){
      $(".menu").addClass("scroll")
      
    }else{
        $(".menu").removeClass("scroll")
    }
   


    if ($(window).scrollTop() > 600){
        $(".side-button").fadeIn()
        
      }else{
          $(".side-button").fadeOut ()
      }

})


// ---------------------------

$(".side-button").click(function(){
    $("html,body").animate({
        scrollTop: 0
    },1000)
})



// new VenoBox({
//     selector: '.my-image-links',
//     numeration: true,
//     infinigall: true,
//     share: true,
//     spinner: 'rotating-plane'
// });
 