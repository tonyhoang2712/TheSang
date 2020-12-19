var TheSangMain = (function () {
    var instance;

    var mainSlide = function () {
        $('.main-slide').owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            autoHeight: false,
            dots: true,
            nav: true,
            onInitialized: callbackMainSlide, //When the translation of the stage has finished.
            navText: [
                '',
                '<svg xmlns="http://www.w3.org/2000/svg" width="28.911" height="20.329" viewBox="0 0 28.911 20.329">' +
                '<path id="right-arrow" d="M19.469,4.98a1.025,1.025,0,0,0-1.457,1.442L25.4,13.81H1.02A1.015,1.015,0,0,0,0,14.831a1.026,1.026,0,0,0,1.02,1.035H25.4L18.012,23.24a1.046,1.046,0,0,0,0,1.457,1.021,1.021,0,0,0,1.457,0l9.137-9.137a1,1,0,0,0,0-1.442Z" transform="translate(0 -4.674)" fill="#fff"/>' +
                '</svg>'
            ]
        });
    }
    
    function callbackMainSlide(event) {
        $('.line-process').css({
            '-webkit-animation': 'sdb 5s infinite',
            'animation': 'sdb 5s infinite'
        })
    }
    var aboutSlide = function () {
        $('#about-slide').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoHeight: false,
            dots: false,
            nav: true,
            onTranslated: callbackAboutSlide,
            navText: [
                '',
                '<svg xmlns="http://www.w3.org/2000/svg" width="28.911" height="20.329" viewBox="0 0 28.911 20.329">' +
                '<path id="right-arrow" d="M19.469,4.98a1.025,1.025,0,0,0-1.457,1.442L25.4,13.81H1.02A1.015,1.015,0,0,0,0,14.831a1.026,1.026,0,0,0,1.02,1.035H25.4L18.012,23.24a1.046,1.046,0,0,0,0,1.457,1.021,1.021,0,0,0,1.457,0l9.137-9.137a1,1,0,0,0,0-1.442Z" transform="translate(0 -4.674)" fill="#6a6a6a"/>' +
                '</svg>'
            ]
        });
    }
    function callbackAboutSlide(event) {
        var items = event.item.count;     // Number of items
        var item = event.item.index - 1;     // Position of the current item
        if (item > items) {
            item = 1;
        }

        $('.about-line-process').find('.line').removeClass('active');
        $('.about-line-process').find('.line-' + item).addClass('active');

        $('.vision-and-mission').find('.line').removeClass('active');
        $('.vision-and-mission').find('.line-' + item).addClass('active');
    }
    var triggerAboutSlide = function() {
         var triggerCarousel = $('#about-slide');
        $(".vision-and-mission").find('.line').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });
    }
    var careerSlide = function () {
        $('#career-slide').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoHeight: false,
            dots: false,
            nav: true,
            onTranslated: callbackCareerSlide, //When the translation of the stage has finished.
            navText: [
                '',
                '<svg xmlns="http://www.w3.org/2000/svg" width="28.911" height="20.329" viewBox="0 0 28.911 20.329">' +
                '<path id="right-arrow" d="M19.469,4.98a1.025,1.025,0,0,0-1.457,1.442L25.4,13.81H1.02A1.015,1.015,0,0,0,0,14.831a1.026,1.026,0,0,0,1.02,1.035H25.4L18.012,23.24a1.046,1.046,0,0,0,0,1.457,1.021,1.021,0,0,0,1.457,0l9.137-9.137a1,1,0,0,0,0-1.442Z" transform="translate(0 -4.674)" fill="#6a6a6a"/>' +
                '</svg>'
            ]
        });
    }
    var triggerCareerSlide = function() {
        var triggerCarousel = $('#career-slide');
        $('.vision-and-mission').find('li').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });
        // $('.vision-and-mission').find('.left').click(function () {
        //     triggerCarousel.trigger('prev.owl.carousel');
        // });
    }
    function callbackCareerSlide(event) {
        var items = event.item.count;     // Number of items
        var item = event.item.index - 1;     // Position of the current item
        if (item > items) {
            item = 1;
        }

        $('.about-line-process').find('.line').removeClass('active');
        $('.about-line-process').find('.line-' + item).addClass('active');

        $('.vision-and-mission').find('.line').removeClass('active');
        $('.vision-and-mission').find('.line-' + item).addClass('active');

    }
    var projectSlide1 = function () {
        $('.project-slide-1').owlCarousel({
            stagePadding: 80,
            items: 2.5,
            loop: true,
            margin: 30,
            autoplay: false,
            center: false,
            /*autoplayTimeout: 3000,
            autoplayHoverPause: true,*/
            autoHeight: false,
            dots: false,
            nav: false,
            onTranslated: callbackProjectSlide1, //When the translation of the stage has finished.
            responsive:{
                1440: {
                    items: 2.05,
                    stagePadding: 60,
                    margin: 20,
                },
                1366: {
                    items: 2,
                    stagePadding: 40,
                    margin: 20,
                },
                1200: {
                    items: 2,
                    stagePadding: 30,
                    margin: 20,
                },
                1024: {
                    center: true,
                    items: 1.45,
                    stagePadding: 30,
                    margin: 20,
                },
                767.98: {
                    center: true,
                    items: 1,
                    stagePadding: 5,
                    margin: 5,
                },
                0: {
                    center: true,
                    items: 1,
                    stagePadding: 5,
                    margin: 5,
                }
            }
        });
    }

    var triggerProjectSlide1 = function () {
        var triggerCarousel = $('.project-slide-1');
        $(".custom-arrow").find('.right').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });

        $(".custom-arrow").find('.left').click(function () {
            triggerCarousel.trigger('prev.owl.carousel');
        });
    }

    function callbackProjectSlide1(event) {
        var element = event.target;         // DOM element, in this example .owl-carousel
        var items = event.item.count;     // Number of items
        var item = event.item.index - 1;     // Position of the current item
        if (item > items) {
            item = 1;
        }

        $('.desc-follow-slide').find('.number').find('.change').text('0' + item);
        $('.desc-follow-slide').find('.number').find('.total').text('0' + items);
        $('.desc-follow-slide').find('.group-desc').find('.desc').removeClass('active');
        $('.desc-follow-slide').find('.group-desc').find('.desc-' + item).addClass('active');
        $('.project-line-process').find('.line').removeClass('active');
        $('.project-line-process').find('.line-' + item).addClass('active');
    }

    var newsSlide1 = function () {
        $('.news-slide-1').owlCarousel({
            stagePadding: 50,
            items: 3,
            loop: true,
            margin: 20,
            autoplay: false,
            center: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoHeight: false,
            dots: false,
            nav: false,
            onTranslated: callbackNewsSlide1, //When the translation of the stage has finished.
            responsive:{
                1440: {
                    items: 3,
                    stagePadding: 30,
                    margin: 20,
                },
                1200: {
                    items: 3,
                    stagePadding: 30,
                    margin: 20,
                },
                1024: {
                    center: true,
                    items: 2.45,
                    stagePadding: 30,
                    margin: 20,
                },
                767.98: {
                    center: true,
                    items: 1,
                    stagePadding: 5,
                    margin: 5,
                },
                0: {
                    center: true,
                    items: 1,
                    stagePadding: 5,
                    margin: 5,
                }
            }
        });
    }

    function callbackNewsSlide1(event) {
        var items = event.item.count;     // Number of items
        var item = event.item.index - 1;     // Position of the current item
        if (item > items) {
            item = 1;
        }

        $('.news-line-process').find('.line').removeClass('active');
        $('.news-line-process').find('.line-' + item).addClass('active');

    }

    var triggerNewsSlide1 = function () {
        var triggerCarousel = $('.news-slide-1');
        $('.read-more').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });
        $('.custom-arrow').find('.right').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });

        $('.custom-arrow').find('.left').click(function () {
            triggerCarousel.trigger('prev.owl.carousel');
        });
    }


    function commonOtherHome(isHome = true) {
        $('.btn-home-other').find('.open').removeClass('d-block').addClass('d-none')
        $('.btn-home-other').find('.color-open').removeClass('d-block').addClass('d-none')
        $('.btn-home-other').find('.close').removeClass('d-none').addClass('d-block');
        $('.home-other').addClass('fade-out');
        $('.nav-item:not(.active)').find('.nav-link').addClass('color-white');
        $('.wrap-other-content').addClass('move-to-top');
        if(!isHome) {
            $('.logo-other').toggle();
            $('.logo-home').toggle();
        }

    }

    var openOtherHome = function () {
        $('.btn-home-other').find('.open').click(function () {
            commonOtherHome(true);
        });
        $('.btn-home-other').find('.color-open').click(function () {
            commonOtherHome(false);
        });
    }

    var closeOtherHome = function () {
        $('.btn-home-other').find('.is-home-close').click(function () {
            commonCloseOtherHome(true);
        })
        $('.btn-home-other').find('.is-other-close').click(function () {
            commonCloseOtherHome(false);
        })
    }

    function commonCloseOtherHome(isHome = true) {
        $('.btn-home-other').find('.close').addClass('d-none').removeClass('d-block');
        $('.btn-home-other').find('.open').removeClass('d-none').addClass('d-block');
        $('.btn-home-other').find('.color-open').removeClass('d-none').addClass('d-block');
        $('.home-other').removeClass('fade-out');
        $('.nav-item:not(.active)').find('.nav-link').removeClass('color-white');
        $('.wrap-other-content').removeClass('move-to-top');
        if(!isHome) {
            $('.logo-other').toggle();
            $('.logo-home').toggle();
        }

    }

    var popupProjectSlide = function () {
        $('.popup-project-slide').owlCarousel({
            items: 3.1,
            loop: true,
            margin: 15,
            autoplay: false,
            center: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            autoHeight: false,
            dots: false,
            nav: false,
        });
    }

    var popupNewsSlide = function () {
        $('.popup-news-slide').owlCarousel({
            items: 3.1,
            loop: true,
            margin: 15,
            autoplay: false,
            center: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            autoHeight: false,
            dots: false,
            nav: false,
        });
    }

    var triggerPopupProjectSlide = function () {
        var triggerCarousel = $('.popup-project-slide');
        $('#popup-project').find(".arrow").find('.right').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });

        $('#popup-project').find(".arrow").find('.left').click(function () {
            triggerCarousel.trigger('prev.owl.carousel');
        });
    }
    var triggerPopupNewsSlide = function () {
        var triggerCarousel = $('.popup-news-slide');
        $('#popup-news').find(".arrow").find('.right').click(function () {
            triggerCarousel.trigger('next.owl.carousel');
        });

        $('#popup-news').find(".arrow").find('.left').click(function () {
            triggerCarousel.trigger('prev.owl.carousel');
        });
    }
    /*handle video*/

    var init = function () {
        mainSlide();
        aboutSlide();
        triggerAboutSlide();
        careerSlide();
        triggerCareerSlide();
        projectSlide1();
        triggerProjectSlide1();
        triggerPopupProjectSlide();
        triggerPopupNewsSlide();
        triggerNewsSlide1();
        newsSlide1();
        openOtherHome();
        closeOtherHome();

        $(window).on('load', function () {
            $('#popup-project').modal('show');
        });
        $(window).on('load', function () {
            $('#popup-news').modal('show');
        });
        popupProjectSlide();
        popupNewsSlide();
    };

    return {
        getInstance: function () {
            if (!instance) instance = init();
            return instance;
        }
    }
})();

$(document).ready(function () {
    TheSangMain.getInstance();
});

$('.play-pause-button').click(function () {
    var mediaPlayer = $('#media-video')[0];
    mediaPlayer.controls = false;
    // If the mediaPlayer is currently paused or has ended
    if (mediaPlayer.paused || mediaPlayer.ended) {
        // Change the button to be a pause button
        mediaPlayer.volume = $('.volume-slider').val() / 100;
        $(this).find('.play').hide();
        $(this).find('.pause').show();
        // Play the media
        mediaPlayer.play();
    }
    // Otherwise it must currently be playing
    else {
        // Change the button to be a play button
        $(this).find('.pause').hide();
        $(this).find('.play').show();
        // Pause the media
        mediaPlayer.pause();
    }
});

$('.button-volume').click(function() {
    var mediaPlayer = $('#media-video')[0];
        if (mediaPlayer.muted) {
            // Change the cutton to be a mute button
            $(this).find('.volume-mute').hide();
            $(this).find('.volume').show();
            // Unmute the media player
            mediaPlayer.muted = false;
        }
        else {
            // Change the button to be an unmute button
            $(this).find('.volume-mute').show();
            $(this).find('.volume').hide();
            // Mute the media player
            mediaPlayer.muted = true;
        }
});

$('.volume-slider-range-process').css('width', parseInt(($('.volume-slider').val() / 100) * $('.volume-slider').width()) + 'px');

$('.volume-slider').on('change input', function(e) {
    var mediaPlayer = $('#media-video')[0];
    mediaPlayer.volume = $(this).val() / 100;
    var length = $('.volume-slider').width();
    var width = ($(this).val() / 100) * length;
    $('.volume-slider-range-process').css('width', parseInt(width) + 'px');
});

$('#media-video').on('timeupdate', function() {
    var progressBar = $('#video-run-process');
    var mediaPlayer = $('#media-video')[0];
    mediaPlayer.controls = false;
    // Work out how much of the media has played via the duration and currentTime parameters
    var percentage = parseFloat((100 / mediaPlayer.duration) * mediaPlayer.currentTime).toFixed(2);
    // Update the progress bar's value
    progressBar.val(percentage);
    // Update the progress bar's text (for browsers that don't support the progress element)
    progressBar.text(percentage + '% played');

    displayNumberProcess(mediaPlayer.currentTime);
    displayNumberTotalProcess(mediaPlayer.duration);
    displayProcessBar();

    if(mediaPlayer.ended) {
        $('.play-pause-button').find('.pause').hide();
        $('.play-pause-button').find('.play').show();
        $('#video-run-process').val(0);
        $('#video-run-process-labels').val(0);
        // Pause the media
        mediaPlayer.pause();
    }
});

$('#video-run-process').on('change input', function (e) {
    e.preventDefault();
    var mediaPlayer = $('#media-video')[0];
    var progressBar = $('#video-run-process');

    $('.play-pause-button').find('.play').hide();
    $('.play-pause-button').find('.pause').show();
    // Play the media
    mediaPlayer.play();

    var percent = progressBar.val() / 100;
    
    mediaPlayer.currentTime = percent * mediaPlayer.duration || 0;
    progressBar.value = percent / 100;
    displayNumberProcess(mediaPlayer.currentTime);
    displayNumberTotalProcess(mediaPlayer.duration);
    displayProcessBar();

});


function calculateCurrentValue(currentTime) {
  var current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed(),
    current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

  return current_time;
}

function displayNumberProcess(currentTime) {
    $('.video-number-process').find('.change').text(calculateCurrentValue(currentTime));
}

function displayNumberTotalProcess(duration) {
    $('.video-number-process').find('.total').text(calculateCurrentValue(duration));
}

function displayProcessBar() {
    var length = $('#video-run-process').width();
    var width = ($('#video-run-process').val() / 100) * length;
    $('#video-run-process-label').css('width', parseInt(width) + 'px');
}

$('.fullscreen-exit').click(function() {
    var mediaPlayer = $('#media-video')[0];
    if(mediaPlayer.requestFullScreen){
        mediaPlayer.requestFullScreen();
    } else if(mediaPlayer.webkitRequestFullScreen){
        mediaPlayer.webkitRequestFullScreen();
    } else if(mediaPlayer.mozRequestFullScreen){
        mediaPlayer.mozRequestFullScreen();
    }
});
$('.btn-close-video').click(function() {
    var mediaPlayer = $('#media-video')[0];
    mediaPlayer.pause();
    $('.show-video').hide();
})

$('.btn-open-video').click(function() {
    $('figure.show-video').show();
    var mediaPlayer = $('#media-video')[0];
    var progressBar = $('#video-run-process');
    $('.play-pause-button').find('.play').hide();
    $('.play-pause-button').find('.pause').show();
    // Play the media
    mediaPlayer.play();
    var percent = 0;
    
    mediaPlayer.currentTime = 0;
    progressBar.value = 0;
    displayNumberProcess(mediaPlayer.currentTime);
    displayNumberTotalProcess(mediaPlayer.duration);
    displayProcessBar();
})
