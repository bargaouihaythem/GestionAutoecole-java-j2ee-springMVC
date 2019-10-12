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
/* Requires jquery.waypoints.min.js & inview.min.js */

/**
 * Skills chart animation
 */

var inview = new Waypoint.Inview({
    element: $(".skills"),
    entered: function(direction) {
        $(".skills-grid__col").each(function() {
            var left = $(this).data('left');
            $(this).animate({
                opacity: 1,
                left: left
            }, 1200);
        });
        $(".skills-progress__bar").each(function () {
            var width = $(this).data('width');
            var delay = $(this).data('queue')*300;
            $(this).css("opacity", "1").delay(1200+delay).animate({
                width: width
            }, 1200);
        });
    }
});