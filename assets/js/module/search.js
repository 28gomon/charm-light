const search = () => {

    // открытие | закрытие поиска по сайту
    const headerSearch = document.querySelector('.header-search');
    const closeBtn = document.querySelector('.close-search');
    const openBtn = document.querySelector('.search .btn');

    if (openBtn) {
        openBtn.addEventListener('click', (event) => {

            event.preventDefault();

            if (event.target) {
                headerSearch.style.display = 'flex';
                headerSearch.style.width = '100%';
                document.querySelector('.search-input').focus();
            }
        });
        openBtn.removeEventListener('click', () => {
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (event) => {

            event.preventDefault();

            if (event.target) {
                headerSearch.style.display = 'none';
                headerSearch.style.width = '0';
            }
        });
        closeBtn.removeEventListener('click', () => {
        });
    }
    // открытие | закрытие поиска по сайту

};

export default search;