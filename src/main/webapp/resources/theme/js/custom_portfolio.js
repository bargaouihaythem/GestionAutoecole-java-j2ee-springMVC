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
 * Isotope filtering
 */

// init Isotope
var $container = $('.portfolio__items').imagesLoaded( function() {
    $container.isotope({
        itemSelector: '.filter__item',
        layoutMode: 'fitRows'
    });
});
// filter items on button click
$('.filter__nav > li > a').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});

/**
 * Columns setup
 */

$('.columns__nav > li > a').on('click', function() {
    var bootstrapGrid = $(this).data('grid');
    $('.portfolio__items > .row > div').removeClass('col-sm-3 col-sm-4 col-sm-6 col-md-3').addClass(bootstrapGrid);
    $container.isotope('layout');
});