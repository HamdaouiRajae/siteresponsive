$(document).ready(function(){
    
    // Nav Slide Toggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    //Stickey NavBar
    $(window).scroll(function(){
        
        var sc = $(this).scrollTop();
        if(sc > 10){
           
           $('header').addClass('sticky');
            
        }
        else{
            $('header').removeClass('sticky');
            
        }
    });
});
                 