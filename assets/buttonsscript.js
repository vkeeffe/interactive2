$(document).ready(function(){

	$('#button-1').click(function() {
		$(this).animate({
			fontSize: 'toggle',
		}, 1500 );
	});

  $('#button-2').click(function() {
    $(this).animate({
      letterSpacing: '+=10px',
    }, 1500 );
  });

  $('#button-3').click(
    function() {
		$(this).animate({
			fontSize: '16px',
		}, 1500 );
    $(this).animate({
			fontSize: '72px',
		}, 600 );
    $(this).animate({
			fontSize: '22px',
		}, 1500 );
	});


  $('#button-4').click(function(){
    $(this).toggleClass('clicked');
    $(this).animate({
      fontSize: '18px'
    }, 200);
    $(this).animate({
      fontSize: '22px'
    }, 800);
  });

  $('#button-5').click(function(){
    $(this).animate({
      top: '+=18px'
    }, 200);
    $(this).animate({
      top: '-=18px'
    }, 200);
    $(this).animate({
      top: '+=18px'
    }, 200);
    $(this).animate({
      top: '-=18px'
    }, 200);
    $(this).animate({
      top: '+=98px'
    }, 200);
  });

  $('#button-6').click(function(){
        $('.btn').toggleClass('wash');
        $('.container').toggleClass('wash-canvas');
  });

  $('#button-7').click(function(){
        $('.btn').toggleClass('font-change');
  });

	$('#button-11').click(function(){
        $('#button-2').animate({
					left: '+=3000px'
				}, 10000);
  });

	$('#button-12').click(function(){
        $('#button-11').animate({
					top: '+=3000px'
				}, 10000);
  });

	$('#button-13').click(function(){
				$('html, body').animate({
					scrollLeft: '3000px'
				}, 2000);
	});

	$('#button-14').click(function(){
				$('#button-1').animate({
					top: '+=3000px'
				}, 10000);
				$('#button-3').animate({
					left: '-=3000px'
				}, 10000);
				$('#button-4').animate({
					left: '-=3000px', top:'+=3000px'
				}, 10000);
	});

	$('#button-15').click(function() {
		$(this).toggleClass("toggle");
  if ( $(this).hasClass( "toggle" ) ) {
    $(this).text( "I'm a Toggle" );
  } else {
    $(this).text( "I'm a Button" );
  }

});

$('#button-16').click(function() {
	$(this).toggleClass("togglecolor");
if ( $(this).hasClass( "togglecolor" ) ) {
	$(this).text( "I'm a Toggle" );
} else {
	$(this).text( "I'm a Button" );
}

});


$('#button-17').click(function() {
	 $(this).toggleClass("shadow");
});


$('#button-18').click(function() {
    $("#button-17").fadeTo("slow", 0.25);
});

$("#button-19").on({
    mouseenter: function(){
        $('.container').css("background-color", "lightgray");
    },
    mouseleave: function(){
        $('.container').css("background-color", "white");
    },
		click: function(){
		        $('.container').css("background-color", "lightgreen");
		    }
});

$("#button-20").on({
    mouseenter: function(){
        $('.btn').css("background-color", "#546e7a");
    },
    mouseleave: function(){
        $('.btn').css("background-color", "#55acee");
    },
		click: function(){
		        $('.btn').css("background-color", "#f4511e");
		    }
});


$('#button-21').click(function() {
	$(this).animate({
		fontSize: '+=4px'
	}, 200);
	$(this).animate({
		left: '-=10px'
	}, 200);
	$(this).animate({
		fontSize: '+=14px'
	}, 200);
	$(this).animate({
		left: '+=1000px'
	}, 200);

});

$('#button-22').click(function() {
	$(this).animate({
		fontSize: '+=4px'
	}, 200);
	$(this).animate({
		top: '-=10px'
	}, 200);
	$(this).animate({
		fontSize: '+=14px'
	}, 200);
	$(this).animate({
		top: '+=1000px'
	}, 200);

});

$('#button-23').click(function() {
	$(this).toggleClass("skewme");
});

$('#button-24').click(function() {
	$(this).toggleClass("skewmetoo");
});

$('#button-25').click(function() {
	$(this).toggleClass("bounce");
});

$('#button-26').click(function() {
	$(this).toggleClass("swipe");
});

$('#button-30').click(function() {
	$(this).toggleClass("swipe");
});

$("#button-31").on({
		click: function(){
		  $(this).css("transform", "rotate(180deg)");
			$(this).text( "Dang it!" );
		}
});

$("#button-32").on({
		click: function(){
			$(this).text( "That's Better" );
			$(this).toggleClass("better");
		}
});

$("#button-33").on({
		click: function(){
			$("#button-33").text("I fixed you!");
			$("#button-32").removeClass("better");
			$("#button-32").text("I didn't want to be fixed…");
			$("#button-31").text("Thanks!");
			$("#button-31,#button-32").each(function(){
		$(this).addClass("back");
	})
}
});

$("#button-34").on({
		click: function(){
			$(".btn").text( "Wheeee!" );
			$(".btn").toggleClass("allrotate");
		}
});

$("#button-35").on({
    mouseenter: function(){
				$(".btn").text("Don't click it!");
        $(this).text("Don't click me!");
    },
		click: function(){
		    $('.container').css("background-color", "black");
				$('.btn').css("background-color", "red");
				$('.btn').css("box-shadow", "0px 5px 0px 0px #800000");
				$('.btn').toggleClass("frown");
				$('.btn').text(">:[");
				$('#button-50').text(":o");
		    }
});

$("#button-36").on({
	mouseenter: function(){
			$(this).addClass("infrotate");
	},
		click: function(){
		  $(this).toggleClass("grow");
		    }
});

$("#button-38").on({
		click: function(){
		  $('.btn').toggleClass("rainbow");
		    }
});

$("#button-39").on({
		click: function(){
		  $('.btn').addClass("scrolling");
		    }
});




$("#button-40").on({
		click: function(){
		  $(this).addClass("text-shadow");
		    }
});




$("#button-42").on({
    mouseenter: function(){
        $(this).text("Launch 3… 2…");
    },
		click: function(){
		        $("#button-43").addClass("bounceup");
						$("#button-44").addClass("bouncedown");
						$("#button-45").addClass("bounceup");
						$("#button-46").addClass("bouncedown");
						$("#button-47").addClass("bounceup");
						$("#button-48").addClass("bouncedown");
						$("#button-49").addClass("bounceup");
						$("#button-43").text("That's All Folks!");
						$("#button-44").text("That's All Folks!");
						$("#button-45").text("That's All Folks!");
						$("#button-46").text("That's All Folks!");
						$("#button-47").text("That's All Folks!");
						$("#button-48").text("That's All Folks!");
						$("#button-49").text("That's All Folks!");


		    }
});














$('#button-50').click(function() {
	location.reload();
});



});
