//Аккордион
let accordion = (function (element) {
    let _getItem = function (elements, className) { // функция для получения элемента с указанным классом
        let element = undefined;

        elements.forEach(function (item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        });
   
        return element;
    };


    return function () {
        let _mainElement = {}; // .accordion
        let _items = {}; // .accordion-item
        let _contents = {}; // .accordion-item-content 

        let _actionClick = function (e) {
            // прекращаем выполнение функции если кликнули не по заголовку
            if (!e.target.classList.contains('accordion-item-header')) { 
                return;
            }

            e.preventDefault(); // отменям стандартное действие
            
            // получаем необходимые данные
            let header = e.target;
            let item = header.parentElement;
            let itemActive = _getItem(_items, 'show');

            // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            if (itemActive === undefined) { 
                item.classList.add('show');
            }

            else {
                // удаляем класс show у ткущего элемента
                itemActive.classList.remove('show');
                // если следующая вкладка не равна активной
                
                if (itemActive !== item) {
                    // добавляем класс show к элементу (в зависимости от выбранного заголовка)
                    item.classList.add('show');
                }
            }
        },

        _setupListeners = function () {
            // добавим к элементу аккордиона обработчик события click
            _mainElement.addEventListener('click', _actionClick);
        };

        return {
            init: function (element) {
                _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
                _items = _mainElement.querySelectorAll('.accordion-item');
                _setupListeners();
            }
        }
    }
})();

let accordion1 = accordion();
accordion1.init('#accordion');