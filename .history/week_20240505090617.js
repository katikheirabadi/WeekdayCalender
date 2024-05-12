var data=`[{"fa_today":"1403\/02\/16","en_today":"2024\/05\/05","fa_nameDay":"16 اردیبهشت 1403 ","en_nameDay":"05 May 2024","eventDay":[{"EventDate":"2024-04-21"},{"EventDate":"2024-04-23"},{"EventDate":"2024-04-25"},{"EventDate":"2024-04-28"},{"EventDate":"2024-04-30"},{"EventDate":"2024-05-02"},{"EventDate":"2024-05-05"},{"EventDate":"2024-05-07"},{"EventDate":"2024-05-09"},{"EventDate":"2024-05-12"},{"EventDate":"2024-05-14"},{"EventDate":"2024-05-16"},{"EventDate":"2024-05-19"}]}]`
var param=JSON.parse(data)
var userData=param[0]

var enToday =new Date(userData.en_today)
var firstDay = userData.en_today.substring(0,8)+'01'
var firstDaymonth =new Date(firstDay)
var t = userData.en_nnameDay


getDaysInMonth()
function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }