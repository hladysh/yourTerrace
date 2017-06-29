$(function(){


	// function window resize begin
	$(window).resize(function(){

		// function window resize popas center begin
		var top = ($(window).height() - $('.popup').outerHeight()) / 2 ;
		if (top < 0) {
			top = 0;
		}
		$('.popup').css({
			left: ($(window).width() - $('.popup').outerWidth()) / 2 +'px',
			top: top +'px'
		});
		$('.details-popap').css({
			left: ($(window).width() - $('.details-popap').outerWidth()) / 2 +'px',
			top: ($(window).height() - $('.details-popap').outerHeight()) / 2 +'px'
		});
		// function window resize popap center begin
		
		// function append button on window width <= 768 px to mnavigation
		if ($(window).width() <= 768 ) {
			$('.free-sample').appendTo('.nav-list');
			// add style center to detail slider img
			$(' .img-wrap img').css({ 'margin': '0 auto'});
		} else {
			// $('.nav-list .free-sample').css({ display: 'none' });
			// header-wrap
			$('.free-sample').appendTo('.header-wrap');
		}
	});
	$(window).resize();
	// function window resize end

	// menu window size small 868px begin
	$("#nav-toggle").click(function () {
		menuToggle();
	});


	function menuToggle() {
		$("#nav-toggle").toggleClass("active");
		$('.nav').slideToggle();
		return false;
	};

	// menu window size small 868px wns


	// show all phone begin
	$('.ic-arrow-bottom, .header-phone .ic').click(function() {
		allPhone();
	});

	function allPhone() {
		$('.header-phone').toggleClass('all-phone');
		$('.phone-hide').slideToggle(200, function(){
			$('.ic-arrow-bottom').toggleClass('ic-arrow-top');
			$('.phone-hide').toggleClass('open');
		});
	};
	// show all phone end


	// popaps begin
	$('.callback').click(function(event) {
		event.preventDefault();
		hideoverflow();
		$('.title-form').text('Зворотній дзвінок');
		$('.overlay, .contact-popap, close-popup').fadeIn(300);
	});

	$('.bnt-sample').click(function(event) {
		event.preventDefault();
		hideoverflow();
		$('.title-form').text('Безкоштовний взірець');
		$('.overlay, .contact-popap, close-popup').fadeIn(300);
	});

	$('.btn-buy').click(function(event) {
		event.preventDefault();
		hideoverflow();
		$('.form-title').text('Ви бажаєте замовити товар:');
		var titleproduct =  $(this).closest('.product-details').find('.product-name').text();
		$('.title-form').text(titleproduct);
		$('.btn-send').val('Замовити');
		$('.overlay, .contact-popap, close-popup').fadeIn(300);
	});

	$('.btn-detail').click(function(event) {
		var productsCat = $(this).closest('.product-details').find('.products-cat').text();
		var productsName = $(this).closest('.product-details').find('.product-name').text();
		$('.details-wrap .products-cat').text(productsCat);
		$('.details-wrap .product-name').text(productsName);
		event.preventDefault();
		hideoverflow();
		$('.overlay, .details-popap, close-popup').fadeIn(300);	
	});

	function hideoverflow() {
		$('body').css({'overflow-y': 'hidden'});
	};
		// fuction close popaps begin
		$('.close-popup, .overlay').click(function() {
			$('.overlay, .contact-popap, close-popup, .details-popap').fadeOut(300);
			$('.btn-send').val('Отримати');
			$('body').css({'overflow-y': 'scroll'});
		});
		// fuction close popaps begi
	// popaps end
	
	// slider popap detail begin
	$('.btn-detail').click(function() {
		setTimeout(function () {
			$('.detail-slider').slick({
				dots: false,
				nextArrow: '<button class="arrow-right"><i class="ic ic-slick-right"></i></button>',
				prevArrow: '<button class="arrow-left"><i class="ic ic-slick-left"></i></button>',
			}) 
		}, 10);
	});

	// slider popap detail end
	
	// slider our work begin
	$('.slider-our-work').slick({
		nextArrow: '<button class="arrow-right"><i class="ic ic-work-right"></i></button>',
		prevArrow: '<button class="arrow-left"><i class="ic ic-work-left"></i></button>',
		dots: true, 
		slidesToShow: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				dots: false
			}
		}
		]

	});

	// slider our work end
	// slider customers begin
	$('.customers-slider').slick({
		dots: true, 
		arrows: false, 
		slidesToShow: 6,
		responsive: [
		{
			breakpoint: 1368,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});

	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		arrows: false,
	});
	// slider customers end
	


	// function show hide specifications begin
	$('.specifications').click(function(event) {
		event.preventDefault();
		var itemDescr = $('.descr-item').length;
		if (itemDescr > 4 ){
			$('.btn-more-descr').css({ display: 'block' });
			for(var i = 4 ; i < itemDescr; i++) {
				$('.descr-item').eq(i).css({ display: 'none' });
			}
		} else {
			$('.btn-more-descr').css({ display: 'none' });
		}
		$('.btn-more-descr').click(function(event) {
			event.preventDefault();
			$('.descr-item').css({ display: 'block' });
			$('.btn-more-descr').css({ display: 'none' });
		});
	})

	// function show hide specifications end

	// function form placeholder begin
	var $inputItem = $(".input-label");
	$inputItem.length && $inputItem.each(function() {
		var $this = $(this),
		$input = $this.find(".input-item"),
		$inputphone = $("#phone"),
		placeholderTxt = $input.attr("placeholder"),
		$placeholder;
		$input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
		$input.attr("placeholder", ""),
		$placeholder = $this.find(".placeholder"),
		$input.val().length ? $this.addClass("active") : $this.removeClass("active"),
		$input.on("focusout", function() {
			$input.val().length ? $this.addClass("active") : $this.removeClass("active");
		}).on("focus", function() {
			$this.addClass("active");
		});
	});
	// function form placeholder end


	// function detail tabs begin
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	// function detail tabs end

	// function navigation scrol begin
	$(".nav-item a").on("click", function (event) {
		event.preventDefault();
		var name = $(this).attr('href');
		var top = $("#"+name).offset().top;
		$('body,html').animate({scrollTop: top}, 1700);
	});

	// function navigation scrol end
	

	// function button top begin
	var offset = 500,
	offset_opacity = 1200,
	scroll_top_duration = 700,
	$back_to_top = $('.btn-top');
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('active') : $back_to_top.removeClass('active');
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		}, scroll_top_duration
		);
	});
	// function button top end
});

	// function google map begin
	function initMap() {
		var styledMapType = new google.maps.StyledMapType(
			[
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#e9e9e9"
				},
				{
					"lightness": 17
				}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 20
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 17
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 18
				}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 21
				}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#dedede"
				},
				{
					"lightness": 21
				}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#333333"
				},
				{
					"lightness": 40
				}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f2f2f2"
				},
				{
					"lightness": 19
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 20
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
				]
			}
			],
			{name: 'Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var uluru = {lat: 49.8047115, lng: 24.017178};
        var windowWidth  = window.innerWidth;


        if(windowWidth < 768 ) {
        	var uluru = {lat: 49.8087115, lng: 24.017178};
        }

        var map = new google.maps.Map(document.getElementById('map'), {
        	center: uluru,
        	zoom: 16,
        	scrollwheel: false,
        	navigationControl: false,
        	// mapTypeControl: false,
        	// scaleControl: false,
        	// draggable: false,

        	mapTypeControlOptions: {
        		mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        		'styled_map'],
        		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        		position: google.maps.ControlPosition.TOP_LEFT
        	},
        	zoomControl: true,
        	zoomControlOptions: {
        		position: google.maps.ControlPosition.RIGHT_TOP
        	},
        	scaleControl: true,
        	streetViewControl: true,
        	streetViewControlOptions: {
        		position: google.maps.ControlPosition.RIGHT_TOP
        	},
        	fullscreenControl: true
        });

        var marker = new google.maps.Marker({
        	map: uluru
        });
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
        var uluru = {lat: 49.8087115, lng: 24.017178};
        var marker = new google.maps.Marker({
        	position: uluru,
        	map: map,
        	title: 'Ваша тераса',
        });
    }

	// function google map end
