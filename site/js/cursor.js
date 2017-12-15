$('body').mouseover(function(){
  $(this).css({cursor: 'none'});
});

$(document).on('mousemove', function(e){
  $('#cursor').css({
    left:  e.pageX,
    top:   e.pageY
  });
});

$('body').mouseover(function(){
  $(this).css({cursor: 'none'});
});
