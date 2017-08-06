function mapInit(){
	var map;
	ymaps.ready(function(){
		map = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 10,
			setType: 'yandex#map',
			controls: ["zoomControl", "fullscreenControl"]
		});  

		map.behaviors.disable('scrollZoom');
	});
};

function slickInit(){
	$('.benefits__quotes__slider').slick({
		prevArrow: 'none',
		nextArrow: 'none',
		dots: true
	});//slick end
};

function subsliderInit(){
	var subslider_toggle = $(".subslider_toggle");
	var subslider = $('#subslider');
	
	subslider_toggle.on('click', function(){
		subslider.slideToggle();   
	});//onclick end
};

function portfolioSortInit(){
	/***Portfolio__sort***/
	var items = $('.portfolio__sort__item');
	items.hover(function(){
		if ( !($(this).hasClass('item_state_active')) ) {
			$(this).toggleClass('item_state_hover'); 
		} 
	}); 
	items.click(function(){
		items.removeClass('item_state_active').removeClass('item_state_hover');
		$(this).addClass('item_state_active');  
	});
	/***Portfolio__sort***/
};

function mobileMenuInit(){
	var nav_toggle = $('.header__toggle');
	var header_nav = $('.header__nav');
	nav_toggle.click(function(){
		header_nav.toggleClass('header_mask');  
	});
};

function experienceBarsInit(){
	/***Experience Bars***/
	var exp_bar = $('.skill__bar');

	//skill__amount
	exp_bar.each(function(){
		var exp_bar_fill = $(this).children();
		var fill_length = 0;
		fill_length = $(this).siblings('.skill__amount').text();  

			exp_bar_fill.css({
				width: fill_length 
			});
	});
};