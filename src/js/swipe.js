export default class Swipe {
    constructor() {

        let array = $('[data-swipe]');

        array.each(function(i, content) {
            let index = 0;
            let indicator = $(content).find('.swipe-indicator');
            let indicatorItems = indicator.find('span');

            $(content).swipe({
                swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
                    if (phase == "end") {
                        let items = $(content).find('[data-swipe-item]');
                        if (direction == 'left') {
                            index++;
                            if (index > items.length - 1) index = items.length - 1;

                            indicatorItems.each(function(i, r) {
                                i == index ? $(r).addClass('active') : $(r).removeClass('active')
                            });
                            items.each(function(i, item) {
                                $(item).attr('data-swipe-item') == index ? $(item).addClass('active') : $(item).removeClass('active');
                            })
                        }

                        if (direction == 'right') {
                            index--;
                            if (index <= 0) index = 0;

                            indicatorItems.each(function(i, r) {
                                i == index ? $(r).addClass('active') : $(r).removeClass('active')
                            });
                            items.each(function(i, item) {
                                $(item).attr('data-swipe-item') == index ? $(item).addClass('active') : $(item).removeClass('active');
                            })
                        }
                    }
                }
            });
        });


    }
}