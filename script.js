$(document).ready(function(){
  if($(window).width()>767) {
    $('a').click(function() {
      var offset = $(this).offset();
      var halfWidth = ($(this).width())/2;
      var left = offset.left + halfWidth;
      $('#triangle').css({'left':left, "display": "block", "margin-top": -10});
    });
  }
});
