'use strict';

const slider = () => {

    const slider = document.querySelector('.top-home-slider-content'),
        slide = document.querySelectorAll('.top-home-slider-item'),
        top_home_sliderDots = document.querySelector('.top-home-slider-dots');

    slide[0].classList.add('top-home-slider-item-active');

    let currentSlide = 0,
        interval;

    // если есть слайды, создаем li
    if (slide) {

        for (let i = 0; i < slide.length; i++) {
			let e;
            if (slide.length > 0) {
				e = document.createElement('li');
			}
            e.classList.add('dot');
            top_home_sliderDots.append(e);
        }
    }

    // созданные li
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    const prevSlide = (elem, index, strClas) => {
        elem[index].classList.remove(strClas);
    };

    const nextSlide = (elem, index, strClas) => {
        elem[index].classList.add(strClas);
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'top-home-slider-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(slide, currentSlide, 'top-home-slider-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 4500000) => {

        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {

        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {

        event.preventDefault();

        let target = event.target;

        if (!target.matches('.top-home-slider-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'top-home-slider-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((element, index) => {
                if (element === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'top-home-slider-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {

        if (event.target.matches('.top-home-slider-btn') || event.target.matches('.dot')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {

        if (event.target.matches('.top-home-slider-btn') || event.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(4500000);
};

export default slider;