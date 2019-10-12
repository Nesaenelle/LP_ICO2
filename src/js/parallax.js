import $ from 'jquery';
export default class Parallax {
    constructor() {
        let items = $('[data-paralax]');

        window.addEventListener('mousemove', function(e) {
            items.each(function(i, item) {
                let valX = (e.clientX) / parseFloat(item.getAttribute('data-paralax'));
                let valY = (e.clientY) / parseFloat(item.getAttribute('data-paralax'));
                item.style.transform = 'translate(' + valX / 2 + 'px, ' + valY + 'px)'
            });
        });
    }
}