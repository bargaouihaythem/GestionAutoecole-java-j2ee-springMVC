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


var inview = new Waypoint.Inview({
    element: $('.counter'),
    entered: function(direction) {
        $('.counter__number').countTo();
    },
    exited: function(direction) {
        inview.destroy();
    }
});