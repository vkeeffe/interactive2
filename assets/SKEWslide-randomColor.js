$(document).ready(function(){

      var classes = ["red", "white", "black"];

      $(".btn").each(function(){
          $(this).addClass(classes[~~(Math.random()*classes.length)]);
      });


  $(".btn").on({
    mouseenter: function() {

      var classes = ['skewside', 'skewup', 'slideside', 'slideup', 'slideside', 'slideup', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
      var randomnumber = Math.floor(Math.random() * classes.length);

      $(this).addClass(classes[randomnumber]).delay(1000);
    },


      });









  $('.ss').click(function() {
  	$(this).toggleClass("skewside");
  });

  $('.su').click(function() {
  	$(this).toggleClass("skewup");
  });

  $('.bu').click(function() {
  	$(this).toggleClass("bounceup");
  });

  $('.bd').click(function() {
  	$(this).toggleClass("bouncedown");
  });

  $('.sw').click(function() {
  	$(this).toggleClass("swipe");
  });

  $('.sls').click(function() {
  	$(this).toggleClass("slideside");
  });

  $('.slu').click(function() {
    $(this).toggleClass("slideup");
  });

});
