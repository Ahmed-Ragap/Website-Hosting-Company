$(document).ready(function() {
$('button.scroll').fadeOut();
 

  
     

/*this for adding class active to links */
 $('.navbar .nav-item .nav-link').click(function() {
$('this').addClass('active-li').siblings().removeClass('active-li');
});

     /*this for scroll button to top*/
      $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) >= 700) {
            $('button.scroll').fadeIn(1000);
        } else {
            $('button.scroll').fadeOut(1000);
        }
      });
/*to top scroll*/
$('button.scroll').click(function() {
     $('html, body').animate({
      scrollTop: ($('nav').offset().top)
      },1500);
      });
   


/*header botton for scrolling down*/
 $('header button.down, i').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about').offset().top)
      },1500);
      });
   
 
/*this for scrolling nav lis*/

   $('nav ul li:nth-of-type(2)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about').offset().top)
      },1500);
      });

   $('nav ul li:nth-of-type(3)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.subscribe').offset().top)
      },1500);
      });

   $('nav ul li:nth-of-type(4)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.service').offset().top)
      },1500);
      });
   $('nav ul li:nth-of-type(5)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.packge').offset().top)
      },1500);
      });

   $('nav ul li:nth-of-type(6)').click(function() {
          $('html, body').animate({
      scrollTop: ($('footer').offset().top)
      },1500);
      });
   
   $('button.down, i').click(function() {
          $('html, body').animate({
      scrollTop: ($('.work-info').offset().top - 50)
      },1500);
      });
   
   $('button.down, i').click(function() {
          $('html, body').animate({
      scrollTop: ($('.work-info').offset().top - 50)
      },1500);
      });
   
   $('button.down, i').click(function() {
          $('html, body').animate({
      scrollTop: ($('.work-info').offset().top - 50)
      },1500);
      });
   
   $('button.down, i').click(function() {
          $('html, body').animate({
      scrollTop: ($('.work-info').offset().top - 50)
      },1500);
      });
   
   $('button.down, i').click(function() {
          $('html, body').animate({
      scrollTop: ($('.work-info').offset().top - 50)
      },1500);
      });
   








 //this for page louding  when started or relouded
 /*$(window).load(function(){
             $('div.page-loading').fadeOut(1000);
             $('body').css('overflow','auto!important');
             
         });*/


     //end all js style  , .page-loading h3
    
      });