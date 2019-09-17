
$(document).ready(function(){

    $('.banner').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        smartSpeed:2500,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.popular_B1').owlCarousel({
        margin:30,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        loop:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:true,
            }
        }
    })

    $('.popular_B2').owlCarousel({
        margin:30,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        loop:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })


    $('.follow_loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:20,
        nav:true,
        autoplay:true,
        smartSpeed:2000,
        responsive:{
            600:{
                items:3
            }
        }
    });



    $('.brouser_loc').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
            }
        }
    })


});