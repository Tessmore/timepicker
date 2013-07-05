/**
 @author Fabien Tesselaar
 @website https://github.com/Tessmore/timepicker
*/

$.fn.timepicker = function(args) {

  var options = $.extend({
      time    : '08:00',
      hourStep : 1,
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
        time = this.value.split(':', 2);
        hour = parseInt(time[0]);
        min  = parseInt(time[1]);
        
        console.log(min);

        if (e.shiftKey)
          min = e.keyCode === 38 ? 
            up(min, options.minStep, 59, 0) :
            down(min, options.minStep, 60, 0);
        else
          hour = e.keyCode === 38 ? 
            up(hour, options.hourStep, options.end, options.start) :
            down(hour, options.hourStep, options.end, options.start);

        this.value = pad(hour) + ':' + pad(min);
      }
    });
  });
  
  function up(current, step, limit, base) {
    return current + step > limit ? base : current + step;
  }
  
  function down(current, step, limit, base) {
    return current - step < base ? limit - step : current - step;
  }
  
  function pad(val) {
    return val < 10 ? '0' + val : val;
  }
};