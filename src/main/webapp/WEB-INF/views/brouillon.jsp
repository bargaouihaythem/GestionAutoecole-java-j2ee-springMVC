<!DOCTYPE html>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en-US">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<meta charset="UTF-8">

<title>Contact 2 | Official Car Rent Theme*</title>

<meta name="description"
	content="Official Car Rent Theme HTML5 Website Template" />


<meta name="robots" content="index, follow" />

<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

<!-- Favicons -->

<link href="images/favicon.ico" rel="shortcut icon" />

<!-- Google Fonts -->
<link
	href='http://fonts.googleapis.com/css?family=Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext,greek-ext,greek,vietnamese'
	rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Marcellus'
	rel='stylesheet' type='text/css'>

<!-- Stylesheets -->
<link rel='stylesheet' id='stylesheet-css'
	href='resources/css/style.css?ver=1.1' type='text/css' media='all' />
<link rel='stylesheet' id='icons-css'
	href='resources/css/icons.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css'
	href='resources/css/animate.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='shortcodes_front-css'
	href='resources/css/shortcodes.css?ver=4.3.2' type='text/css'
	media='all' />


<!-- Custom CSS -->
<link rel='stylesheet' id='custom-css'
	href='resources/css/custom-styles.css' type='text/css' media='all' />
<!-- Responsive CSS -->
<link rel='stylesheet' id='responsive-css'
	href='resources/css/responsive.css?ver=1.0' type='text/css' media='all' />

<meta charset='utf-8' />
<link rel='stylesheet' href='resources/calendar/lib/cupertino/jquery-ui.min.css' />
<link href='resources/calendar/fullcalendar.css' rel='stylesheet' />
<link href='resources/calendar/fullcalendar.print.css' rel='stylesheet'
	media='print' />
<script src='resources/calendar/lib/moment.min.js'></script>
<script src='resources/calendar/lib/jquery.min.js'></script>
<script src='resources/calendar/fullcalendar.min.js'></script>




<link href="resources/theme/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<script src="resources/theme/js/jquery.min.js"></script>
<script src="resources/theme/bootstrap/js/bootstrap.min.js"></script>
<script src="resources/theme/js/moment.min.js"></script>
<link href='resources/theme/bootstrap/css/bootstrap.css'
	rel='stylesheet'>


<script type="text/javascript">
	function SaveEvent() {
		//alert("save event enter");
		nameclassroom = $("#nameclassroom"), matiere = $("#matiere"),
		usernameProf = $("#usernameProf") , hourBegin = $('#hourBegin') ,hourEnd = $('#hourEnd')
		, level = $("#level");
		

		$.ajax({
			 			url : 'calend',
			 			type : 'POST',
			data : {
				nameclassroom : $("#nameclassroom").val(), 
				matiere : $("#matiere").val(),
				level : $("#level").val(),
				usernameProf : $("#usernameProf").val(),
				hourBegin : $("#hourBegin").val(),
				hourEnd : $("#hourEnd").val(),
				start : gstart,
				end : gend

			},
			success : function(data) {
				//	alert("start" + gend);

				$('#calendar').fullCalendar('renderEvent', {
					id : 999,
					title :  $("#nameclassroom").val(),
					start : gstart,
					end : gend
				}, true);
				//	$('#calendar').fullCalendar('unselect');
				$("#myModal").modal("hide");



			}
		});
	}
	
	function renderCal() {

		
		usernameProf = $("#usernameProf");
	

		$.ajax({
			 			url : 'getevents',
			 			type : 'GET',
			data : {
			
				usernameProf : $("#usernameProf").val()
			
			},
			success : function(data) {
// 				$('#calendar').fullCalendar('events', {
					
					
// 				}


			}
		});

	}
</script>

<script>
	$(document)
			.ready(
					function() {

						function formatDate(date) {
							var d = new Date(date), month = ''
									+ (d.getMonth() + 1), day = ''
									+ d.getDate(), year = d.getFullYear();

							if (month.length < 2)
								month = '0' + month;
							if (day.length < 2)
								day = '0' + day;

							return [ year, month, day ].join('-');
						}

						var mydate = new Date();

						var currentLangCode = 'en';

						// build the language selector's options
						var currentLangCode = 'en';

						// build the language selector's options
						$
								.each(
										$.fullCalendar.langs,
										function(langCode) {
											$('#lang-selector')
													.append(
															$('<option/>')
																	.attr(
																			'value',
																			langCode)
																	.prop(
																			'selected',
																			langCode == currentLangCode)
																	.text(
																			langCode));
										});

						// rerender the calendar when the selected option changes
						$('#lang-selector').on('change', function() {
							if (this.value) {
								currentLangCode = this.value;
								$('#calendar').fullCalendar('destroy');
								renderCalendar();
							}
						});
						function renderCalendar() {
							usernameProf = $("#usernameProf").val() ;
				
						$('#calendar').fullCalendar({
							theme: true,
							header : {
								left : 'prev,next today',
								center : 'title',
								right : 'month,agendaWeek,agendaDay'
							},

							defaultDate : formatDate(mydate),
							businessHours : true, // display business hours
							selectable : true,
							selectHelper : true,
							lang: currentLangCode,
							data : {
								
								usernameProf : $("#usernameProf").val(),
								course: $("#course").val(),
								level : $("#level").val()
							
							},
							defaultView: 'agendaWeek',
							
							events : 'getevents?usernameProf='+ $("#usernameProf").val()+'&course='+$("#course").val()+'&level='+$("#level").val(),
							select : function(start, end, allDay) {
								gstart = start.toDate();
								gend = end.toDate();
								gallDay = allDay;

								$("#hourBegin").val(moment(start).format('MM/DD/YYYY hh:mm A'));
								$("#hourEnd").val(moment(end).format('MM/DD/YYYY hh:mm A'));
								$("#myModal").modal("show");
								$('#calendar').fullCalendar('unselect');

							},

							editable : true,
							eventLimit : true, // allow "more" link when too many events,

						});
						}
						// 						$("#calendar").fullCalendar("unselect");
						renderCalendar();
					});
</script>


<style>
body {
	margin: 40px 10px;
	padding: 0;
	font-family: "Lucida Grande", Helvetica, Arial, Verdana, sans-serif;
	font-size: 14px;
}

#calendar {
	max-width: 900px;
	margin: 0 auto;
}
</style>


</head>


<body class="home page tt_responsive">

	<div id="home">

		<div id="layout" class="full">

			<header id="header" class="header_v2 header_v9 overlay-header">
				
				<div class="extrabox">
					
					<div class="row clearfix">
						
						<div class="extra-content">
							
							<div id="text-4" class="ep_widget widget_text grid_6">
								
								<h3 class="col-title">Contact</h3>
								<span class="liner"></span>			
								
								<div class="textwidget">
									
									<div class="ttcf7" lang="en-US" dir="ltr">
										<div class="screen-reader-response"></div>
										
										<form name="contactform" id="contactform" action="contact.php" method="post" class="ttcf7-form" novalidate="novalidate">
											<p>Your Name (required)<br />
												<span class="ttcf7-form-control-wrap your-name"><input type="text" name="your-name" id="your-name" value="" size="40" class="ttcf7-form-control ttcf7-text ttcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span></p>
											<p>Your Email (required)<br />
												<span class="ttcf7-form-control-wrap your-email"><input type="email" name="your-email" id="your-email" value="" size="40" class="ttcf7-form-control ttcf7-text ttcf7-email ttcf7-validates-as-required ttcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span></p>
											<p>Subject<br />
												<span class="ttcf7-form-control-wrap your-subject"><input type="text" name="your-subject" id="your-subject" value="" size="40" class="ttcf7-form-control ttcf7-text" aria-invalid="false" /></span> </p>
											<p>Your Message<br />
												<span class="ttcf7-form-control-wrap your-message"><textarea name="your-message" id="your-message" cols="40" rows="10" class="ttcf7-form-control ttcf7-textarea" aria-invalid="false"></textarea></span> </p>
											<p><input type="submit" value="Send" class="ttcf7-form-control ttcf7-submit" /></p>
											<div class="ttcf7-response-output ttcf7-display-none"></div>
										</form>
									</div>
								
								</div>
							
							</div>
							
							<div id="text-5" class="ep_widget widget_text grid_6">
								<h3 class="col-title">Map</h3>
								<span class="liner"></span>			
								<div class="textwidget"><div id="mapextra" style="" class="gmap full custom-gp"></div></div>
							</div>           
						
						</div><!-- extra content -->
						
						<div class="arrow-down arrow-right"><i class="icon-angle-down"></i></div><!-- arrow down -->
					
					</div><!-- end row -->
				
				</div><!-- end extrabox -->			            



				<div class="head my_sticky">
					
					<div class="row clearfix">
						
				
						
						<!-- Menu -->
						<nav class="main">
							<ul id="menu-main" class="sf-menu">
								<li class="menu-item current-menu-item selectedLava"><a href="">Home</a>
								
								</li>
								<li class="menu-item"><a href="#">inscription</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="authentification" target="blank_">Login</a></li>
										
									</ul>
								</li>
								<li class="menu-item"><a href="#">gestion condidat</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="addCondidat">Ajouter</a></li>
										<li class="menu-item"><a href="listCondidat">Liste Condidat</a></li>
		
									</ul>
								</li>
								<li class="submenu_4col menu-item"><a href="#">gestion séance</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="addseance"><i class="icon-align-justify icon-xs"></i>Ajouter Seance</a></li>
										<li class="menu-item"><a href="editseance"><i class="icon-bullhorn icon-xs"></i>Editer Séance</a></li>
										<li class="menu-item"><a href="Liste Séances"><i class="icon-hand-up icon-xs"></i>Button</a></li>

									</ul>
								</li>
								<li class="menu-item"><a href="#">gestion examen</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="addexam">Ajouter Examen</a></li>
										<li class="menu-item"><a href="editexam">Modifier examens</a></li>
										<li class="menu-item"><a href="Listeexam">Liste des examnes</a></li>
								
								
									</ul>
								</li>
								<li class="menu-item"><a href="blog-2.html">gestion moniteur</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="addmoniteur"></a>Ajouter moniteur</li>
										<li class="menu-item"><a href="editmoniteur">Modifier moniteur</a></li>
										<li class="menu-item"><a href="listmoniteur">Liste des moniteur</a></li>

									</ul>
								</li>
								
								<li class="menu-item"><a href="index">Contact</a>
									<ul class="sub-menu">
										<li class="menu-item"><a href="contact">Contact</a></li>
									</ul>
								</li>
							</ul>
						</nav><!-- /Menu -->
					
					</div><!-- row -->
				
				</div><!-- headdown -->
			
			</header><!-- end header -->
			<!-- end header -->

			<div class="breadcrumb-place ">
				<div class="row clearfix">
					<h1 class="page-title">Ajout séance</h1>
				</div>
				<!-- row -->
			</div>
			<!-- breadcrumb -->

			<div class="page-content">

				<div class="row clearfix">

					<div class="grid_6">

						<div class="clearfix title-left">
							<h2 class="col-title">
								<i class="title-icon icon-edit custom-icon-color25"></i>
					Ajout séance
							</h2>
							<span class="liner"></span>
						</div>

	<div id='calendar'></div>
	
	<!-- Modal -->
			<div class="modal fade" id="myModal" role="dialog">
				<div class="modal-dialog">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header" style="padding: 35px 50px;">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4>
								<span class="glyphicon glyphicon-lock"></span>
								Create
							</h4>
						</div>
						<div class="modal-body" style="padding: 40px 50px;">
							<form role="form">
								<div class="form-group">
									<label for="usrname"><span
										class="glyphicon glyphicon-user"></span>meeting</label> <input type="text"
										class="form-control"
										placeholder="batch"
										name="nameclassroom" id="nameclassroom">
								</div>
								<div class="form-group">
									<label for="sign-up__username">cours</label> <select id="matiere"
										name="matiere" style="color: ${colorTrue};"
										data-placeholder="cours"
										class="form-control">
										<option value="0"></option>
										<c:forEach items="${courselist}" var="list" varStatus="status">
											<option value="${list.id}">${list.name}</option>
										</c:forEach>
									</select>
								</div>


								<div class="form-group">
									<label for="sign-up__username">level</label> <select id="level"
										name="level" style="color: ${colorTrue};"
										data-placeholder="select level"
										class="form-control">
										<option value="0"></option>
										<c:forEach items="${levellist}" var="list" varStatus="status">
											<option value="${list.id}">${list.name}</option>
										</c:forEach>
									</select>
								</div>

								<div class="form-group">
									<label for="psw"><span class="glyphicon glyphicon-user"></span>
										date</label> <input
										type="text" class="form-control" readOnly
										placeholder="date"
										name="hourBegin" id="hourBegin">
								</div>


								<div class="form-group">
									<label for="psw"><span class="glyphicon glyphicon-user"></span>
										date</label> <input
										type="text" class="form-control" readOnly
										placeholder="batch"
										name="hourEnd" id="hourEnd">
								</div>

								<input name="usernameProf" id="usernameProf"
									value="${usernameProf}" type="hidden" /> <input name="course"
									id="course" value="${course}" type="hidden" /> <input
									name="level" id="level" value="${level}" type="hidden" />




								<button type="button" class="btn btn-success btn-block"
									onclick="SaveEvent()">
									<span class="glyphicon glyphicon-off"></span>
									creeer
								</button>
							</form>
						</div>

					</div>

				</div>

					</div>



				</div>
				<!-- end row -->

			</div>
			<!-- end page-content -->



		</div>
		<!-- end layout -->

	</div>
	<!-- end frame -->


    

	<div id="toTop">
		<i class="icon-angle-up"></i>
	</div>
	<!-- Back to top -->

	<!-- Javascripts -->
	<script type='text/javascript'
		src='resources/js/jquery/jquery.js?ver=1.11.0'></script>
	<script type='text/javascript' src='resources/js/themetor.js?ver=1.0'></script>
	<script type='text/javascript'
		src='resources/js/tt_composer_front.js?ver=4.3.2'></script>
	<script type='text/javascript'
		src='resources/js/jquery.nicescroll.min.js?ver=3.5.1'></script>
	<script type='text/javascript'
		src='resources/js/jquery.prettyPhoto.js?ver=3.1.6'></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js"></script>
	<script type='text/javascript' src='resources/js/custom.js?ver=1.0'></script>
	
<script src="resources/modal/jquery2.min.js"></script>
<script src="resources/modal/bootstrap2.min.js"></script>
<script src='resources/theme/js/fullcalendar.min.js'></script>
<script src='resources/calendar/lang-all.js'></script>

	<script type="text/javascript">
		function mapfucntion_map266118220() {

			var latlng = new google.maps.LatLng(0, 0);
			var myOptions = {
				zoom : 14,
				center : latlng,
				scrollwheel : true,
				scaleControl : true,
				disableDefaultUI : false,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			var map266118220 = new google.maps.Map(document
					.getElementById("map266118220"), myOptions);
			var styles = [ {
				stylers : [ {
					hue : "#cc8800"
				}, {
					saturation : -20
				} ]
			} ];
			var styledMap = new google.maps.StyledMapType(styles, {
				name : "Styled Map"
			});
			map266118220.mapTypes.set("map_style", styledMap);
			map266118220.setMapTypeId("map_style");
			var geocoder_map266118220 = new google.maps.Geocoder();
			var address = 'Los Angeles';
			geocoder_map266118220
					.geocode(
							{
								'address' : address
							},
							function(results, status) {
								if (status == google.maps.GeocoderStatus.OK) {
									map266118220
											.setCenter(results[0].geometry.location);
									var image = "http://demo.themetor.com/thelaw/wp-content/uploads/2015/11/mapmarker.png";
									var marker = new google.maps.Marker({
										map : map266118220,
										icon : image,
										position : map266118220.getCenter()
									});

									var contentString = 'Hello World!';
									var infowindow = new google.maps.InfoWindow(
											{
												content : contentString
											});

									google.maps.event.addListener(marker,
											'click', function() {
												infowindow.open(map266118220,
														marker);
											});

								} else {
									alert("Geocode was not successful for the following reason: "
											+ status);
								}
							});

		}
		google.maps.event.addDomListener(window, "load",
				mapfucntion_map266118220);
	</script>

</body>
</html>
