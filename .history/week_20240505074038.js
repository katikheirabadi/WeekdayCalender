var data=`[{"fa_today":"1403\/02\/12","en_today":"2024\/05\/01","nameDay":"12 اردیبهشت 1403 ","eventDay":[{"EventDate":"2024-04-21"},{"EventDate":"2024-04-23"},{"EventDate":"2024-04-25"},{"EventDate":"2024-04-28"},{"EventDate":"2024-04-30"},{"EventDate":"2024-05-02"},{"EventDate":"2024-05-05"},{"EventDate":"2024-05-07"},{"EventDate":"2024-05-09"},{"EventDate":"2024-05-12"},{"EventDate":"2024-05-14"},{"EventDate":"2024-05-16"},{"EventDate":"2024-05-19"}]}]`
var param=JSON.parse(data)
var userData=param[0]

var d =new Date(userData.en_today)
var firstDay = userData.en_today.su