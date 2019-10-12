export default class Menu {
    constructor() {
        let self = this;
        let openBtn = $('[data-menu]');
        this.dropdown = $('[data-menu-dropdown]');
        let closeBtn = $('[data-menu-dropdown-close]');

        openBtn.on('click', function(e) {
            e.stopPropagation();
            self.dropdown.addClass('active');
        });

        closeBtn.on('click', function(e) {
            // burger.classList.remove('active');
            self.dropdown.removeClass('active');
        });

        window.addEventListener('click', function(e) {
            if (!self.dropdown[0].contains(e.target)) {
                // burger.classList.remove('active');
                self.dropdown.removeClass('active');
            }
        }, false);
    }

    close() {
        this.dropdown.removeClass('active');
    }
}