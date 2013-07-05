# timepicker

Simple plugin for input fields to quickly select a time in hour:minute style. With the up and down keys the user can scroll through the hours. If the shift key is enabled, the minutes are adjusted.

## Usage


    <input name="time">

    <script src="timepicker.js "></script>
    <script>
      var args = { .. custom arguments, see below .. };
      $('input[name="time"').timepicker(args);
    </script>




<table class='table'>

<tr>
  <th>Argument <th>Default value <th>Description

<tr>
  <td>time <td>'08:00' <td>The default time the input value should have
<tr>
  <td>minStep <td>15 <td>The amount of added minutes when the up key is pressed (or vice-versa)
<tr>
  <td>start   <td>0 <td>The start of the days hour range (ie 00:00 - 23:00)
<tr>
  <td>end     <td>23 <td>The end of the hour range
</table>


### Dependencies

* jQuery