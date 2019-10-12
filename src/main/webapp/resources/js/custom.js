/*
 *	Name:		Official |HTML5 Theme
 *	Version:	1.0
 *	Authors:	ThemeTor 
 *	website:	http://Themetor.com
 *	Copyright (c) 2014-2015  ThemeTor
 *	All rights reserved
 */
jQuery(document).ready(function ($) {

	function mycarousel4_initCallback(e){e.buttonNext.hover(function(){e.stopAuto()},function(){e.startAuto()});e.buttonPrev.hover(function(){e.stopAuto()},function(){e.startAuto()});e.clip.hover(function(){e.stopAuto()},function(){e.startAuto()})};
	"use strict";
	jQuery.browser={};(function(){jQuery.browser.msie=false;
	jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
	jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
	
	$('.sf-menu').find('.current-menu-item,.current-menu-parent,.current-menu-ancestor').addClass('selectedLava');
	
	// Superfish
	if ($(".sf-menu")[0]) {
		$('.sf-menu').superfish({
			delay: 100,
			animation: {
				opacity: 'show', height: 'show'
			},
			speed: 300
		}).lavaLamp({
			fx: "easeOutExpo", 
			speed: 600
		});
	}
	// ExtraInfo
	if ($(".extrabox")[0]) {
		(function($) {
			$.fn.clickToggle = function(func1, func2) {
				var funcs = [func1, func2];
				this.data('toggleclicked', 0);
				this.click(function() {
					var data = $(this).data();
					var tc = data.toggleclicked;
					$.proxy(funcs[tc], this)();
					data.toggleclicked = (tc + 1) % 2;
				});
				return this;
			};
		}(jQuery));

		var DropHeight = jQuery('.extrabox').height();
		jQuery('.extrabox').css("top","-"+DropHeight+"px");
		jQuery('.arrow-down').clickToggle(function() {
			var DropHeight = jQuery('.extrabox').height();
			jQuery(this).addClass('opened');
			jQuery('.extrabox').animate({'top': 0}, {duration: '800', easing: 'easeInOutExpo'});
			jQuery('.arrow-down i').removeClass('icon-angle-down').addClass('icon-angle-up');
			jQuery('.page-content, .sliderr, .headdown, .head, .breadcrumb, footer').animate({'opacity': 0.5}, {duration: '2000', easing: 'easeInOutExpo'});
		}, function() {
			var DropHeight = jQuery('.extrabox').height();
			jQuery(this).removeClass('opened');
			jQuery('.extrabox').animate({'top': -DropHeight}, {duration: '800', easing: 'easeInOutExpo'});
			jQuery('.arrow-down i').addClass('icon-angle-down').removeClass('icon-angle-up');
			jQuery('.page-content, .sliderr, .headdown, .head, .breadcrumb, footer').animate({'opacity': 1}, {duration: '2000', easing: 'easeInOutExpo'});
		});
	}
	
	
	
	// Tipsy
	$('.toptip').tipsy({fade: true,gravity: 's'});
	$('.bottomtip').tipsy({fade: true,gravity: 'n'});
	$('.righttip').tipsy({fade: true,gravity: 'w'});
	$('.lefttip').tipsy({fade: true,gravity: 'e'});
	$('#wrap_flickr img').tipsy({fade: true,gravity: 's'});
	
	// Blog Gallery Slider
	if ($(".projectslider")[0]) {
		jQuery('.projectslider').flexslider({
			animation: "fade",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			initDelay: 0,
			randomize: false,
			smoothHeight: true,
			keyboardNav: false
		});
	}
		
		
	// Tabs
	var tabs = jQuery('ul.tabs');
	tabs.each(function (i) {
		// get tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function (e) {
			// get tab's location
			var contentLocation = jQuery(this).attr('href');
			// Let go if not a hashed one
			if (contentLocation.charAt(0) === "#") {
				e.preventDefault();
				// add class active
				tab.removeClass('active');
				jQuery(this).addClass('active');
				// show tab content & add active class
				jQuery(contentLocation).fadeIn(500).addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	
	
	// Accordion
	jQuery("ul.tt-accordion li").each(function () {
		if (jQuery(this).index() > 0) {
			jQuery(this).children(".accordion-content").css('display', 'none');
		} else {
			if ($(".faq")[0]) {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='icon-ok-sign'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='icon-question-sign'></i>");
			} else {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='icon-minus-sign'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='icon-plus-sign'></i>");
			}
		}
		jQuery(this).children(".accordion-head").bind("click", function () {
			jQuery(this).parent().addClass(function () {
				if (jQuery(this).hasClass("active")) {
					return;
				} {
					return "active";
				}
			});
			if ($(".faq")[0]) {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("icon-ok-sign").removeClass("icon-question-sign");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("icon-ok-sign").addClass("icon-question-sign");
			} else {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("icon-minus-sign").removeClass("icon-plus-sign");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("icon-minus-sign").addClass("icon-plus-sign");
			}
		});
	});
	
	
	// Toggle
	jQuery("ul.tt-toggle li").each(function () {
		jQuery(this).children(".toggle-content:not(.open)").css('display', 'none');
		jQuery(this).find(".toggle-head-sign:not(.open)").html("&#43;");
		jQuery(this).children(".toggle-head").bind("click", function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			} else {
				jQuery(this).parent().addClass("active");
			}
			jQuery(this).find(".toggle-head-sign").html(function () {
				if (jQuery(this).parent().parent().hasClass("active")) {
					return "&minus;";
				} else {
					return "&#43;";
				}
			});
			jQuery(this).siblings(".toggle-content").slideToggle();
		});
	});
	
	
	jQuery("ul.tt-toggle").find(".toggle-content.active").siblings(".toggle-head").trigger('click');
	
	
	// 4Mob
	$("#header nav").before('<div id="mobilepro"><i class="icon-reorder icon-remove"></i></div>');
	if ($("body.isrtl")[0]) {
		$("#header .sf-menu a.sf-with-ul").before('<div class="subarrow"><i class="icon-angle-left"></i></div>');
		}else{
		$(".sf-menu a.sf-with-ul").before('<div class="subarrow"><i class="icon-angle-right"></i></div>');	
		}
	$('.subarrow').click(function () {
		$(this).parent().toggleClass("xpopdrop");
	});
	$('#mobilepro').click(function () {
		$('#header .sf-menu').slideToggle('slow', 'easeInOutExpo').toggleClass("xactive");
		$("#mobilepro i").toggleClass("icon-reorder");
	});
	$("body").click(function() {
		$('#header .xactive').slideUp('slow', 'easeInOutExpo').removeClass("xactive");
		$("#mobilepro i").addClass("icon-reorder");
	});
	$('#mobilepro, .sf-menu').click(function(e) {
		e.stopPropagation();
	});
	function checkWindowSize() {
		if ($(window).width() >= 960) {
			$('#header .sf-menu').css('display', 'block').removeClass("xactive");
		} else {
			$('#header .sf-menu').css('display', 'none');
		}
	}
	$(window).load(checkWindowSize);
	$(window).resize(checkWindowSize);
	// ToTop
	jQuery('#toTop').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	jQuery("#toTop").addClass("hidett");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() < 400) {
			jQuery("#toTop").addClass("hidett").removeClass("showtt");
		} else {
			jQuery("#toTop").removeClass("hidett").addClass("showtt");
		}
	});
	// Notification
	$(".notification-close").click(function () {
		$(this).parent().slideUp("slow");
		return false;
	});
	

	// quicksand
	if ($(".filter")[0]) {
		var $portfolioClone = $(".portfolio").clone();
		$(".filter a").click(function (e) {
			$(".filter li").removeClass("current");
			var $filterClass = $(this).parent().attr("class");
			if ($filterClass == "all") {
				var $filteredPortfolio = $portfolioClone.find("li");
			} else {
				var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
			}
				
			// Call quicksand
			$(".portfolio").quicksand($filteredPortfolio, {
				duration: 800,
				useScaling: 'true',
				easing: 'easeInOutCubic',
				adjustHeight: 'dynamic'
			}, function () {
				_lightbox();
				_hoverFX();
				if ($(".portfolio.msnry")[0]) {
						var msnry = $(".portfolio.msnry");
						_msnry(msnry);
					}
			});
			$(this).parent().addClass("current");
			e.preventDefault();
		});

	}
	
	
	// T20 Custom
	var isDesktop = (function() {
		return !('ontouchstart' in window) // works on most browsers 
		|| !('onmsgesturechange' in window); // works on ie10
	})();
	window.isDesktop = isDesktop;
	if( isDesktop ){
		if ($(".animated")[0]) {
			jQuery('.animated').css('opacity', '0');
		}
		jQuery('.animt').each(function () {
			var $curr = jQuery(this);
			var $currOffset = $curr.attr('data-gen-offset');
			if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
				$currOffset = 'bottom-in-view';
			}
			$curr.waypoint(function () {
				$curr.trigger('animt');
			}, {
				triggerOnce: true,
				offset: $currOffset
			});
		});
		jQuery('.animated').each(function () {
			var $curr = jQuery(this);
			$curr.bind('animt', function () {
				$curr.css('opacity', '');
				$curr.addClass($curr.data('gen'));
			});
		});
		jQuery('.animated').each(function () {
			var $curr = jQuery(this);
			var $currOffset = $curr.attr('data-gen-offset');
			if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
				$currOffset = 'bottom-in-view';
			}
			$curr.waypoint(function () {
				$curr.trigger('animt');
			}, {
				triggerOnce: true,
				offset: $currOffset
			});
		});
	}
	// Progress Load
	if ($(".progress-bar > span")[0]) {
		$('.progress-bar > span').waypoint(function() {
			$(this).each(function() {
				$(this).animate({
					width: $(this).attr('rel') + "%"
				}, 800);
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
	}
	
	
	if( isDesktop ){
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0
		});
	}
	
	
	
	// Sticky
	if ($(".my_sticky")[0]){
		$('.my_sticky').before('<div class="Corpse_Sticky"></div>');
		var isAdmin = $('#wpadminbar').height();
		$(window).scroll(function(){
			var offset = $(window).scrollTop();
			var window_width = $(window).width();
			var head_w = $('.my_sticky').height();
			if (window_width >= 959) {
				if(offset < 200){
					if($('.my_sticky').data('sticky') === true){
						$('.my_sticky').data('sticky', false);
						$('.my_sticky').stop(true).animate({opacity : 0}, 300, function(){
							$('.my_sticky').removeClass('sticky').css('padding-top','');
							$('.my_sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', '');
						});
					}
				} else {
					if($('.my_sticky').data('sticky') === false || typeof $('.my_sticky').data('sticky') === 'undefined'){
						$('.my_sticky').data('sticky', true);
						$('.my_sticky').stop(true).animate({opacity : 0},300,function(){
							$('.my_sticky').addClass('sticky').css('padding-top', isAdmin + 'px');
							$('.my_sticky.sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', head_w + 'px');
						});
					}
				}
			}
		});
		
		$(window).resize(function(){
			var window_width = $(window).width();
			if (window_width <= 959) {
				if($('.my_sticky').hasClass('sticky')){
					$('.my_sticky').removeClass('sticky');
					$('.my_sticky').stop(true).animate({opacity : 0}, 300, function(){
						$('.my_sticky').removeClass('sticky');
						$('.my_sticky').stop(true).animate({opacity : 1}, 300);
						$('.Corpse_Sticky').css('padding-top', '');
					});
				}
			}
		});
	}

	//Set Portfolio Height
	try {
		$('ul.portfolio').each(function(){
			var pr = $(this);
			pr.imagesLoaded( function(){

			var mh = 0 ;
			pr.find('li').each(function(){
				var h = jQuery(this).height();
				if (h>=mh){mh=h;}
			});
			pr.not('.msnry').find('li').height(mh);
			});	
        });

	} catch(e){}
	
	
	//Set shop items Height
	try {
		
		$('ul.products').each(function(){
			var pr = $(this);
			pr.imagesLoaded( function(){
				var mh = 0 ;
				pr.find('li.product').each(function(){
					var h = $(this).height();
					if (h>=mh){mh=h;}
				});
				
				pr.find('li.product').height(mh);
				
			});
		});
	} catch(e){}

	//Set shop items Height
	try {
		$('.owl-carousel').each(function(){
			var owl = $(this);
			owl.imagesLoaded( function(){
				var mh = 0 ;
				owl.find('.uowl').each(function(){;
					var h = $(this).height();
					if (h>=mh){mh=h;}
				});
				owl.find('.uowl').height(mh-5);
			});
		});
	} catch(e){}

	//Set Min-Height for Tour Tabs
	try {
		var th = jQuery('.tt_tour .tt_tabs_nav').height();
		th++;
		jQuery('.tt_tour .tt_tab').each(function(){
			jQuery(this).css('min-height',th);
		});
	} catch(e){}
	
	 _lightbox();
	 _hoverFX();
	
});


function _hoverFX(){
	jQuery('.hover-fx').each(function() {
		var u = jQuery(this);
		u.hover(
			function() {
				var w = u.width();
				var h = u.height();
				u.children('.fLeft').css('top', (h/2-20) + 'px').css('left',(w/2-37) + 'px');
				u.children('.fLeft.cntr').css('left',(w/2-20) + 'px');
				u.children('.fRight').css('bottom', (h/2-20) + 'px').css('left',(w/2-3) +'px');
			}, function() {
				u.children('.fLeft').css('top','').css('left','');
				u.children('.fRight').css('bottom','').css('left','');
			}
		);
    });
	
}
	
/* jPlayer */
function js_audioPlayer(l,f) {
	jQuery("#"+l).jPlayer({
		ready: function () {
			jQuery(this).jPlayer("setMedia", {
				mp3:f
			});
		},
		swfPath: "js",
		supplied: "mp3",
		wmode: "window",
		smoothPlayBar: true,
		cssSelectorAncestor:"#int"+l,
		keyEnabled: true
	});
return;
}


function _lightbox(){
		var lbarray = {			
			
		animation_speed: 'fast',
		overlay_gallery: true,
		autoplay_slideshow: false,
		slideshow: 5000,
		theme: 'pp_default', 
		opacity: 0.8,
		show_title: false,
		allow_resize: true,
		counter_separator_label: ' of ',
		deeplinking: false,
		default_width: 900,
		default_height: 500
		};

		var slctr='a[data-gal^="photo"],a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img), a[class^="prettyPhoto"]';
		//var slctr='a[data-gal^="photo"]';

		jQuery(slctr).prettyPhoto();
		
		var windowWidth = 	window.screen.width < window.outerWidth ?
                  			window.screen.width : window.outerWidth;
        var issmall = windowWidth < 500;
        
        if(issmall){
	      
        	jQuery(slctr).unbind('click.prettyphoto');
		}
        		
	}


/* jQuery Waypoints - Copyright (c) 2011-2013 Caleb Troughton - https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt */
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

/* niceScroll */
		jQuery(document).ready(function ($) {
			var isDesktop = (function() {
				return !('ontouchstart' in window) // works on most browsers 
				|| !('onmsgesturechange' in window); // works on ie10
			})();
			window.isDesktop = isDesktop;
			
			if( isDesktop ){
				$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5,horizrailenabled:0}); 
			}
		});


/* Ajax */		
jQuery(function($){
    
    if (!$(".ajax-loader")[0]) {
        var str = '<img class="ajax-loader hide" src="images/ajax-loader.gif" alt="Sending ..." /><div class="message hide"></div>';
        if ($("#contactform")[0]) {$('#contactform').append(str);}
        if ($("#quickcontact")[0]) {$('#quickcontact').append(str);}
        if ($("#faqform")[0]) {$('#faqform').append(str);}
        if ($("#freeform")[0]) {$('#freeform').append(str);}
        
        }
    
    // Ajax Contact Form in contact.html and contact2.html
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $('#contactform #submit').attr('disabled','disabled');
        $('#contactform .ajax-loader').show();
        
            $.post(action, {
                yourname: $('#contactform #your-name').val(),
                youremail: $('#contactform #your-email').val(),
                yoursubject: $('#contactform #your-subject').val(),
                yourmessage: $('#contactform #your-message').val()
            },
            function(data){
                $('#contactform .message').html(data).show();
                $('#contactform .ajax-loader').fadeOut(300);
                $('#contactform #submit').removeAttr('disabled');
                if(data.match('success') != null) {$('#contactform').trigger("reset").find('p').slideUp();};
            });
            
        return false;
    });
    
    
    
    // Ajax FAQ Form
    $('#faqform').submit(function(){
        var action = $(this).attr('action');
        $('#faqform .ttcf7-submit').attr('disabled','disabled');
        $('#faqform .ajax-loader').show();
        
            $.post(action, {
                yourname: $('#faqform #your-name').val(),
                youremail: $('#faqform #your-email').val(),
                department: $('#faqform #department').val(),
                yourmessage: $('#faqform #your-message').val()
            },
            function(data){
                $('#faqform .message').html(data).show();
                $('#faqform .ajax-loader').fadeOut(300);
                $('#faqform .ttcf7-submit').removeAttr('disabled');
                if(data.match('success') != null) {$('#faqform').trigger("reset").find('p').slideUp();};
            });
            
        return false;
    });

    
});
			
/*map extra */
var latlng = new google.maps.LatLng(0, 0);
		var myOptions = {
			zoom: 14,
			center: latlng,
			scrollwheel: true,
			scaleControl: true,
			disableDefaultUI: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var mapextra = new google.maps.Map(document.getElementById("mapextra"),
		myOptions);
		
		    var geocoder_mapextra = new google.maps.Geocoder();
			var address = 'Los Angeles';
			geocoder_mapextra.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					mapextra.setCenter(results[0].geometry.location);
					var image = "http://demo.themetor.com/official/demo1/wp-content/uploads/2014/08/mapmarker.png";
						var marker = new google.maps.Marker({
							map: mapextra, 
							icon: image,
							position: mapextra.getCenter()
						});
						
							var contentString = 'Hello World!';
							var infowindow = new google.maps.InfoWindow({
								content: contentString
							});
										
							google.maps.event.addListener(marker, 'click', function() {
							  infowindow.open(mapextra,marker);
							});
							
				} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
			});

/* chart */
(function($){
    /**
     * Pie chart animated.
     * @param element - DOM element
     * @param options - settings object.
     * @constructor
     */
    var VcChart = function(element, options) {
        this.el = element;
        this.$el = $(this.el);
        this.options = $.extend({
            color: 'tt_button',
            units: '',
            label_selector: '.tt_pie_chart_value',
            back_selector: '.tt_pie_chart_back',
            responsive: true
        }, options);
        this.init();
    };
    VcChart.prototype = {
        constructor: VcChart,
        _progress_v: 0,
        animated: false,
        colors: {
            'tt_button': 'rgba(247, 247, 247, 1)',
            'btn-primary': 'rgba(0, 136, 204, 1)',
            'btn-info': 'rgba(88, 185, 218, 1)',
            'btn-success': 'rgba(106, 177, 101, 1)',
            'btn-warning': 'rgba(255, 153, 0, 1)',
            'btn-danger': 'rgba(255, 103, 91, 1)',
            'btn-inverse': 'rgba(85, 85, 85, 1)'
        },
        init: function() {
            this.setupColor();
            this.value = this.$el.data('pie-value')/100;
            this.label_value = this.$el.data('pie-label-value') || this.$el.data('pie-value');
            this.$wrapper = $('.tt_pie_wrapper', this.$el);
            this.$label = $(this.options.label_selector, this.$el);
            this.$back = $(this.options.back_selector, this.$el);
            this.$canvas = this.$el.find('canvas');
            this.draw();
            this.setWayPoint();
            if(this.options.responsive === true) this.setResponsive();

        },
        setupColor: function() {
            if(typeof this.colors[this.options.color] !== 'undefined') {
                this.color = this.colors[this.options.color];
            } else if(typeof this.options.color === 'string' && this.options.color.match(/^rgba?\([^\)]+\)/)) {
                this.color = this.options.color;
            } else {
                this.color = 'rgba(247, 247, 247, 0.2)';
            }
        },
        setResponsive: function() {
            var that = this;
            $(window).resize(function(){
                if(that.animated === true) that.circle.stop();
                that.draw(true);
            });
        },
          draw: function(redraw) {
            var w = this.$el.addClass('tt_ready').width(),
                border_w = 5,
                radius;
            if(!w) w = this.$el.parents(':visible').first().width()-2;
            w = w/100*80;
            radius = w/2 - border_w - 1;
            this.$wrapper.css({"width" : w + "px"});
            this.$label.css({"width" : w, "height" : w, "line-height" : w+"px"});
            this.$back.css({"width" : w, "height" : w});
            this.$canvas.attr({"width" : w + "px", "height" : w + "px"});
            this.$el.addClass('tt_ready');
            this.circle = new ProgressCircle({
                canvas: this.$canvas.get(0),
                minRadius: radius,
                arcWidth: border_w
            });
            if(redraw === true && this.animated === true) {
                this._progress_v = this.value;
                this.circle.addEntry({
                    fillColor: this.color,
                    progressListener: $.proxy(this.setProgress, this)
                }).start();
            }
        },
        setProgress: function() {
            if (this._progress_v >= this.value) {
                this.circle.stop();
                this.$label.text(this.label_value + this.options.units);
                return this._progress_v;
            }
            this._progress_v += 0.005;
            var label_value = this._progress_v/this.value*this.label_value;
            var val = Math.round(label_value) + this.options.units;
            this.$label.text(val);
            return this._progress_v;
        },
        animate: function() {
            if(this.animated !== true) {
                this.animated = true;
                this.circle.addEntry({
                    fillColor: this.color,
                    progressListener: $.proxy(this.setProgress, this)
                }).start(5);
            }
        },
        setWayPoint: function() {
            if (typeof $.fn.waypoint !== 'undefined') {
                this.$el.waypoint($.proxy(this.animate, this), { offset: '85%' });
            } else {
                this.animate();
            }
        }
    };
    /**
     * jQuery
     * @param option - object with settings
     * @return {*}
     */
    $.fn.vcChat = function(option, value) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('tt_chart'),
                options = typeof option === 'object' ? option : {
                    color: $this.data('pie-color'),
                    units: $this.data('pie-units')
                };
            if (typeof option == 'undefined') $this.data('tt_chart', (data = new VcChart(this, options)));
            if (typeof option == 'string') data[option](value);
        });
    };
    /**
     * Allows users to rewrite function inside theme.
     */
    if ( typeof window['tt_pieChart'] !== 'function' ) {
        window.tt_pieChart = function() {
            $('.tt_pie_chart:visible').vcChat();
        }
    }
    $(document).ready(function(){
        !window.tt_iframe && tt_pieChart();
    });

})(window.jQuery);

/* Extra Panel Google Map */
google.maps.event.addDomListener(window, "load", mapfucntion_map_extra);
function mapfucntion_map_extra() {
	var latlng = new google.maps.LatLng(0, 0);
	var myOptions = {
		zoom: 14,
		center: latlng,
		scrollwheel: true,
		scaleControl: true,
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map_extra = new google.maps.Map(document.getElementById("map_extra"),
	myOptions);
	var styles = [{stylers: [{ hue: "#cc8800" },{ saturation: -20 }]}];var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});map_extra.mapTypes.set("map_style", styledMap);  map_extra.setMapTypeId("map_style");
	var geocoder_map_extra = new google.maps.Geocoder();
	var address = 'Ney York';
	geocoder_map_extra.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map_extra.setCenter(results[0].geometry.location);
			var image = "http://demo.themetor.com/thelaw/wp-content/uploads/2014/11/mapmarker.png";
				var marker = new google.maps.Marker({
					map: map_extra, 
					icon: image,
					position: map_extra.getCenter()
				});
				
		} else {
		alert("Geocode was not successful for the following reason: " + status);
	}
	});
}

// Ajax Quick Contact Form in Top Extra Panel
    $('#quickcontact').submit(function(){
        var action = $(this).attr('action');
        $('#quickcontact .ttcf7-submit').attr('disabled','disabled');
        $('#quickcontact .ajax-loader').show();
            
            $.post(action, {
                youremail: $('#quickcontact #your-email').val(),
                yourmessage: $('#quickcontact #your-message').val()
            },
            function(data){
                $('#quickcontact .message').html(data).show();
                $('#quickcontact .ajax-loader').fadeOut(300);
                $('#quickcontact .ttcf7-submit').removeAttr('disabled');
                if(data.match('success') != null) {$('#quickcontact').trigger("reset").find('p').slideUp();};
            });
            
        return false;
    });
    