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
 * Smooth Scrolling
 */

$(document).ready(function(){
    $('a[href*=#ui_typography], a[href*=#ui_tables], a[href*=#ui_buttons], a[href*=#ui_tabs], a[href*=#ui_pills], a[href*=#ui_pagination], a[href*=#ui_pager], a[href*=#ui_progress-bars], a[href*=#ui_list-groups], a[href*=#ui_panels], a[href*=#ui_accordion], a[href*=#ui_carousel]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
        e.preventDefault();
    });
    return false;
});

/**
 * Sidebar affix
 */

$('.ui__sidebar').affix({
    offset: {
        top: 170,
        bottom: 0
    }
});