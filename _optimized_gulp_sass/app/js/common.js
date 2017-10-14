$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
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

	// Animate ads
	$(".section_1").waypoint(function() {
		$(".section_1 .ad").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	// Animate Section Head
	$(".section-head p, .section-head h2").animated("fadeInRight");

	// Animate items
	$(".info-item-wrap").animated("zoomIn");

	// Smooth scrolling menu
	$("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

	// Blocks
	$(".section_3").waypoint(function() {

		$(".section_3 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});
		
	}, {
		offset : "30%"
	});

    // Carousel
	$(".slider").owlCarousel( {
    	items : 1,
    	nav : true,
    	navText : "",
    	loop : true,
    	autoHeight : true,
    	autoplay : true,
    	autoplayTimeout : 3000, 
    	autoplayHoverPause : true
    });

    $(".slider .slide .day").animated("rollIn");

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
