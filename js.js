$(document).ready(function(){
  // function assign (id) {
  //   $('a').on('click', function(){
  //     $('.yellow-bar img').css({"display": "block", "left": id.offset()});
  //   });
  // }
  $('a').click(function(e) {
  var offset = $(this).offset();
  e.stopPropagation();
  var halfWidth = ($(this).width())/2;
  var left = offset.left + halfWidth;
  $('#triangle').css({'left':left, "display": "block", "margin-top": -10});
  });

});
