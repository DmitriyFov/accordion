const accordion__items = [...document.querySelectorAll('.accordion__item')];

accordion__items.forEach(item => {
    const headerItem = item.querySelector('.accordion__header');
    const text = item.querySelector('.accordion__text-wrapper');
    let height;
    calcHeight();

    headerItem.addEventListener('click', () => {
        item.classList.toggle('active');
        addOrRemoveHeight(height);
    });

    window.addEventListener('resize', calcHeight);
    
    if (!item.classList.contains('active')) {
        text.style.height = '0px';
    }

    function calcHeight() {
        text.style.height = 'auto';
        height = text.offsetHeight;
        addOrRemoveHeight(height);
    }

    function addOrRemoveHeight(height) {
        if (item.classList.contains('active')) {
            text.style.height = height + 'px';
        } else {
            text.style.height = '0px';
        }
    }


});

