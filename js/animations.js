$(document).on('scroll' ,function(){
  // for handling the navbar banner color change
  if ( $(document).scrollTop() > 0){
    $('.header').addClass('scrolled');
  }else{
    $('.header').removeClass('scrolled'); 
  }
})

