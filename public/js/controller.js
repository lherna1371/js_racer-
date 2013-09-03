
$(document).ready(function() {
  $(document).one('keyup', function(event) {
    if (event.keyCode == 37 || event.keyCode == 39) {
      start = new Date();
      console.log(start);
    } 
  });

  $(document).on('keyup', function(event) {
    if (event.keyCode == 37) {
      adv_player('#player1_strip .active');
      if ($('#player1_strip td:last').hasClass('active')) {
        $(".racer_table").hide();
        $(".winone").css("color", "black");
        $(".clickme").css("visibility", "visible")

        stop = new Date();
        console.log(stop);
        var duration = stop - start
        console.log(duration);
        var data = {winner_id: "player_1", time: duration}
     
        $.post("/winner", data, function(response){
          $("body").html(response);
        }); 
      }
    }
    else if (event.keyCode == 39) { 
      adv_player('#player2_strip .active');
      if ($('#player2_strip td:last').hasClass('active')) {
        $(".racer_table").hide();
        $(".wintwo").css("color", "black");
        $(".clickme").css("visibility", "visible")

        stop = new Date();
        console.log(stop);
        var duration = stop - start
        console.log(duration);
        
        var data_two = {winner_id: "player_2", time: duration}

        $.post("/winner", data_two, function(response){
         $("body").html(response);
        });

      }
    } 
  });
});
 
 
var adv_player = function (player) {
    $(player).removeClass('active').next().addClass('active');
};
