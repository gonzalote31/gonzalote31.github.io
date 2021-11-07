/* --------------------- Copyright (c) 2020 ----------------------- */
(function($){
	"use strict";
	
	// Preloader Js
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(200).fadeOut("slow");
	});
	
	// ready function
	jQuery(document).ready(function($){
		var $this = $(window);
		
		// bg window height Js
		var window_height = window.innerHeight;
		$(".prt_home_wrapper").css("height", window_height);
		
		// Portfolio Load More
		$(".prt_loadmore").slice(0, 3).show();
		if ($(".prt_loadmore:hidden").length == 3) {
			$("#loadMore").css('display','none');
		}
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".prt_loadmore:hidden").slice(0, 5).slideDown();
			if ($(".prt_loadmore:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
		
		// About Page Profile Slider Js
		$('.prt_profile_slider .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:3
				}
			}
		});
		// Skills Charts
		var circleHtmlCss = Circles.create({
			id: 'circles-Html-Css',
			value: 75,
			radius: 100,
			number: 75,
			text: '75%',
			width: 8,
			colors: ["#1a3d7c", "#f26525"],
			duration: 900
		});
		var circlejs = Circles.create({
			id: 'circles-JS',
			value: 80,
			radius: 100,
			number: 80,
			text: '80%',
			width: 8,
			colors: ["#1a3d7c", "#c59828"],
			duration: 900
		});
		var circleb = Circles.create({
			id: 'circles-B',
			value: 70,
			radius: 100,
			number: 70,
			text: '70%',
			width: 8,
			colors: ["#1a3d7c", "#564e9f"],
			duration: 900
		});
		var circlejQuery = Circles.create({
			id: 'circles-jQuery',
			value: 75,
			radius: 100,
			number: 75,
			text: '75%',
			width: 8,
			colors: ["#1a3d7c", "#79cef4"],
			duration: 900
		});
		var circleVuejs = Circles.create({
			id: 'circles-Vuejs',
			value: 70,
			radius: 100,
			number: 70,
			text: '70%',
			width: 8,
			colors: ["#1a3d7c", "#4dba87"],
			duration: 900
		});
		var circleVuetifyjs = Circles.create({
			id: 'circles-Vuetifyjs',
			value: 70,
			radius: 100,
			number: 70,
			text: '70%',
			width: 8,
			colors: ["#1a3d7c", "#aeddff"],
			duration: 900
		});
		var circlePHP = Circles.create({
			id: 'circles-PHP',
			value: 85,
			radius: 100,
			number: 85,
			text: '85%',
			width: 8,
			colors: ["#1a3d7c", "#767bb3"],
			duration: 900
		});
		var circleLaravel = Circles.create({
			id: 'circles-Laravel',
			value: 85,
			radius: 100,
			number: 85,
			text: '85%',
			width: 8,
			colors: ["#1a3d7c", "#e6442f"],
			duration: 900
		});
		var circleCodeIgniter = Circles.create({
			id: 'circles-CodeIgniter',
			value: 75,
			radius: 100,
			number: 75,
			text: '75%',
			width: 8,
			colors: ["#1a3d7c", "#ff5623"],
			duration: 900
		});
		var circleWordPress = Circles.create({
			id: 'circles-WordPress',
			value: 60,
			radius: 100,
			number: 60,
			text: '60%',
			width: 8,
			colors: ["#1a3d7c", "#ffffff"],
			duration: 900
		});
		var circleSwift = Circles.create({
			id: 'circles-Swift',
			value: 70,
			radius: 100,
			number: 70,
			text: '70%',
			width: 8,
			colors: ["#1a3d7c", "#f47f3c"],
			duration: 900
		});
		var circleMySQL = Circles.create({
			id: 'circles-MySQL',
			value: 65,
			radius: 100,
			number: 65,
			text: '65%',
			width: 8,
			colors: ["#1a3d7c", "#cd8b2b"],
			duration: 900
		});
		var circlePostgreSQL = Circles.create({
			id: 'circles-PostgreSQL',
			value: 65,
			radius: 100,
			number: 65,
			text: '65%',
			width: 8,
			colors: ["#1a3d7c", "#326590"],
			duration: 900
		});
		var circleGit = Circles.create({
			id: 'circles-Git',
			value: 60,
			radius: 100,
			number: 60,
			text: '60%',
			width: 8,
			colors: ["#1a3d7c", "#f05133"],
			duration: 900
		});
		var circleGithub = Circles.create({
			id: 'circles-Github',
			value: 70,
			radius: 100,
			number: 70,
			text: '70%',
			width: 8,
			colors: ["#1a3d7c", "#ffffff"],
			duration: 900
		});
		var circleIllustrator = Circles.create({
			id: 'circles-Illustrator',
			value: 80,
			radius: 100,
			number: 80,
			text: '80%',
			width: 8,
			colors: ["#1a3d7c", "#ff8511"],
			duration: 900
		});
		var circlePhotoshop = Circles.create({
			id: 'circles-Photoshop',
			value: 85,
			radius: 100,
			number: 85,
			text: '85%',
			width: 8,
			colors: ["#1a3d7c", "#00c8ff"],
			duration: 900
		});
		var circleXD = Circles.create({
			id: 'circles-XD',
			value: 70,
			radius: 100,
			number: 70,
			text: '70%',
			width: 8,
			colors: ["#1a3d7c", "#ff37c1"],
			duration: 900
		});
		// Service Page Client Slider Js
		$('.prt_client_slider .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		});
		// Portfolio popup Js
		$('.popup-gallery').magnificPopup({
			delegate: 'a.imageopen',
			type: 'image',
			tLoading: 'Cargando imagen #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
		// Service Page Image Slides Js
		var ic = 1;
		showSlides();
		function showSlides() {
			if(!$('.prt_services_slider_imgs').hasClass('active')){
				$('div.prt_services_slider_imgs img').removeClass('active');
				var target = $('div.prt_services_slider_imgs .img_'+ic);
				var targetImg = target[0].outerHTML;
				target.remove();
				$('div.prt_services_slider_imgs').prepend(targetImg);
				$('div.prt_services_slider_imgs img:first').addClass('active');
				$('div.prt_services_slider_box .prt_img_click').removeClass('active');
				$(this).addClass('active');
				ic++
			}
			if (ic == 2) {
				document.getElementById("img_1").style.transform = "translateX(0) scale(1)";
				document.getElementById("img_1").style.transition = "fadeIn 0.5s";
				document.getElementById("img_1").style.zIndex = 4;
			}
			if (ic == 3) {
				document.getElementById("img_1").style.transform = "translateX(-44px) scale(0.9)";
				document.getElementById("img_1").style.transition = "all 0.3s";
				document.getElementById("img_1").style.zIndex = 3;
			}
			if (ic == 4) {
				document.getElementById("img_1").style.transform = "translateX(-85px) scale(0.8)";
				document.getElementById("img_1").style.transition = "all 0.3s";
				document.getElementById("img_1").style.zIndex = 2;
			}
			if (ic == 5) {
				document.getElementById("img_1").style.transform = "translateX(-125px) scale(0.7)";
				document.getElementById("img_1").style.transition = "all 0.3s";
				document.getElementById("img_1").style.zIndex = 1;
				ic = 1;
			}
			setTimeout(showSlides, 3000);
		}
		// Open Close main Section Js
		var AplCss;
		var targetSection;
		var tar;
		var timing = 500;
		$('.prt_about_wrapper').css('top', -document.getElementById("about_wrapper").clientHeight);
		$('.prt_about_wrapper').css('display', 'none');
		$('div.prt_menu_wrapper a').on('click' , function(e){
			e.preventDefault();
			tar = $(this).attr('href').split('#')[1];
			targetSection = $('.prt_'+tar+'_wrapper');
			if(tar == 'about'){
				AplCss  = {'top':0};
			}else if(tar == 'contact'){
				AplCss  = {'left':0};
			}else if(tar == 'services'){
				AplCss  = {'top':0};
			}else if(tar == 'portfolio'){
				AplCss  = {'right':0};
			}
			targetSection.css('display', 'block');
			targetSection.animate(AplCss, timing);
		});
		$('img.prt_close').on('click' , function(){
			hide_section();
			setTimeout(function(){ $("#home_wrapper").css('top', 0); }, 2 * timing);
		});
		$('img#prt_close_tab').on('click' , function(){
			hide_section();
			setTimeout(function(){ $("#home_wrapper").css('top', 0); }, 2 * timing);
		});
		function hide_section(){
			if(tar == 'about'){
				AplCss  = {'display':'none','top': - document.getElementById("about_wrapper").clientHeight};
			}else if(tar == 'contact'){
				var cont = $("#contacto_wrapper").position();
				$("#home_wrapper").animate({'top':-cont.top, 'bottom':0}, 0);
				AplCss  = {'display':'none','left':'100%'};
			}else if(tar == 'services'){
				var serv = $("#services_wrapper").position();
				$("#home_wrapper").animate({'top':-serv.top, 'bottom':0}, 0);
				AplCss  = {'display':'none','top': document.getElementById("services_wrapper").clientHeight - serv.top};
			}else if(tar == 'portfolio'){
				var port = $("#portfolio_wrapper").position();
				$("#home_wrapper").animate({'top':-port.top, 'bottom':0}, 0);
				AplCss  = {'display':'none','right':'100%'};
			}
			setTimeout(function(){ targetSection.css('display', 'none'); }, timing);
			targetSection.animate(AplCss, timing);
		};
	});
})();