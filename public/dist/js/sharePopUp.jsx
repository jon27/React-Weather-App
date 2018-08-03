    // Init Social Share Kit
    SocialShareKit.init({
        url: 'https://reactweatherapplication.herokuapp.com/',
        twitter: {
            title: 'Weather App',
            via: 'Weather App'
        },
        onBeforeOpen: function(targetElement, network, paramsObj){
            console.log(arguments);
        },
        onOpen: function(targetElement, network, url, popupWindow){
            console.log(arguments);
        },
        onClose: function(targetElement, network, url, popupWindow){
            console.log(arguments);
        }
    });

    $(function () {

        // Just to disable href for other example icons
        $('.ssk').on('click', function (e) {
            e.preventDefault();
        });

        // Navigation collapse on click
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click', function () {
            $('.navbar-toggle:visible').click();
        });

        // Email protection
        $('.author-email').each(function () {
            var a = '@', em = 'support' + a + 'social' + 'sharekit' + '.com', t = $(this);
            t.attr('href', 'mai' + 'lt' + 'o' + ':' + em);
            !t.text() && t.text(em);
        });

        // Sticky icons changer
        $('.sticky-changer').click(function (e) {
            e.preventDefault();
            var $link = $(this);
            $('.ssk-sticky').removeClass($link.parent().children().map(function () {
                return $(this).data('cls');
            }).get().join(' ')).addClass($link.data('cls'));
            $link.parent().find('.active').removeClass('active');
            $link.addClass('active').blur();
        });
    });

    // This code is required if you want to use Twitter callbacks
    window.twttr = (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function (f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));

    // Demo callback
    function twitterDemoCallback(e) {
        $('#twitterEvents').append(e.type + ' ');
    }

    // Bind to Twitter events
    twttr.ready(function (tw) {
        tw.events.bind('click', twitterDemoCallback);
        tw.events.bind('tweet', twitterDemoCallback);
    });