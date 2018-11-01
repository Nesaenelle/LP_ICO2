
(function(jQuery, NES_API) {


    var $ = NES_API.SELECTOR;

    NES_API.add('currency', {
        constructor: function() {
            var self = this;
            this.currency = $.find('[data-currency]');
            if (this.currency.el) {
                this.list = this.currency.findAll('li');
                this.list.forEach(function(item) {
                    item.addEvent('click', function() {
                        self.setActive(item);
                    });
                });
            }
        },
        setActive: function(curItem) {
            this.list.forEach(function(item) {
                if (item.el === curItem.el) {
                    item.addClass('active')
                } else {
                    item.removeClass('active');
                }
            });
        },
        update: function() {

        }
    });

    NES_API.add('navigation', {
        constructor: function() {
            var links = $.findAll('[data-navigation-link');
            var routes = [''];
            jQuery('[data-navigation-link]').on('click', function(e) {
                e.preventDefault();
                var id = this.getAttribute('data-navigation-link');
                // self.navigate(id, 0, 500);
                
                jQuery(".main").moveTo(id);
            });

            jQuery(".scroll-down").on('click', function() {
                jQuery(".main").moveDown();
            });

            if(jQuery(".main").length){
                jQuery(".main").onepage_scroll({
                    easing: "ease",  
                    animationTime: 800,
                    beforeMove: function(index) {
                        links.forEach(function(link) {
                            if (link.getAttr('data-navigation-link') == index) {
                                link.addClass('active');
                            } else {
                                link.removeClass('active');
                            }
                        });
                        if(index == 4) {
                            $.find('.roadmap').setAttr('data-animate', true);
                        }
                    },
                    afterMove: function(index) {
                        if(index == 4) {
                            $.find('.roadmap').setAttr('data-animate', true);
                        }
                    }, 
                     loop: false,
                     keyboard: false,
                     pagination: true
                });
            }

        }
    });

    NES_API.add('roadmap', {
        constructor: function() {
            var self = this;
            this.roadmap = $.findAll('[data-roadmap]');
            this.timelines = $.findAll('[data-roadmap-timeline]');
            this.years = $.findAll('[data-roadmap-year]');


            this.timelines.forEach(function(elem, i) {
                i === 0 ? elem.show() : elem.hide();
            });

            this.years.forEach(function(elem, i) {
                elem.addEvent('click', function() {
                    var id = elem.getAttr('data-roadmap-year');
                    self.years.forEach(function(el) { el.el === elem.el ? el.addClass('active') : el.removeClass('active')});
                    self.timelines.forEach(function(el) { el.getAttr('data-roadmap-timeline') === id ? el.show() : el.hide()});
                });
            }); 

            var months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
            var date = new Date();
            var monthIndex = date.getMonth();
            var monthName = months[monthIndex - 1].toLowerCase();
            var year = date.getFullYear();
            
            var weAreHere = jQuery('<div class="we-are-here">We are here</div>');
            var a = jQuery('[ data-roadmap-month="'+ monthName +'-'+ year +'"]');
            a.append(weAreHere);
            
        }
    });

    NES_API.add('animation', {
        constructor: function() {
 
            var elements = $.findAll('[data-animate]');

            window.addEventListener('scroll', function(){
                elements.forEach(function(elem) {
                    if (isInViewport(elem.el, 90)) {
                        if (!elem.getAttr('data-animate')) {
                            elem.setAttr('data-animate', true);
                        }
                    }
                });
            }, false);
        }
    });


    NES_API.add('mobile-menu', {
        constructor: function() {
            var openBtn = $.find('[data-menu]');
            var dropdown = $.find('[data-menu-dropdown]');
            var closeBtn = $.find('[data-menu-dropdown-close]');

            openBtn.addEvent('click', function(e) {
                e.stopPropagation();
                // if (burger.classList.contains('active')) {
                //     burger.classList.remove('active');
                // } else {
                //     burger.classList.add('active');
                // }
                    dropdown.addClass('active');
            });

            closeBtn.addEvent('click', function(e) {
                // burger.classList.remove('active');
                dropdown.removeClass('active');
            });

            window.addEventListener('click', function(e) {
                if (!dropdown.el.contains(e.target)) {
                    // burger.classList.remove('active');
                    dropdown.removeClass('active');
                }
            }, false);
        }
    });

    if ($.exists('#contact-form')) {
        var contactForm = new NES_API.FORM($.find('#contact-form').el);

        contactForm.onSubmit(function(data) {
            // ajax here
            alert('Success'); return;
            jQuery.ajax({
                method: 'POST',
                url: '',
                data: {},
                success: function() {

                },
                error: function() {

                }
            })
        });
    }

    if ($.exists('#create-platform-form')) {
        var contactForm = new NES_API.FORM($.find('#create-platform-form').el);

        contactForm.onSubmit(function(data) {
            // ajax here
            alert('Success'); return;
            jQuery.ajax({
                method: 'POST',
                url: '',
                data: {},
                success: function() {

                },
                error: function() {

                }
            })
        });
    }


    if ($.exists('#login-form')) {
        var loginForm = new NES_API.FORM($.find('#login-form').el);

        loginForm.onSubmit(function(data) {
            // ajax here
            alert('Success'); return;
            jQuery.ajax({
                method: 'POST',
                url: '',
                data: {},
                success: function() {

                },
                error: function() {

                }
            })
        });
    }

    if ($.exists('#signup-form')) {
        var signupForm = new NES_API.FORM($.find('#signup-form').el);
        signupForm.onSubmit(function(data) {
            // ajax here
            alert('Success'); return;
            jQuery.ajax({
                method: 'POST',
                url: '',
                data: {},
                success: function() {

                },
                error: function() {

                }
            })
        });
    }

    NES_API.init();

}($, NES_API));

$('.slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: '<div class="arrow-right"></div>',
    prevArrow: '<div class="arrow-left"></div>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
});


function isScrolledIntoView(elem, offsetVal) {
    var docViewTop = window.pageYOffset;
    var docViewBottom = docViewTop + window.innerHeight;
    var elemTop = offset(elem).top;
    var elemBottom = elemTop + elem.clientHeight;
    return docViewTop >= elemTop - (offsetVal || 200) /*- window.innerHeight*/ ; // /((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function isInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
};