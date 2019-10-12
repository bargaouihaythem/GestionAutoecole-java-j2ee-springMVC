/*<!--

Educanet - http://www.educanet.tn/
Copyright (c) 2015-2016 by respective authors (see below). All rights reserved.
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
---------------------          Edu-Connect             ------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
Author: Brahmi Amine <amine@educanet.tn>

-->*/

/**
 * Backstretch slideshow base setup
 */

$(window).load(function() { // starts after the page is fully loaded
    $(".hero__bs").backstretch([
        "resources/theme/img/bg_1.jpg"
        , "resources/theme/img/bg_2.jpg"
    ], {duration: 5000, fade: 500});

    // Hero content animation
    setTimeout(function(){
        $("#hero__content").animate({
            opacity: 1,
            top: 0
        }, 800);
    }, 1500);
});

/**
 * Backstretch slideshow controls
 */

$(".js-hero-bs__ctrl > a").on('click', function() {
    var slide = $(this).data('slide');
    $(".hero__bs").backstretch(slide);
    if (slide == "pause" || slide == "resume") {
        $(".playback").toggleClass("visible-inline-block hidden");
    }
    return false;
});

/**
 * Carousel slideshow pause/resume
 */

$(".js-hero-crsl__ctrl > a.playback").on('click', function() {
    var slide = $(this).data('slide');
    $('#hero__carousel').carousel(slide);
    $(".playback").toggleClass("visible-inline-block hidden");
    return false;
});