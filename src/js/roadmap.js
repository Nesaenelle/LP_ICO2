import $ from 'jquery';
export default class Roadmap {
    constructor() {
        var self = this;
        this.roadmap = $('[data-roadmap]');
        this.timelines = $('[data-roadmap-timeline]');
        this.years = $('[data-roadmap-year]');


        this.timelines.each(function (i, elem) {
            i === 0 ? $(elem).show() : $(elem).hide();
        });

        this.years.each(function (i, elem) {
            $(elem).on('click', function () {
                var id = $(elem).attr('data-roadmap-year');
                self.years.each(function (i, el) {
                    el === elem ? $(el).addClass('active') : $(el).removeClass('active')
                });
                self.timelines.each(function (i, el) {
                    $(el).attr('data-roadmap-timeline') === id ? $(el).show() : $(el).hide()
                });
                $('.roadmap__timeline').scrollLeft(0);
                self.updateIndicator(0);
            });
        });

        var months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        var date = new Date();
        var monthIndex = date.getMonth();
        var monthName = 'november'//months[monthIndex - 1].toLowerCase();
        var year = date.getFullYear();

        var weAreHere = $('<div class="we-are-here">We are here</div>');
        var a = $('[ data-roadmap-month="' + monthName + '-' + year + '"]');
        a.prepend(weAreHere);

        if($('.roadmap').length){

            $('.roadmap').swipe({
                swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
                    if (phase == "end") {
                        var roadmap__timeline = $('.roadmap__timeline:visible');
                        var width = $('.roadmap__timeline_item:visible').width();
                        var scrollLeft = roadmap__timeline[0].scrollLeft;

                        if (direction == 'left') {
                            roadmap__timeline.animate({scrollLeft: scrollLeft + width}, 500);
                        }
                        if (direction == 'right') {
                            roadmap__timeline.animate({scrollLeft: scrollLeft - width}, 500);
                        }
                    }
                }});
        }

        $('.roadmap__timeline').on('scroll', function() {
            if($(this).is(':visible')) {
                var procent = (this.scrollLeft/(this.scrollWidth - window.innerWidth) ) * 100;
                self.updateIndicator(procent);
            }
        });

        $('.team-section .scroller').on('scroll', function() {
            var procent = (this.scrollLeft/(this.scrollWidth - window.innerWidth) ) * 100;
            self.updateTeamIndicator(procent);
        });

    }

    updateIndicator(procent) {
        $('.roadmap-indicator__inner').width(procent+'%');
    }

    updateTeamIndicator(procent) {
        $('.team-indicator__inner').width(procent+'%');
    }
}
