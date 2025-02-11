$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

$(document).ready(function () {
    $('.card').click(function (event) {
        event.preventDefault(); // Prevent immediate navigation
        $('.loading-screen').css({
            'visibility': 'visible',
            'opacity': '1'
        });

        // Delay navigation for 2 seconds
        setTimeout(function () {
            window.location.href = "loveletter.html";
        }, 2000);
    });
});