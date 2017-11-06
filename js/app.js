$(document).ready(function(){
	if (isMobile) {
		var humburger = $('.button-humburger'),
		mobileNav = $('.mobile-nav'),
		btnSearch = $('.button-search');
		srchField = btnSearch.find('input');

		humburger.on('click', function(){
			if(!mobileNav.hasClass('active')){
				mobileNav.addClass('active');
			}
			else{
				mobileNav.removeClass('active');
			}
		});

		btnSearch.on ('click', function () {
			if(!srchField.hasClass('active')){
				srchField.addClass('active');
			}
			else{
				srchField.removeClass('active');
			}
		});
	}

	var btnScroll = $('.scroll-to-top');

	$(document).on('scroll', function(){
		toggleVisibleScroll(btnScroll);
	});

	var widgetSlider = $('#widget-slider'),
		widgetSliderNav = $('.widget-slider-nav');
		navPrev = widgetSliderNav.find('.btn-nav.nav-prev');
		navNext = widgetSliderNav.find('.btn-nav.nav-next');

	//owl.trigger('next.owl.carousel');
	widgetSlider.owlCarousel({
		items: 1,
		onInitialized: itemsCounter
	});

	function itemsCounter() {
		var i=0;
		widgetSlider.find('.item-counter').each(function(){
			$(this).html(i + 1);
			i++;
		});
	}

	navPrev.on('click', function(){
		widgetSlider.trigger('prev.owl.carousel');
	});

	navNext.on('click', function(){
		widgetSlider.trigger('next.owl.carousel');
	});

});

function toggleVisibleScroll(element) {
	if (isVisibleMainScreen()) {
		element.addClass('visible');
	}
	else{
		element.removeClass('visible');
	}
}

function isMobile() {
	if( $(window).width() <=772 ){
		return true;
	} else {
		return false;
	}
}

function isVisibleMainScreen() {
	if ( $(document).scrollTop() >= $(window).height() ){
		return true;
	}
	else{
		return false;
	}
}