import $ from 'jquery'
import {Form, NES_API} from './core.js';
import './jquery.onepage-scroll.js';
import 'slick-carousel';
import './jquery.touchSwipe.min.js';
import Roadmap from './roadmap';
import Navigatioin from './navigation';
import Parallax from './parallax';
import Menu from './menu';
import Swipe from './swipe';
import Translate from './translate';


const navigation = new Navigatioin();
const roadmap = new Roadmap();
const parallax = new Parallax();
const menu = new Menu();
const swipe = new Swipe();
const translate = new Translate();

// NES_API.add('animation', {
//     constructor: function () {

//         var elements = $.findAll('[data-animate]');

//         window.addEventListener('scroll', function () {
//             elements.forEach(function (elem) {
//                 if (isInViewport(elem.el, 0)) {
//                     if (!elem.getAttr('data-animate')) {
//                         elem.setAttr('data-animate', true);
//                     }
//                 }
//             });
//         }, false);
//     }
// });

if ($('#contact-form').length) {
    var contactForm = new Form($.find('#contact-form').el);
    contactForm.onSubmit(function (data) {
        var url = document.URL + "mail_library/config.php";
        var param = {
            name: data.login,
            mail: data.email,
            massage_text: data.comment
        }
        //console.log(param);
        $.post(url, param, function (data) {
            //some event after submit
            //answer - data
        });
    });
}

if ($('#create-platform-form').length) {
    var createForm = new Form($.find('#create-platform-form').el);

    createForm.onSubmit(function (data) {
        // ajax here
        var url = document.URL + "mail_library/MC_library.php";
        var param = {
            user_mail: data.email,
        }
        $.post(url, param, function (data) {
            //some event after submit
            //answer - data
        });
    });
}

if ($('#footer-create-platform-form').length) {
    var footerCreateForm = new Form($('#footer-create-platform-form')[0]);

    footerCreateForm.onSubmit(function (data) {
        // ajax here

        $('.footer-form').addClass('sent');

        var url = document.URL + "mail_library/MC_library.php";
        var param = {
            user_mail: data.email,
        }
        $.post(url, param, function (data) {
            //some event after submit
            //answer - data
        });
    });
}


// if ($.exists('#login-form')) {
//     var loginForm = new Form($.find('#login-form').el);

//     loginForm.onSubmit(function (data) {
//         // ajax here
//         alert('Success');
//         return;
//         jQuery.ajax({
//             method: 'POST',
//             url: '',
//             data: {},
//             success: function () {

//             },
//             error: function () {

//             }
//         })
//     });
// }

// if ($.exists('#signup-form')) {
//     var signupForm = new Form($.find('#signup-form').el);
//     signupForm.onSubmit(function (data) {
//         // ajax here
//         alert('Success');
//         return;
//         jQuery.ajax({
//             method: 'POST',
//             url: '',
//             data: {},
//             success: function () {

//             },
//             error: function () {

//             }
//         })
//     });
// }

$('.create-trading-btn').on('click', function () {
    $('.footer-form').toggleClass('ready');
});
$('.submit-create-trading-form').on('click', function () {
    $('#footer-create-platform-form').submit();
});

if ($('.footer-form').length) {
    window.addEventListener('click', function (e) {
        if (!$('.footer-form')[0].contains(e.target)) {
            // burger.classList.remove('active');
            $('.footer-form').removeClass('ready sent');
        }
    }, false);
}


$('.slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    nextArrow: '<div class="arrow-right"></div>',
    prevArrow: '<div class="arrow-left"></div>',
    responsive: [{
        breakpoint: 980,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
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
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
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