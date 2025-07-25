$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// **..mobile-dropdown-accordion js start..**
	$(".sidebar-dropdown-sub-menu").slideUp();
	$('.sidebar-dropdown-btn').on('click', function () {
		$(this).next(".sidebar-dropdown-sub-menu").slideToggle();
		$(this).toggleClass('active');
	});

	$('.sidebar-submenu-open').on('click', function () {
		$(this).next(".megamenu-wrapper").addClass('active');
	});

	$('.sidebar-close-btn').on('click', function () {
		$(this).parent().parent().parent(".megamenu-wrapper").removeClass('active');
	});
	// **..mobile-dropdown-accordion js end..**

	$(".search-bar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-bar-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(this).toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---

	// cart-sidebar js start---
	$(".cart-sidebar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".cart-sidebar-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").removeClass("active");
		$("body").toggleClass("active");
	});

	$(".side-cart-close-btn").click(function (event) {
		event.stopPropagation();
		$(".cart-sidebar").toggleClass("active");
		$("body").toggleClass("active");
	});
	// cart-sidebar js end---

	// filter sidebar js start--
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").addClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});
	// filter sidebar js end--

	// **..filter-accordion js start..**
	$('.accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..filter-accordion js end..**

	// product varient js start--
	$(".label-accordion-btn").click(function (event) {
		event.stopPropagation();
		$(this).next().slideDown();
		$(this).parent().parent().siblings().find(".label-content-bottom").slideUp();
	});
	// product varient js end--

	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// **..faq-accordion js start..**
	$('.faq-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..faq-accordion js end..**
})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// topbar slider js start--
var swiper = new Swiper(".top-bar-slider", {
	slidesPerView: 1,
	loop: true,
	speed: 5000,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	}
});
// topbar slider js end--

// hero slider js start--
var swiper = new Swiper(".hero-slider", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	speed: 1000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// hero slider js end--

// categoryg-slider js start--
var swiper = new Swiper(".category-slider", {
	slidesPerView: 4,
	spaceBetween: 70,
	grabCursor: true,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 20,
			slidesPerView: 2.5,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 20,
			slidesPerView: 3.5,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 30,
			slidesPerView: 4,
		},
		// when window width is >= 993px
		993: {
			spaceBetween: 70,
			slidesPerView: 4,
		}
	}
});
// category-sliderr js end--

// categoryg-slider2 js start--
var swiper = new Swiper(".category-slider2", {
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 20,
			slidesPerView: 2.5,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 20,
			slidesPerView: 3.5,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		// when window width is >= 993px
		993: {
			spaceBetween: 20,
			slidesPerView: 4,
		}
	}
});
// category-slider2 js end--

// img-with-card-slider js start--
var swiper = new Swiper(".img-with-card-slider", {
	slidesPerView: 2.3,
	spaceBetween: 20,
	grabCursor: true,
	rtl: true,
	loop: true,
	navigation: {
		nextEl: '.img-with-card-slider-button-next',
		prevEl: '.img-with-card-slider-button-prev',
	},
	breakpoints: {
		// when window width is >= 1px
		1: {
			spaceBetween: 10,
			slidesPerView: 1.7,
		},
		// when window width is >= 430px
		576: {
			spaceBetween: 20,
			slidesPerView: 2.3,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 10,
			slidesPerView: 2.2,
		},
		// when window width is >= 767px
		993: {
			slidesPerView: 2.3,
			spaceBetween: 20,
		}
	}
});
// img-with-card-slider js end--

// card-img-slider js start--
var swiper = new Swiper(".card-img-slide", {
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 1px
		1: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		// when window width is >= 430px
		576: {
			spaceBetween: 20,
			slidesPerView: 2.5,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 3.4,
		},
		// when window width is >= 767px
		993: {
			spaceBetween: 20,
			slidesPerView: 4,
		}
	}
});
// card-img-slider js end--

// video-slider js start--
var swiper = new Swiper(".video-slider", {
	slidesPerView: 5,
	spaceBetween: 10,
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1: {
			spaceBetween: 5,
			slidesPerView: 2,
		},
		576: {
			spaceBetween: 10,
			slidesPerView: 2.5,
		},
		768: {
			spaceBetween: 10,
			slidesPerView: 3.4,
		},
		993: {
			spaceBetween: 10,
			slidesPerView: 5,
		}
	},

});
// video-slider js end--

// testimonial slider js start--
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: 1,
	spaceBetween: 0,
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// testimonial slider js end--

// product-slider js start---
var swiper = new Swiper(".product-slider-thumb", {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	mousewheel: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 4,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 20,
			slidesPerView: 5,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 20,
			slidesPerView: 5,
		}
	}
});
var swiper2 = new Swiper(".product-slider", {
	loop: true,
	autoHeight: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});
// product-slider js end---

// side-cart-slider js start--
var swiper = new Swiper(".side-cart-slider", {
	slidesPerView: 2.2,
	spaceBetween: 10,
	grabCursor: true,
	loop: false,
	speed: 1000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
});
// side-cart-slider js end--

// progesss-bar js start--
const progress = document.querySelector('.progress');
progress.addEventListener('input', function () {
	const value = this.value;
	this.style.background = `linear-gradient(to right,rgb(133 168 104) 0%,rgb(133 168 104) ${value}%,rgb(216, 216, 216) ${value}%)`
})
// progesss-bar js end--

// video player js start....
new VenoBox({
	selector: '.video-play-btn',
});
// video player js end....