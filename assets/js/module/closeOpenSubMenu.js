const closeOpenSubMenu = () => {

    // открытие | закрытие подменю по клику
    const nav = document.querySelector('.nav');
    const btnMenu = document.querySelector('.btn-menu');
    const backdrop = document.querySelector('.backdrop');
    const btnClose = document.querySelector('.btn-close');

    if (btnMenu) {
        btnMenu.addEventListener('click', (event) => {

            event.preventDefault();

            if (event.target.closest) {
                nav.classList.add('nav-active');
                backdrop.style.left = '0';
                backdrop.style.opacity = '1';
                document.body.classList.add('body-hidden');
            }
        });
        btnMenu.removeEventListener('click', () => {
        });
    }

    let closeAndBackdrop = (selector) => {
        if (selector) {
            selector.addEventListener('click', (event) => {

                event.preventDefault();

                if (event.target.closest) {
                    nav.classList.remove('nav-active');
                    backdrop.style.left = '-100%';
                    backdrop.style.opacity = '0';
                    document.body.classList.remove('body-hidden');
                }
            });
            selector.removeEventListener('click', () => {
            });
        }
    }
    closeAndBackdrop(btnClose);
    closeAndBackdrop(backdrop);

    const link = document.querySelectorAll('.nav__content .link');
    const dropdownSub = document.querySelectorAll('.nav__content .dropdown-sub');

    if (localStorage.length === 0) {
        localStorage.setItem('menu-state', false);
    }

    if (link) {
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', (event) => {
                // event.preventDefault();
            });
        }
    }

    if (link && dropdownSub) {
        for (let i = 0; i < dropdownSub.length; i++) {

            if (localStorage.getItem('menu-state') === false) {
                break;
            }

            dropdownSub[i].addEventListener('click', (event) => {

                let target = event.target;
                target = target.closest('.dropdown-sub');

                if (target) {

                    event.preventDefault();

                    for (let j = 0; j < link.length; j++) {
                        link[j].classList.remove('active');
                    }
                    link[i].classList.add('active');

                    localStorage.setItem('menu-state', i);
                }
            });

            if (localStorage.getItem('menu-state') !== false) {
                link[+localStorage['menu-state']].classList.toggle('active');
            }

            // link[+localStorage['menu-state']].classList.toggle('active');

            dropdownSub[i].removeEventListener('click', () => {
            });
        }
    }
    // открытие | закрытие подменю по клику

};

export default closeOpenSubMenu;