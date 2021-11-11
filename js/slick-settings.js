$('.team-carousel').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	mobileFirst: true,
    autoplaySpeed: 1550,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
})
