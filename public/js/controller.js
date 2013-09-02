$(document).ready(function() {
  $(document).on('keyup', function(event) {
    if (event.keyCode == 37) {
      adv_player('#player1_strip .active');
      if ($('#player1_strip td:last').hasClass('active')) {
        $(".racer_table").hide();
        $(".winone").css("color", "black");
        $(".clickme").css("visibility", "visible")
      }
    }
    else if (event.keyCode == 39) { 
      adv_player('#player2_strip .active');
      if ($('#player2_strip td:last').hasClass('active')) {
        $(".racer_table").hide();
        $(".wintwo").css("color", "black");
        $(".clickme").css("visibility", "visible")
      }
    } 
  });
});
 
 
var adv_player = function (player) {
    $(player).removeClass('active').next().addClass('active');
};
