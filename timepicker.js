/**
 @author Fabien Tesselaar
 @website https://github.com/Tessmore/timepicker
*/

$.fn.timepicker = function(args) {

  var options = $.extend({
      time    : '08:00',
      minStep : 15,
      start   : 0,
      end     : 23
    },
    
    args
  );

  return this.each(function() {
    // Set default time
    this.value = options.time;
    
    $(this).on('keydown', function (e) {
      // UP or DOWN key is pressed
      if (e.keyCode === 38 || e.keyCode === 40) {
        time = this.value.split(':', 1);
        hour = parseInt(time[0]);
        min  = parseInt(time[1]);

        if (e.shiftKey)
          if (e.keyCode === 38)
            min = min+options.minStep > 59 ? 0 : min+options.minStep;
          else
            min = min-options.minStep < 0 ? 60-options.minStep : min-options.minStep;
        else
          if (e.keyCode === 38)
            hour = hour+1 > options.end ? options.start : hour+1;
          else
            hour = hour-1 < options.start ? options.end : hour-1;

        this.value = pad(hour) + ':' + pad(min);
      }
    });
  });
  
  function pad(val) {
    return val < 10 ? '0' + val : val;
  }
};