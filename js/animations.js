
$(function(){

    var $enscholarDemo = $('#enscholar-demo');
    var $lettDemo = $('#lett-demo');
    var $body = $('body');
    var $enscholarControl = $('#enscholar-control');
    var deviceWidth = $(document).width();    

    // video stuff  
    $enscholarDemo.on('click', function () {
        this.load();      
        $enscholarDemo[0].play();
    });

    $enscholarDemo.on( 'ended', function () {
        this.load();      
        $enscholarDemo[0].play();
    });

    // $enscholarControl.on('click', function(){
    //     $enscholarDemo.css({'display' : 'none'});  
    //     $enscholarDemo.load();                
    //     $enscholarDemo[0].play();
    // })
    var startPosition = 0;
    var reverse = false;

    setInterval(function(){ 

        $("#slides-container").css({'right' : startPosition + "px" });


        if(startPosition  == (207 * 3)) {
            //reset            
            reverse = true;
        }

        if(reverse) {
            if (startPosition == 0){
                reverse = false;
            }else {
                startPosition -= 207;
                
            }
        } else {
            startPosition += 207;
        }

    }, 3500);



    $('#blog').on('click', function(){        
        $('.overlay').removeClass('hidden');
    })

    $('#close-modal').on('click', function(){
        $('.overlay').toggleClass('hidden');                
    })
    
    var scrollModule = (function(){

        var scrollPositions = {

            "acceleration" : {                
                desktop : 702,
                tablet : 620
            }, 

            "mobile-first" : {                
                desktop : 1542,
                tablet : 1345
            },

            "custom-ip" : {                
                desktop : 2397,
                tablet : 2335
            },

            "about" : {
                desktop : 2918,
                tablet : 3075           
            }
        }

        var _getDeviceScrollPosition = function(page){
            // Defining initial variables 
            var tabletWidth =  1024 > deviceWidth && deviceWidth > 768;
            var desktopWidth =  deviceWidth > 1200;
            var deviceScrollPosition = null;

            if(tabletWidth){
                deviceScrollPosition =  scrollPositions[page].tablet;
            } else if (desktopWidth){
                deviceScrollPosition =  scrollPositions[page].desktop;
            }

            return deviceScrollPosition;
        }  

        var _animateTo = function(scrollPosition){            
            $body.animate({ scrollTop: scrollPosition }, 1000);  
        }

        var _scrollTo = function(page){
            var scrollPosition = _getDeviceScrollPosition(page);
            _animateTo(scrollPosition);
        }


        return {
            scrollTo : _scrollTo
        };

    })()

    $('#process-m').on('click',function(){
        $('#select-trigger').focus();
    })

    $('#about-m').on('click',function(){
        $body.animate({ scrollTop: 2683 }, 1000); 
    })    

    window.triggerScroll = function(selectOption){
          switch(selectOption.value){
               case "acceleration":
                    $body.animate({ scrollTop: 610 }, 1000); 
                    break;
               case "mobile-first":
                    $body.animate({ scrollTop: 1030 }, 1000); 
                    break;
               case "custom-ip":
                    $body.animate({ scrollTop: 2090 }, 1000); 
                    break;    
               default:
                    console.log('check switch statement, an error occured there.');
                    break;
          }   
          //reset selected option       
          $('#select-trigger').prop('selectedIndex', 0);
    }

    $(document).on('scroll' ,function(){ 
        var scrollPosition = $(document).scrollTop(); 
        var scrollPercent = scrollPosition / 300;   
        var $navBarElement = $('.navbar');
        var navBarBackground =  "rgba(75, 104, 131, " +  (scrollPosition/425) + ")";
 
        $navBarElement.css({'background-color' : navBarBackground});

        if ($(document).scrollTop() > 10) {
            $navBarElement.addClass('navbar-scrolled');            
        }else {
            $navBarElement.removeClass('navbar-scrolled');            
        }
    })
    
    $('#about').on('click', function(){   
        scrollModule.scrollTo("about");        
    })

    $('.drop-menu--list').on('click', function(){
        var listItemId = $(this).attr('id');
        switch(listItemId) {
            case "acceleration":          
                scrollModule.scrollTo("acceleration");                                      
                break; 
            case "mobile-first":
                scrollModule.scrollTo("mobile-first");        
                break;
            case "custom-ip":
                scrollModule.scrollTo("custom-ip");                        
                break;            
            default:
                console.log('something went wrong');
                break;
        }        

    })

})



