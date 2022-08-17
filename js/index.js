$(window).scroll(function() {
    let scrollTop = $(window).scrollTop()
    let aboutoffset = $('#about').offset().top
    if (scrollTop >= aboutoffset) {
        $('#main-nav').css('background-color', 'rgba(0, 0, 0, 1)')
        $('#btnUp').fadeIn(1000)
    } else {
        $('#main-nav').css('background-color', 'transparent')
        $('#btnUp').fadeOut(1000)

    }
})

$('#btnUp').click(function() {
    $('body,html').animate({ scrollTop: "0" }, 2000)
})

$('a').click(function(e) {
    let hRef = $(this).attr('href')
    let offset = $(hRef).offset().top
    $('li a').removeClass('active')
    $(this).addClass('active')
    $('body,html').animate({ scrollTop: offset }, 2000)


})

new WOW().init();

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})



$(function() {
    $('.skitter-large').skitter();
});

var typed = new Typed('.element', {
    strings: ['Developer, Graphics & Web Design', 'Ahmed Abdelghny'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 70
});