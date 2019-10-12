document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' tt_mobile ' : ' tt_desktop ';
(function () {
  var prefix = ['-webkit-', '-o-', '-moz-', '-ms-', ""];
  for (var i in prefix) {
    if (prefix[i] + 'transform' in document.documentElement.style) document.documentElement.className += " tt_transform ";
  }
})();
/*
 On document ready jQuery will fire set of functions.
 If you want to override function behavior then copy it to your theme js file
 with the same name.
 */

jQuery(window).load(function () {


});
var tt_js = function () {
  tt_twitterBehaviour();
  tt_toggleBehaviour();
  tt_tabsBehaviour();
  tt_accordionBehaviour();
  tt_teaserGrid();
  tt_carouselBehaviour();
  tt_slidersBehaviour();
  tt_prettyPhoto();
  tt_googleplus();
  tt_pinterest();
  tt_progress_bar();
  tt_plugin_flexslider();
  tt_google_fonts();
  window.setTimeout(tt_waypoints, 1500);
};
jQuery(document).ready(function ($) {
  window.tt_js();
}); // END jQuery(document).ready

if (typeof window['tt_plugin_flexslider'] !== 'function') {
  function tt_plugin_flexslider($parent) {
    var $slider = $parent ? $parent.find('.tt_flexslider') : jQuery('.tt_flexslider');
    $slider.each(function () {
      var this_element = jQuery(this);
      var sliderSpeed = 800,
        sliderTimeout = parseInt(this_element.attr('data-interval')) * 1000,
        sliderFx = this_element.attr('data-flex_fx'),
        slideshow = true;
      if (sliderTimeout == 0) slideshow = false;

      this_element.is(':visible') && this_element.flexslider({
        animation:sliderFx,
        slideshow:slideshow,
        slideshowSpeed:sliderTimeout,
        sliderSpeed:sliderSpeed,
        smoothHeight:true
      });
    });
  }
}

/* Twitter
 ---------------------------------------------------------- */
if (typeof window['tt_twitterBehaviour'] !== 'function') {
  function tt_twitterBehaviour() {
    jQuery('.tt_twitter_widget .tweets').each(function (index) {
      var this_element = jQuery(this),
        tw_name = this_element.attr('data-tw_name');
      tw_count = this_element.attr('data-tw_count');

      this_element.tweet({
        username:tw_name,
        join_text:"auto",
        avatar_size:0,
        count:tw_count,
        template:"{avatar}{join}{text}{time}",
        auto_join_text_default:"",
        auto_join_text_ed:"",
        auto_join_text_ing:"",
        auto_join_text_reply:"",
        auto_join_text_url:"",
        loading_text:'<span class="loading_tweets">loading tweets...</span>'
      });
    });
  }
}

/* Google plus
 ---------------------------------------------------------- */
if (typeof window['tt_googleplus'] !== 'function') {
  function tt_googleplus() {
    if (jQuery('.tt_googleplus').length > 0) {
      (function () {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
      })();
    }
  }
}

/* Pinterest
 ---------------------------------------------------------- */
if (typeof window['tt_pinterest'] !== 'function') {
  function tt_pinterest() {
    if (jQuery('.tt_pinterest').length > 0) {
      (function () {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'http://assets.pinterest.com/js/pinit.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
        //<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>
      })();
    }
  }
}

/* Progress bar
 ---------------------------------------------------------- */
if (typeof window['tt_progress_bar'] !== 'function') {
  function tt_progress_bar() {
    if (typeof jQuery.fn.waypoint !== 'undefined') {

      jQuery('.tt_progress_bar').waypoint(function () {
        jQuery(this).find('.tt_single_bar').each(function (index) {
          var $this = jQuery(this),
            bar = $this.find('.tt_bar'),
            val = bar.data('percentage-value');

          setTimeout(function () {
            bar.css({"width":val + '%'});
          }, index * 200);
        });
      }, { offset:'85%' });
    }
  }
}

/* Waypoints magic
 ---------------------------------------------------------- */
if (typeof window['tt_waypoints'] !== 'function') {
  function tt_waypoints() {
    if (typeof jQuery.fn.waypoint !== 'undefined') {
      jQuery('.tt_animate_when_almost_visible:not(.tt_start_animation)').waypoint(function () {
        jQuery(this).addClass('tt_start_animation');
      }, { offset:'85%' });
    }
  }
}

/* Toggle
 ---------------------------------------------------------- */
if (typeof window['tt_toggleBehaviour'] !== 'function') {
  function tt_toggleBehaviour() {
    jQuery(".tt_toggle").unbind('click').click(function (e) {
      if (jQuery(this).next().is(':animated')) {
        return false;
      }
      if (jQuery(this).hasClass('tt_toggle_title_active')) {
        jQuery(this).removeClass('tt_toggle_title_active').next().slideUp(500);
      } else {
        jQuery(this).addClass('tt_toggle_title_active').next().slideDown(500);
      }
    });
    jQuery('.tt_toggle_content').each(function (index) {
      if (jQuery(this).next().is('h4.tt_toggle') == false) {
        jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this);
      }
    });
  }
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if (typeof window['tt_tabsBehaviour'] !== 'function') {
  function tt_tabsBehaviour($tab) {
    jQuery(function ($) {
      $(document.body).off('click.preview', 'a')
    });
    var $call = $tab || jQuery('.tt_tabs, .tt_tour'),
      ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split('.') : '1.10',
      old_version = parseInt(ver[0]) == 1 && parseInt(ver[1]) < 9;
    // if($call.hasClass('ui-widget')) $call.tabs('destroy');
    $call.each(function (index) {
      var $tabs,
        interval = jQuery(this).attr("data-interval"),
        tabs_array = [];
      //
      $tabs = jQuery(this).find('.tt_tour_tabs_wrapper').tabs({
        show:function (event, ui) {
          tt_prepare_tab_content(event, ui);
        },
        beforeActivate: function(event, ui) {
          ui.newPanel.index() !== 1 && ui.newPanel.find('.tt_pie_chart:not(.tt_ready)');
        },
        activate:function (event, ui) {
          tt_prepare_tab_content(event, ui);
        }
      }).tabs('rotate', interval * 1000);

      jQuery(this).find('.tt_tab').each(function () {
        tabs_array.push(this.id);
      });

      jQuery(this).find('.tt_tabs_nav a').click(function (e) {
        e.preventDefault();
        if (jQuery.inArray(jQuery(this).attr('href'), tabs_array)) {
          if (old_version) {
            $tabs.tabs("select", jQuery(this).attr('href'));
          } else {
            $tabs.tabs("option", "active", jQuery(jQuery(this).attr('href')).index() - 1);
          }
          return false;
        }
      });

      jQuery(this).find('.tt_prev_slide a, .tt_next_slide a').click(function (e) {
        e.preventDefault();
        if (old_version) {
          var index = $tabs.tabs('option', 'selected');
          if (jQuery(this).parent().hasClass('tt_next_slide')) {
            index++;
          }
          else {
            index--;
          }
          if (index < 0) {
            index = $tabs.tabs("length") - 1;
          }
          else if (index >= $tabs.tabs("length")) {
            index = 0;
          }
          $tabs.tabs("select", index);
        } else {
          var index = $tabs.tabs("option", "active"),
            length = $tabs.find('.tt_tab').length;

          if (jQuery(this).parent().hasClass('tt_next_slide')) {
            index = (index + 1) >= length ? 0 : index + 1;
          } else {
            index = index - 1 < 0 ? length - 1 : index - 1;
          }

          $tabs.tabs("option", "active", index);
        }

      });

    });
  }
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if (typeof window['tt_accordionBehaviour'] !== 'function') {
  function tt_accordionBehaviour() {
    jQuery('.tt_accordion').each(function (index) {
      var $tabs,
        interval = jQuery(this).attr("data-interval"),
        active_tab = !isNaN(jQuery(this).data('active-tab')) && parseInt(jQuery(this).data('active-tab')) > 0 ? parseInt(jQuery(this).data('active-tab')) - 1 : false,
        collapsible = active_tab === false || jQuery(this).data('collapsible') === 'yes';
      //
      $tabs = jQuery(this).find('.tt_accordion_wrapper').accordion({
        header:"> div > h3",
        autoHeight:false,
        heightStyle:"content",
        active:active_tab,
        collapsible:collapsible,
        navigation:true,
        activate: tt_accordionActivate,
        change:function (event, ui) {
          if (jQuery.fn.isotope != undefined) {
            ui.newContent.find('.isotope').isotope("layout");
          }
          tt_carouselBehaviour(ui.newPanel);
        }
      });
      //.tabs().tabs('rotate', interval*1000, true);
    });
  }
}

/* Teaser grid: isotope
 ---------------------------------------------------------- */
if (typeof window['tt_teaserGrid'] !== 'function') {
  function tt_teaserGrid() {
    var layout_modes = {
      fitrows:'fitRows',
      masonry:'masonry'
    }
    jQuery('.tt_grid .teaser_grid_container:not(.tt_carousel), .tt_filtered_grid .teaser_grid_container:not(.tt_carousel)').each(function () {
      var $container = jQuery(this);
      var $thumbs = $container.find('.tt_thumbnails');
      var layout_mode = $thumbs.attr('data-layout-mode');
      $thumbs.isotope({
        // options
        itemSelector:'.isotope-item',
        layoutMode:(layout_modes[layout_mode] == undefined ? 'fitRows' : layout_modes[layout_mode])
      });
      $container.find('.categories_filter a').data('isotope', $thumbs).click(function (e) {
        e.preventDefault();
        var $thumbs = jQuery(this).data('isotope');
        jQuery(this).parent().parent().find('.active').removeClass('active');
        jQuery(this).parent().addClass('active');
        $thumbs.isotope({filter:jQuery(this).attr('data-filter')});
      });
      jQuery(window).bind('load resize', function () {
        $thumbs.isotope("layout");
      });
    });

    /*
     var isotope = jQuery('.tt_grid ul.thumbnails');
     if ( isotope.length > 0 ) {
     isotope.isotope({
     // options
     itemSelector : '.isotope-item',
     layoutMode : 'fitRows'
     });
     jQuery(window).load(function() {
     isotope.isotope("layout");
     });
     }
     */
  }
}

if (typeof window['tt_carouselBehaviour'] !== 'function') {
  function tt_carouselBehaviour($parent) {
    var $carousel = $parent ? $parent.find(".tt_carousel") : jQuery(".tt_carousel");
    $carousel.each(function () {
      var $this = jQuery(this);
      if ($this.data('carousel_enabled') !== true && $this.is(':visible')) {
        $this.data('carousel_enabled', true);
        var carousel_width = jQuery(this).width(),
          visible_count = getColumnsCount(jQuery(this)),
          carousel_speed = 500;
        if (jQuery(this).hasClass('columns_count_1')) {
          carousel_speed = 900;
        }
        /* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
        var carousele_li = jQuery(this).find('.tt_thumbnails-fluid li');
        carousele_li.css({"margin-right":carousele_li.css("margin-left"), "margin-left":0 });

        jQuery(this).find('.tt_wrapper:eq(0)').jCarouselLite({
          btnNext:jQuery(this).find('.next'),
          btnPrev:jQuery(this).find('.prev'),
          visible:visible_count,
          speed:carousel_speed
        })
          .width('100%');//carousel_width

        var fluid_ul = jQuery(this).find('ul.tt_thumbnails-fluid');
        fluid_ul.width(fluid_ul.width() + 300);

        jQuery(window).resize(function () {
          var before_resize = screen_size;
          screen_size = getSizeName();
          if (before_resize != screen_size) {
            window.setTimeout('location.reload()', 20);
          }
        });
      }

    });
    /*
     if(jQuery.fn.bxSlider !== undefined ) {
     jQuery('.bxslider').each(function(){
     var $slider = jQuery(this);
     $slider.bxSlider($slider.data('settings'));
     });
     }
     */
    if (window.Swiper !== undefined) {

      jQuery('.swiper-container').each(function () {
        var $this = jQuery(this),
          my_swiper,
          max_slide_size = 0,
          options = jQuery(this).data('settings');

        if (options.mode === 'vertical') {
          $this.find('.swiper-slide').each(function () {
            var height = jQuery(this).outerHeight(true);
            if (height > max_slide_size) max_slide_size = height;
          });
          $this.height(max_slide_size);
          $this.css('overflow', 'hidden');
        }
        jQuery(window).resize(function () {
          $this.find('.swiper-slide').each(function () {
            var height = jQuery(this).outerHeight(true);
            if (height > max_slide_size) max_slide_size = height;
          });
          $this.height(max_slide_size);
        });
        my_swiper = jQuery(this).swiper(jQuery.extend(options, {
          onFirstInit:function (swiper) {
            if (swiper.slides.length < 2) {
              $this.find('.tt_arrow-left,.tt_arrow-right').hide();
            } else if (swiper.activeIndex === 0 && swiper.params.loop !== true) {
              $this.find('.tt_arrow-left').hide();
            } else {
              $this.find('.tt_arrow-left').show();
            }
          },
          onSlideChangeStart:function (swiper) {
            if (swiper.slides.length > 1 && swiper.params.loop !== true) {
              if (swiper.activeIndex === 0) {
                $this.find('.tt_arrow-left').hide();
              } else {
                $this.find('.tt_arrow-left').show();
              }
              if (swiper.slides.length - 1 === swiper.activeIndex) {
                $this.find('.tt_arrow-right').hide();
              } else {
                $this.find('.tt_arrow-right').show();
              }
            }
          }
        }));
        $this.find('.tt_arrow-left').click(function (e) {
          e.preventDefault();
          my_swiper.swipePrev();
        });
        $this.find('.tt_arrow-right').click(function (e) {
          e.preventDefault();
          my_swiper.swipeNext();
        });
        my_swiper.reInit();
      });

    }

  }
}

if (typeof window['tt_slidersBehaviour'] !== 'function') {
  function tt_slidersBehaviour() {
    //var sliders_count = 0;
    jQuery('.tt_gallery_slides').each(function (index) {
      var this_element = jQuery(this);
      var ss_count = 0;

      /*if ( this_element.hasClass('tt_slider_fading') ) {
       var sliderSpeed = 500, sliderTimeout = this_element.attr('data-interval')*1000, slider_fx = 'fade';
       var current_ss;

       function slideshowOnBefore(currSlideElement, nextSlideElement, options) {
       jQuery(nextSlideElement).css({"position" : "absolute" });
       jQuery(nextSlideElement).find("div.description").animate({"opacity": 0}, 0);
       }

       function slideshowOnAfter(currSlideElement, nextSlideElement, options) {
       jQuery(nextSlideElement).find("div.description").animate({"opacity": 1}, 2000);

       jQuery(nextSlideElement).css({"position" : "static" });
       var new_h = jQuery(nextSlideElement).find('img').height();
       if ( jQuery.isNumeric(new_h) ) {
       //this_element.animate({ "height" : new_h }, sliderSpeed );
       }
       }

       this_element.find('ul')
       .before('<div class="ss_nav ss_nav_'+ss_count+'"></div><div class="tt_fading_nav"><a id="next_'+ss_count+'" href="#next"></a> <a id="prev_'+ss_count+'" href="#prev"></a></div>')
       .cycle({
       fx: slider_fx, // choose your transition type, ex: fade, scrollUp, shuffle, etc...
       pause: 1,
       speed: sliderSpeed,
       timeout: sliderTimeout,
       delay: -ss_count * 1000,
       before: slideshowOnBefore,
       after:slideshowOnAfter,
       pager:  '.ss_nav_'+ss_count
       });
       //.find('.description').width(jQuery(this).width() - 20);
       ss_count++;
       }
       else*/
      if (this_element.hasClass('tt_slider_nivo')) {
        var sliderSpeed = 800,
          sliderTimeout = this_element.attr('data-interval') * 1000;

        if (sliderTimeout == 0) sliderTimeout = 9999999999;

        this_element.find('.nivoSlider').nivoSlider({
          effect:'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
          slices:15, // For slice animations
          boxCols:8, // For box animations
          boxRows:4, // For box animations
          animSpeed:sliderSpeed, // Slide transition speed
          pauseTime:sliderTimeout, // How long each slide will show
          startSlide:0, // Set starting Slide (0 index)
          directionNav:true, // Next & Prev navigation
          directionNavHide:true, // Only show on hover
          controlNav:true, // 1,2,3... navigation
          keyboardNav:false, // Use left & right arrows
          pauseOnHover:true, // Stop animation while hovering
          manualAdvance:false, // Force manual transitions
          prevText:'Prev', // Prev directionNav text
          nextText:'Next' // Next directionNav text
        });
      }
      else if (this_element.hasClass('tt_flexslider') && 1 == 2) { /* TODO: remove this */
        /*
         var sliderSpeed = 800,
         sliderTimeout = this_element.attr('data-interval')*1000,
         sliderFx = this_element.attr('data-flex_fx'),
         slideshow = true;
         if ( sliderTimeout == 0 ) slideshow = false;

         this_element.flexslider({
         animation: sliderFx,
         slideshow: slideshow,
         slideshowSpeed: sliderTimeout,
         sliderSpeed: sliderSpeed,
         smoothHeight: true

         });
         */

        /*
         var $first_object = this_element.find('li:first').show().find('*:not(a)');

         $first_object.bind('load', function() {
         if(!this_element.find('.flex-control-nav').is('ol')) {
         this_element.flexslider({
         animation: sliderFx,
         slideshow: slideshow,
         slideshowSpeed: sliderTimeout,
         sliderSpeed: sliderSpeed,
         smoothHeight: true
         });
         }
         });

         window.setTimeout(function(){
         if(!this_element.find('.flex-control-nav').is('ol')) {
         this_element.flexslider({
         animation: sliderFx,
         slideshow: slideshow,
         slideshowSpeed: sliderTimeout,
         sliderSpeed: sliderSpeed,
         smoothHeight: true
         });
         }
         }, 5000);
         */
      }
      else if (this_element.hasClass('tt_image_grid')) {
        var isotope = this_element.find('.tt_image_grid_ul');
        isotope.isotope({
          // options
          itemSelector:'.isotope-item',
          layoutMode:'fitRows'
        });
        jQuery(window).load(function () {
          isotope.isotope("layout");
        });
      }
    });
  }
}

if (typeof window['tt_prettyPhoto'] !== 'function') {
  function tt_prettyPhoto() {
    try {
      // just in case. maybe prettyphoto isnt loaded on this site
      jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
        animationSpeed:'normal', /* fast/slow/normal */
        padding:15, /* padding for each side of the picture */
        opacity:0.7, /* Value betwee 0 and 1 */
        showTitle:true, /* true/false */
        allowresize:true, /* true/false */
        counter_separator_label:'/', /* The separator for the gallery counter 1 "of" 2 */
        //theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square */
        hideflash:false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        deeplinking:false, /* Allow prettyPhoto to update the url to enable deeplinking. */
        modal:false, /* If set to true, only the close button will close the window */
        callback:function () {
          var url = location.href;
          var hashtag = (url.indexOf('#!prettyPhoto')) ? true : false;
          if (hashtag) location.hash = "!";
        } /* Called when prettyPhoto is closed */,
        social_tools:''
      });
    } catch (err) {
    }
  }
}

if ( typeof window['tt_google_fonts'] !== 'function' ) {
    function tt_google_fonts() {
        return;
    }
}
/* Helper
 ---------------------------------------------------------- */
function getColumnsCount(el) {
  var find = false,
    i = 1;

  while (find == false) {
    if (el.hasClass('columns_count_' + i)) {
      find = true;
      return i;
    }
    i++;
  }
}

var screen_size = getSizeName();
function getSizeName() {
  var screen_size = '',
    screen_w = jQuery(window).width();

  if (screen_w > 1170) {
    screen_size = "desktop_wide";
  }
  else if (screen_w > 960 && screen_w < 1169) {
    screen_size = "desktop";
  }
  else if (screen_w > 768 && screen_w < 959) {
    screen_size = "tablet";
  }
  else if (screen_w > 300 && screen_w < 767) {
    screen_size = "mobile";
  }
  else if (screen_w < 300) {
    screen_size = "mobile_portrait";
  }
  return screen_size;
}


function loadScript(url, $obj, callback) {

  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState) {  //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    /*
     script.onload = function(){

     callback();
     };
     */
  }

  script.src = url;
  $obj.get(0).appendChild(script);
}

/**
 * Prepare html to correctly display inside tab container
 *
 * @param event - ui tab event 'show'
 * @param ui - jquery ui tabs object
 */

function tt_prepare_tab_content(event, ui) {
  var panel = ui.panel || ui.newPanel,
      $pie_charts = panel.find('.tt_pie_chart:not(.tt_ready)'),
      $carousel = panel.find('[data-ride="tt_carousel"]'),
      $ui_panel, $google_maps;
  tt_carouselBehaviour();
  tt_plugin_flexslider(panel);
  $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
  $carousel.length && jQuery.fn.carousel && $carousel.carousel('resizeAction');
  $ui_panel = panel.find('.isotope');
  $google_maps = panel.find('.tt_gmaps_widget');
  if ($ui_panel.length > 0) {
    $ui_panel.isotope("layout");
  }
  if ($google_maps.length && !$google_maps.is('.map_ready')) {
    var $frame = $google_maps.find('iframe');
    $frame.attr('src', $frame.attr('src'));
    $google_maps.addClass('map_ready');
  }
  if(panel.parents('.isotope').length) {
    panel.parents('.isotope').each(function(){
      jQuery(this).isotope("layout");
    });
  }
}
var tt_accordionActivate = function(event, ui) {
  var $pie_charts = ui.newPanel.find('.tt_pie_chart:not(.tt_ready)'),
    $carousel = ui.newPanel.find('[data-ride="tt_carousel"]');
  if (jQuery.fn.isotope != undefined) {
    ui.newPanel.find('.isotope').isotope("layout");
  }
  tt_carouselBehaviour(ui.newPanel);
  tt_plugin_flexslider(ui.newPanel);
  $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
  $carousel.length && jQuery.fn.carousel && $carousel.carousel('resizeAction');
  if(ui.newPanel.parents('.isotope').length) {
    ui.newPanel.parents('.isotope').each(function(){
      jQuery(this).isotope("layout");
    });
  }
}

