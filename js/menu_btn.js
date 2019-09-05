$(document).ready(function () {
    
        $(window).scroll(function() {
            // проверка на докрутку до определенного элемента
           
            var scroll_picca =$('.about_us').offset().top;
            //если мы докрутили до нужного элемента 
            ;
            if ($(this).scrollTop() > scroll_picca) {
              // создаем эффекты и анимацию
              $('.navbar-menu').fadeOut(1000);
              $('.navbar-social').fadeOut(1000);
              $('.navbar-menu_btn').css('display','block');
              $('.navbar-logo').css('display','block');
            }
            
        
        }); 
        $('.navbar-menu_btn').click(function()
        {
            $(this).css('display','none');
           $('.navbar-menu').fadeIn(1000);
           
           $('.navbar-logo').css('display','none');
        })
    
});