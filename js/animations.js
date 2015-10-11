$(function(){

    $(document).on('scroll' ,function(){
      // for handling the navbar banner color change
      // if ( $(document).scrollTop() > 0){
      //   $('.header').addClass('scrolled');
      // }else{
      //   $('.header').removeClass('scrolled'); 
      // }

      // if($(document).scrollTop() > 530){
      //       $('#nav-right').removeClass('hidden');
      //       $('.header').removeClass('hidden');
      // }else{
      //       $('#nav-right').addClass('hidden');
      //       $('.header').addClass('hidden');
      // }

      if($(document).scrollTop() > 10){
            $('.header').addClass('bg-emerald');
            $('.header').removeClass('scroll-header-pad')
      }else{
            $('.header').addClass('scroll-header-pad')
            $('.header').removeClass('bg-emerald');
      }
    })

    $('#view-portfolio, #view-work').on('click', function(){
        $("html, body").animate({ scrollTop: 580 }, 600);        
    })

})

