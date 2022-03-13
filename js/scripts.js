$(() => {
	// Услуги
	if ($('.services .swiper-container').length) {
		let slides = $('.services .swiper-container .slide').length

		if (slides > 1) {
			new Swiper('.services .swiper-container', {
				loop: false,
				speed: 750,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				spaceBetween: 30,
				slidesPerView: 1,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				on: {
					init: swiper => {
						setTimeout(() => {
							swiper.slides.length < 10
								? $('.services .count .total').text('0' + swiper.slides.length)
								: $('.services .count .total').text(swiper.slides.length)
						})
					},
					activeIndexChange: swiper => {
						setTimeout(() => {
							(swiper.activeIndex + 1) < 10
								? $('.services .count .current').text('0' + (swiper.activeIndex + 1))
								: $('.services .count .current').text((swiper.activeIndex + 1))
						})
					}
				}
			})
		}
	}


	// Наши работы
	if ($('.portfolio .swiper-container').length) {
		let slides = $('.portfolio .swiper-container .slide').length

		if (slides < 3) {
			$('.portfolio .swiper-button-prev, .portfolio .swiper-button-next').hide()
		}

		new Swiper('.portfolio .swiper-container', {
			loop: slides > 2 ? true : false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 2
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						let thumbH = $('.portfolio .item .thumb').outerHeight()

						$('.portfolio .swiper-button-prev').css('top', thumbH / 2)
						$('.portfolio .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: () => {
					setTimeout(() => {
						let thumbH = $('.portfolio .item .thumb').outerHeight()

						$('.portfolio .swiper-button-prev').css('top', thumbH / 2)
						$('.portfolio .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Логотипы брендов
	if ($('.brands .swiper-container').length) {
		new Swiper('.brands .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 0,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 5
				},
				1280: {
					slidesPerView: 7
				}
			}
		})
	}


	// Материалы
	if ($('.materials .swiper-container').length) {
		let slides = $('.materials .swiper-container .slide').length

		if (slides > 1) {
			new Swiper('.materials .swiper-container', {
				loop: false,
				speed: 500,
				spaceBetween: 20,
				slidesPerView: 1,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.materials_swiper-button-next',
					prevEl: '.materials_swiper-button-prev'
				}
			})
		}
	}


	// Новости
	if ($('.articles .swiper-container').length) {
		new Swiper('.articles .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						let thumbH = $('.articles .article .thumb').outerHeight()

						$('.articles .swiper-button-prev').css('top', thumbH / 2)
						$('.articles .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: () => {
					setTimeout(() => {
						let thumbH = $('.articles .article .thumb').outerHeight()

						$('.articles .swiper-button-prev').css('top', thumbH / 2)
						$('.articles .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Наши услуги
	if ($('.services_list .swiper-container').length) {
		let slides = $('.services_list .swiper-container .slide').length

		if (slides < 4) {
			$('.services_list .swiper-button-prev, .services_list .swiper-button-next').hide()
		}

		new Swiper('.services_list .swiper-container', {
			loop: slides > 3 ? true : false,
			centeredSlides: slides > 1 ? false : true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						let thumbH = $('.services_list .service .thumb').outerHeight()

						$('.services_list .swiper-button-prev').css('top', thumbH / 2)
						$('.services_list .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: () => {
					setTimeout(() => {
						let thumbH = $('.services_list .service .thumb').outerHeight()

						$('.services_list .swiper-button-prev').css('top', thumbH / 2)
						$('.services_list .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Спойлер в тексте
	$('body').on('click', '.text_block .spoler_btn', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.text_block')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$parent.find('.hide').slideUp(500)
		} else {
			$(this).addClass('active')

			$parent.find('.hide').slideDown(500)
		}
	})


	// Калькулятор
	let typeCheck = window.location.hash

	if (typeCheck) {
		$(typeCheck).prop('checked', true)
		// $(typeCheck).closest('.step').next().addClass('active')
	}


	$('.calc .step label').click(function () {
		// let _self = $(this)

		setTimeout(() => {
			// _self.closest('.step').next().addClass('active')

			calcPrice()
		})
	})


	$('body').on('click', '.invite_modal_link', function (e) {
		e.preventDefault()

		let type = '<div class="type">' + $('.calc .types input:checked').next().html() + '</div>',
			size = '<div class="size">' + $('.calc .sizes input:checked').next().html() + '</div>',
			material = '<div class="material">' + $('.calc .materials input:checked').next().html() + '</div>',
			detail = '<div class="detail">' + $('.calc .details input:checked').next().html() + '</div>',
			tariff = '<div class="tariff">' + $('.calc .tariffs input:checked').next().html() + '</div>'

		$('#calc_invite_modal .calc_info').append(type).append(size).append(material).append(detail).append(tariff)

		$.fancybox.close(true)

		$.fancybox.open({
			src: $(this).data('content'),
			type: 'inline',
			touch: false
		})
	})


	// Аккордион
	$('body').on('click', '.accordion .item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})
})


// Калькулятор
function calcPrice() {
	// Базовая стоимость тарифов
	let tariff1Price = parseInt($('.calc .tariffs .tariff1 .price').data('price')),
		tariff2Price = parseInt($('.calc .tariffs .tariff2 .price').data('price')),
		tariff3Price = parseInt($('.calc .tariffs .tariff3 .price').data('price')),

		// Cтоимость типа мебели
		typePrice = parseInt($('.calc .types input:checked').data('price') || 0),

		// Cтоимость размера мебели
		sizePrice = parseInt($('.calc .sizes input:checked').data('price') || 0),

		// Cтоимость материала
		materialPrice = parseInt($('.calc .materials input:checked').data('price') || 0),

		// Cтоимость детали
		detailPrice = parseInt($('.calc .details input:checked').data('price') || 0)

	// Итоговая стоимость тарифов
	$('.calc .tariffs .tariff1 .price span').text((tariff1Price + typePrice + sizePrice + materialPrice + detailPrice).toLocaleString())

	$('.calc .tariffs .tariff2 .price span').text((tariff2Price + typePrice + sizePrice + materialPrice + detailPrice).toLocaleString())

	$('.calc .tariffs .tariff3 .price span').text((tariff3Price + typePrice + sizePrice + materialPrice + detailPrice).toLocaleString())
}