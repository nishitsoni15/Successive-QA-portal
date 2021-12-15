$('document').ready(function(){
    $('.menu .a-1').click(function(){
        $('.menu .a-2').removeClass('home');
        $('.menu .a-3').removeClass('home');
        $('.menu .a-4').removeClass('home');
        $('.menu .a-1').toggleClass('home');
    }),
    $('.menu .a-2').click(function(){
        $('.menu .a-1').removeClass('home');
        $('.menu .a-3').removeClass('home');
        $('.menu .a-4').removeClass('home');
        $('.menu .a-2').toggleClass('home');
    }),
    $('.menu .a-3').click(function(){
        $('.menu .a-1').removeClass('home');
        $('.menu .a-2').removeClass('home');
        $('.menu .a-4').removeClass('home');
        $('.menu .a-3').toggleClass('home');
    }),
    $('.menu .a-4').click(function(){
        $('.menu .a-1').removeClass('home');
        $('.menu .a-2').removeClass('home');
        $('.menu .a-3').removeClass('home');
        $('.menu .a-4').toggleClass('home');
    })
})

  






