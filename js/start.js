$(document).ready(function(){
    $(".oneblock__sliderleft").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed: 4000,
        asNavFor: ".oneblock__sliderritht",
        slidesToShow:1,
        slidesToScroll:1

    });
    $(".oneblock__sliderritht").slick({
        arrows:false,
        fade:true,
        autoplay:true,
        autoplaySpeed:4000,
        asNavFor: ".oneblock__sliderleft",
        slidesToScroll:1,
        slidesToShow:1


    });

    let title = document.querySelector('.twoblock__dollars');
let arr = title.innerHTML.split(' ');
arr[0] = '<span>' + arr[0] + '</span>';
title.innerHTML = arr.join(' ');
$(".fourblock__slider").slick({
    arrows:true,
    dots:true,
    autoplay:true,
    autoplaySpeed: 4000,
    slidesToShow:1,
    mobileFirst: true,
    slidesToScroll:1

});
$('.header__burger').click(function(event){
    $('.header__burger, .header__max').toggleClass('active');
    $('body').toggleClass('lock');
    
});

});

