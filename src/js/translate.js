export default class Translate {
	constructor() {
		let self = this;
		this.LANG = 'eng';
		this.translate();

		$('[data-language]').each(function(i, item) {
		    var items = $(item).find('[data-language-item]');
		    var value =  $(item).find('[data-language-value]');

		    value.on('click', function() {
		        value.next().toggleClass('active')
		    });

		    items.on('click', function() {
		        // var prevVal = value.text();
		        var nextVal = $(this).text();
		        // value.text(nextVal);
		        // $(this).text(prevVal);
		        self.LANG = $(this).data('language-item');
		        // value.next().removeClass('active');
		        // items.removeClass('active');
		        $('[data-language-value]').text(nextVal);
		        $('[data-language-item]').removeClass('active');
		        $(`[data-language-item='${self.LANG}']`).addClass('active');
		        self.translate();
		        $('[data-language-list]').removeClass('active');
		    });
		});

		window.addEventListener('click', function(e) {
		    if(!$(e.target).closest('[data-language]').length) {
		        $('[data-language-list]').removeClass('active');
		    }
		}, false);
	}

	translate() {
		let self = this;
		$('[data-translate]').each(function() {
		    let translate = $(this).data('translate');
		    let text = translateConfig[self.LANG][translate] || 'no-translation';
		    $(this).html(text);
		});
	}
}