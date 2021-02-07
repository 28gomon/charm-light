const countIngredients = () => {

    // подсчет кол-ва нужных ингридиентов post-detail.html
    const iconDecrement = document.querySelector('.count-btn .icon-decrement');
    const iconIncrement = document.querySelector('.count-btn .icon-increment');
    const portionQuantity = document.querySelector('.count-btn span');
    const textMutable = document.querySelector(
        '.recipe-product__count-portions .title-mutable'
    );
    const productTableNumber = document.querySelectorAll('.recipe-product__table span i');

    let productArray = Array();

    if (productTableNumber) {
        productTableNumber.forEach(element => {
            if (parseFloat(element.textContent)) {
                let res = parseFloat(element.textContent) / +portionQuantity.textContent;
                productArray.push(+res.toFixed(2));
            }
        });
    }

    let setTextMutable = () => {
        if (portionQuantity.textContent === '1') {
            textMutable.textContent = 'порция';
        }
        if (portionQuantity.textContent === '2') {
            textMutable.textContent = 'порции';
        }
        if (portionQuantity.textContent === '3') {
            textMutable.textContent = 'порции';
        }
        if (portionQuantity.textContent === '4') {
            textMutable.textContent = 'порции';
        }
        if (portionQuantity.textContent === '5') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '6') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '7') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '8') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '9') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '10') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '11') {
            textMutable.textContent = 'порций';
        }
        if (portionQuantity.textContent === '12') {
            textMutable.textContent = 'порций';
        }
    };

    if (iconDecrement) {
        iconDecrement.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            target = target.closest('.icon-decrement');

            let currentNumber = +portionQuantity.textContent;
            if (currentNumber === 1) {
                iconDecrement.classList.add('disabled');
                return;
            }

            productTableNumber.forEach((element, index) => {
                let number = parseFloat(element.textContent);
                if (Number.isInteger(number)) {
                    productTableNumber[index].textContent = String(parseInt(element.textContent) - productArray[index]);
                } else {
                    let res = parseFloat(element.textContent) - productArray[index];
                    productTableNumber[index].textContent = res.toFixed(1);
                }
            });

            if (target) {
                portionQuantity.textContent = String(currentNumber - 1);
                iconIncrement.classList.remove('disabled');
                setTextMutable();
            }
        });
        iconDecrement.removeEventListener('clicl', () => {
        });
    }

    if (iconIncrement) {
        iconIncrement.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            target = target.closest('.icon-increment');

            let currentNumber = +portionQuantity.textContent;
            if (currentNumber === 12) {
                iconIncrement.classList.add('disabled');
                return;
            }

            productTableNumber.forEach((element, index) => {
                let number = parseFloat(element.textContent);
                if (Number.isInteger(number)) {
                    productTableNumber[index].textContent = String(parseInt(element.textContent) + productArray[index]);
                } else {
                    let res = parseFloat(element.textContent) + productArray[index];
                    productTableNumber[index].textContent = res.toFixed(1);
                }
            });

            if (target) {
                portionQuantity.textContent = String(currentNumber + 1);
                setTextMutable();
            }

            if (portionQuantity && portionQuantity.textContent !== '1') {
                iconDecrement.classList.remove('disabled');
            }
        });
        iconIncrement.removeEventListener('click', () => {
        });
    }
    // подсчет кол-ва нужных ингридиентов post-detail.html

};

export default countIngredients;