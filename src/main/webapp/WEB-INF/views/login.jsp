<!DOCTYPE html>

<html lang="en-US">
<!--<![endif]-->
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- Basic Page Needs -->
<meta charset="UTF-8">

<title>Autoecole | Login</title>

<meta name="description" content="Car Rent Theme HTML5 Website Template">

<meta name="robots" content="index, follow">

<!-- Mobile Specific Metas-->
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

<!-- Favicons -->
<link href="resources/images/favicon.ico" rel="shortcut icon">

<!-- Google Fonts -->
<link
	href='http://fonts.googleapis.com/css?family=Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic|Marcellus:400,400italic,700,700italic&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext,greek-ext,greek,vietnamese'
	rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Marcellus'
	rel='stylesheet' type='text/css'>

<!-- Stylesheets -->
<link rel='stylesheet' id='stylesheet-css'
	href='resources/css/style.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='icons-css'
	href='resources/css/icons.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css'
	href='resources/css/animate.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='shortcodes-css'
	href='resources/css/shortcodes.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='shop-css'
	href='resources/css/shop.css?ver=1.0' type='text/css' media='all' />

<!-- Custom CSS -->
<link rel='stylesheet' id='custom-css'
	href='resources/css/custom-styles.css' type='text/css' media='all' />

<!-- Responsive CSS -->
<link rel='stylesheet' id='responsive-css'
	href='resources/css/responsive.css' type='text/css' media='all' />


</head>


<body class="home shop shop-page shop-cart tt_responsive">

	<div id="home">

		<div id="layout" class="full">




			<div class="breadcrumb-place ">
				<div class="row clearfix">
					<h1 class="page-title">Login</h1>
				</div>
				<!-- row -->
			</div>
			<!-- breadcrumb -->

			<div class="page-content">

				<div class="row clearfix">

					<div class="shop">
						<c:if test="${exist == false}">
							<div class="notification-box notification-box-error notif-anim">
								<p>
									<i class="icon-remove-sign"></i>${msg}</p>
								<a class="notification-close" href="#"><i
									class="icon-remove"></i></a>
							</div>
						</c:if>
						<div class="cart-collaterals">





							<form class="shipping_calculator" action="login" method="post"
								commandName="Loginmodel">
								<h2>
									<a href="#">Entrer votre login et mot de passe</a>
								</h2>







								<section class="shipping-calculator-form">



									<p class="form-row form-row-wide">
										<input type="text" class="input-text" value=""
											placeholder="username" name="username" />
									</p>

									<p class="form-row form-row-wide">
										<input type="password" name="password" class="input-text"
											value="" placeholder="password" />
									</p>

									<p>
									<p class="form-row form-row-wide">
										<select name="autoecoleid" class="country_to_state">
											<option value="">Select auto ecole&hellip;</option>
											<c:forEach items="${ListAuto}" var="listauto">
												<option value="${listauto.id}">${listauto.nom}</option>
											</c:forEach>



										</select>
									</p>

									<p class="form-row form-row-wide">
										<span> <select name="calc_shipping_state">
												<option value="">Select a role&hellip;</option>

												<c:forEach items="${ListRoles}" var="listroles">
													<option value="${listroles.id}">${listroles.rolename}</option>
												</c:forEach>

										</select>
										</span>
									</p>
									<p>
										<button type="submit" name="calc_shipping" value="1"
											class="checkout-button button alt wc-forward">Submit</button>
									</p>

								</section>
							</form>


						</div>

					</div>
					<!-- end row -->

				</div>
				<!-- end page-content -->




			</div>
			<!-- end layout -->

		</div>
		<!-- end frame -->



		<!-- Javascripts -->
		<script type='text/javascript'
			src='resources/js/jquery/jquery.js?ver=1.11.0'></script>
		<script type='text/javascript' src='resources/js/themetor.js?ver=1.0'></script>
		<script type='text/javascript'
			src='resources/js/jquery.nicescroll.min.js?ver=3.5.1'></script>
		<script type='text/javascript'
			src='resources/js/jquery.prettyPhoto.js?ver=3.1.6'></script>
		<script type="text/javascript"
			src="http://maps.google.com/maps/api/js"></script>
		<script type='text/javascript' src='resources/js/custom.js?ver=1.0'></script>
</body>
</html>