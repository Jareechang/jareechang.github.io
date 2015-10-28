$(function(){
    $enscholarDemo = $('#enscholar-demo');
    $lettDemo = $('#lett-demo');
    
     $enscholarDemo.on('ended', function () {
        this.load();      
        $enscholarDemo[0].play();
    });

    $lettDemo.on('ended', function () {
         this.load();      
          $lettDemo[0].play();
     });

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

        // var targetHeight = $('#vision').outerHeight();
        // console.log(targetHeight);
        var scrollPosition = $(document).scrollTop(); 
        var scrollPercent = scrollPosition / 300;        
        
        if(scrollPercent >= 0){
            $('#vision').css('opacity', scrollPercent + 0.3);
        }

        if(scrollPosition > 10){
            $('.header').addClass('bg-emerald');
            $('.header').removeClass('scroll-header-pad');
            $('#header-title, #nav-right').removeClass('text-fade-white').addClass('text-white');            
        }else{
            $('.header').addClass('scroll-header-pad')
            $('.header').removeClass('bg-emerald');
            $('#header-title, #nav-right').removeClass('text-white').addClass('text-fade-white');
        }
    })
    


    $('#view-portfolio, #view-work').on('click', function(){
        $("html, body").animate({ scrollTop: 580 }, 600);        
    })

})

