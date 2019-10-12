import $ from 'jquery';
export default class Navigation {
    constructor() {
        var links = $('[data-navigation-link]');
        var routes = [''];
        let total_length = $('.main section').length;
        $('[data-navigation-link]').on('click', function(e) {
            e.preventDefault();
            var id = this.getAttribute('data-navigation-link');
            // self.navigate(id, 0, 500);

            $(".main").moveTo(id);
        });

        $(".scroll-down").on('click', function() {
            $(".main").moveDown();
        });

        $('.main-navigation__prev').on('click', function() {
            $(".main").moveUp();
        });

        $('.main-navigation__next').on('click', function() {
            $(".main").moveDown();
        });

        $('.main-navigation__total').text(total_length);

        if ($(".main").length && $('.main > section').length > 1) {
            $(".main").onepage_scroll({
                easing: "ease",
                animationTime: 1000,
                // updateURL: false, 
                beforeMove: function(index) {

                    $('.main-navigation__current').text(index);

                    links.each(function(i, link) {
                        if ($(link).attr('data-navigation-link') == index) {
                            $(link).addClass('active');
                        } else {
                            $(link).removeClass('active');
                        }
                    });
                    if (index == 3) {
                        $('.roadmap').attr('data-animate', true);
                    }

                    if (index == 5) {
                        //     $('.footer-form').removeClass('active ready sent');
                        $('.scroll-down').fadeOut(200);
                    } else {
                        //     $('.footer-form').addClass('active');
                        $('.scroll-down').fadeIn(200);
                    }

                    if(index == total_length) {
                        $('.footer').fadeOut(300);
                    } else {
                        $('.footer').fadeIn(300);
                    }

                    if (index == 1) {
                        $('.footer').addClass('white');
                        $('.main-navigation').addClass('white');
                        $('.header-create-platform').removeClass('active');
                    } else {
                        $('.footer').removeClass('white');
                        $('.main-navigation').removeClass('white');
                        $('.header-create-platform').addClass('active');
                    }
                },
                afterMove: function(index) {
                    // if (index == 3) {
                    //     $.find('.roadmap').setAttr('data-animate', true);
                    // }
                },
                loop: false,
                keyboard: false,
                pagination: true
            });
        }

        // }
    }
    // });
}