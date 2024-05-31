$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");

        setTimeout(showHearts, 2000);
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }

    function showHearts() {
        // Crear y animar corazones dinámicamente
        for (var i = 0; i < 50; i++) {
            var heart = $('<div class="heart"></div>');
            heart.css({
                left: Math.random() * $(window).width(),
                animationDelay: Math.random() * 4 + 's'
            });
            $('.envelope-wrapper').append(heart);
        }
    }

});
