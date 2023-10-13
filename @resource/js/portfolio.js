// 디바이스별 해상도 높이
function funLoad(){
	var deviceHeight = $(window).height();
	$('.device-h').css({'height':deviceHeight+'px'});
}
window.onload = funLoad;
window.onresize = funLoad;

$(document).ready(function(){
	setTimeout(function(){	
		$('.intro').addClass('on');
	},300);


    $('.pop-slider').slick({
        swipe: true,
        draggable: true,
        arrows: true,
        dots: true,
        speed: 600,
        infinite: true,
		fade: true,
		arrows: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        responsive: [{
            breakpoint: 1024,
            settings: {
                swipe: true
            }
        }]
    });

	// $(".gnb li a").click( function() {
	// 	var target = $(this).attr("href");
	// 	$("body, html").animate({
	// 		scrollTop: target.offset().top
	// 	}, 300);
	// 	return false;
	// });

	$(window).on("load resize",function(){
		!function(){
			var cont=$("#contents"),
			foot=(cont.height(),cont.width(),$("#footer")),
			n=foot.height();foot.width(),
			cont.css({"margin-bottom":n})
		}
		()
	})

	layerAgreePop();
	scrollTop();
})

$(window).scroll(function() {
 	skillAct();
	scrollTop();
});

function scrollTop() {
	if ($(window).scrollTop() > 0) {
	    $('#wrap .intro').removeClass('off');
	    $('#wrap .intro').addClass('off')
    } else {
	    $('#wrap .intro').removeClass('off');
    }
	var sections = ['intro1', 'works2', 'skill3'];
	var current;
	for (var i = 0; i < sections.length; i++) {
		if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
			current = sections[i];
	    }
	}
	$(".gnb li a[href='#"+current+"']").addClass('on');
	$(".gnb li a").not("a[href='#"+current+"']").removeClass('on');
}

function skillAct() {
	if ($(window).scrollTop() >  $('#contents').offset().top) {
		$('.skill').addClass('on');
	}
}

// popup
function layerAgreePop(){
	$('a[data-slide]').click(function(e) {
	  e.preventDefault();
	  var slideno = $(this).data('slide');
	  $('#layerAgreePop').fadeIn(200).addClass('on');
	  $('html body').css('overflow','hidden')
	  $(".pop-slider").slick("setPosition");
	  $('.pop-slider').slick('slickGoTo', slideno - 1 );
	});
}

function popClose(){
    $('.popup').fadeOut(200).removeClass('on');
	$('html body').css('overflow','auto');
}