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
 * Countdown: Coming Soon page
 */

$(function () {
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    $('#countdown').countdown({until: austDay});
    $('#year').text(austDay.getFullYear());
});