var data=`[{"FA":[{"today":"1403\/02\/23","nameDay":"23 اردیبهشت 1403 ","eventDay":[{"EventDate":"1403-02-02","SessionId":7530},{"EventDate":"1403-02-04","SessionId":7531},{"EventDate":"1403-02-06","SessionId":7532},{"EventDate":"1403-02-09","SessionId":7533},{"EventDate":"1403-02-11","SessionId":7534},{"EventDate":"1403-02-13","SessionId":7535},{"EventDate":"1403-02-16","SessionId":7536},{"EventDate":"1403-02-18","SessionId":7537},{"EventDate":"1403-02-20","SessionId":7538},{"EventDate":"1403-02-23","SessionId":7539},{"EventDate":"1403-02-25","SessionId":7540},{"EventDate":"1403-02-27","SessionId":7541},{"EventDate":"1403-02-30","SessionId":7542}]}],"EN":[{"today":"2024\/05\/12","nameDay":"12 May 2024","eventDay":[{"EventDate":"2024-05-02","SessionId":7535},{"EventDate":"2024-05-05","SessionId":7536},{"EventDate":"2024-05-07","SessionId":7537},{"EventDate":"2024-05-09","SessionId":7538},{"EventDate":"2024-05-12","SessionId":7539},{"EventDate":"2024-05-14","SessionId":7540},{"EventDate":"2024-05-16","SessionId":7541},{"EventDate":"2024-05-19","SessionId":7542},{"EventDate":"2024-05-21","SessionId":7543},{"EventDate":"2024-05-23","SessionId":7544},{"EventDate":"2024-05-26","SessionId":7545},{"EventDate":"2024-05-28","SessionId":7546},{"EventDate":"2024-05-30","SessionId":7547}]}]}]`
var weekTitle=['<li>Sunday</li><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li>','<li>شنبه</li><li>یک شنبه</li><li>دوشنبه</li><li>سه شنبه</li><li>چهارشنبه</li><li>پنج شنبه</li><li>جمعه</li>']

var param=JSON.parse(data)
var userData
var lang = 'EN'
if (lang=='EN')
{
  userData=param[0].EN[0]
  $("#week-days").html(weekTitle[0]);
}
else
{
  userData=param[0].FA[0]
  $("#week-days").html(weekTitle[1]);
}
$("#dayname").html(userData.nameDay);
var Today =userData.today.split('/')
var firstDaymonth =new Date(userData.today.substring(0,8)+'01')
var dayss= getDaysInMonth(Today[0],Today[1])
var todayStr= (Today[0])+'-'+(Today[1])+'-'
var b = makeWeeks();
$("#weeks").html(b);
function getDaysInMonth(year,month) 
{
    var date = new Date(parseInt(year), parseInt(month)-1, 1);
    var days = [];
    for (let i = 0; i < firstDaymonth.getDay(); i++) {
        days.push('00');
    }
    while (date.getMonth() === parseInt(month)-1) 
    {
      days.push(("0" + date.getDate()).slice(-2));
      date.setDate(date.getDate() + 1);
    }
    var j=35-days.length;
    for (let i = 0; i < j; i++) {
        days.push("00");
    }
    return days;
}
function makeWeeks() {
var html=``
for (let index = 0; index < 5; index++) {
    html+=`<div class="first">`
    var week=dayss.splice(0,7)
  week.forEach(i => {
    var flag = false;
    var sessionId =0
    userData.eventDay.forEach(j => {
        if (todayStr+i==j.EventDate) {
        flag=true;
        sessionId=j.SessionId
       }
    });
    if (flag){
        html+=`<span onclick="classEvent(${sessionId})" class="event">${i}</span>`
    }else{
        html+=`<span>${i}</span>`
    }
  });
  html+=`</div>` 
}
return html;
}

function classEvent(id){
  console.log(id)
}
