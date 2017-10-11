$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	// Animate down menu
	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	// Animate Top in footer
	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	// Animate Arrow Down
	$(".arrow-down").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+100 }, "slow");
		return false;
	});

	// Animate Section Head
	$(".section-head p, .section-head h2").animated("fadeInRight");

	// Smooth scrolling menu
	$("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

    // Carousel
    $(".slider").owlCarousel( {
    	items: 1
    });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Заявка отправлена!");
			setTimeout(function() {
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

});
