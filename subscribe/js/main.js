(function ($) {
    "use strict";

    /*-------------------------------------
    Animated Headline
    -------------------------------------*/
    if ($.fn.animatedHeadline !== undefined && $(".ah-animate").length) {
        var target_slider = $(".ah-animate"),
            ah_options = target_slider.data('line-options');
        if (typeof ah_options === "object") {
            target_slider.animatedHeadline(ah_options);
        }
    }


    /*-------------------------------------
    On Load
    -------------------------------------*/
    $(window).on('load resize', function () {

        $('body').imagesLoaded().done(function (instance) {
            $('body').addClass('loaded');
        });

        $('[data-type="section-switch"], #triger-page-content').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                if (target.length > 0) {

                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });


    /*-------------------------------------
	Section background image
	-------------------------------------*/
    $("[data-bg-image]").each(function () {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });

    /*-------------------------------------
    Vegas Slider
    -------------------------------------*/
    if ($.fn.vegas !== undefined && $("#vegas-slide").length) {
        var target_slider = $("#vegas-slide"),
            vegas_options = target_slider.data('vegas-options');
        if (typeof vegas_options === "object") {
            target_slider.vegas(vegas_options);
        }
    }

    /*-------------------------------------
    Subscribe Form Activation
    -------------------------------------*/
    $('[data-pixsaas]').each(function () {
        var $this = $(this);
        $('.form-result', $this).css('display', 'none');

        $this.submit(function () {

            $("#loading").show();

            $('button[type="submit"]', $this).addClass('clicked');

            // Create a object and assign all fields name and value.
            var values = {};

            $('[name]', $this).each(function () {
                var $this = $(this),
                    $name = $this.attr('name'),
                    $value = $this.val();
                values[$name] = $value;
            });

            // Make Request
            $.ajax({
                url: $this.attr('action'),
                type: 'POST',
                data: values,
                success: function success(data) {
                     var obj = JSON.parse(data);
                     console.log(obj);
                    if (obj["status"] == "success") {
                        $('.form-result', $this).addClass('alert-success').removeClass('alert-danger').fadeIn(200).show();
                        $('.form-result > .content', $this).html("You have successfully subscribed.");
                        $this.trigger("reset");
                    } else {
                        $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
                        $('.form-result > .content', $this).html(obj["result"]);
                        $('button[type="submit"]', $this).removeClass('clicked');
                    }
                    $('button[type="submit"]', $this).removeClass('clicked');
                    $("#loading").hide();
                    //$this.trigger("reset");
                },
                error: function error() {
                    $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
                    $('.form-result > .content', $this).html('Sorry, an error occurred.');
                    $('button[type="submit"]', $this).removeClass('clicked');
                }
            });
            return false;
        });

    }); 


})(jQuery);