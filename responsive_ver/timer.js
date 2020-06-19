
 CountDownTimer('8/23/2020 9:00 AM', 'gonggong');
 CountDownTimer('8/2/2020 9:00 AM', 'mima');
 CountDownTimer('8/27/2020 9:30 AM', 'hanji');
 CountDownTimer('8/2/2020 9:45 AM', 'aere');
 CountDownTimer('8/2/2020 10:00 AM', 'new');
 CountDownTimer('8/14/2020 10:00 AM', 'msk');
 CountDownTimer('8/12/2020 11:00 AM', 'purem');
 CountDownTimer('8/22/2020 11:00 AM', 'ino');
 CountDownTimer('8/9/2020 11:00 AM', 'kang');
 CountDownTimer('8/29/2020 12:00 PM', 'musinsa');
 CountDownTimer('8/2/2020 1:00 PM', 'hue');
 CountDownTimer('8/2/2020 9:00 AM', 'b1');
 CountDownTimer('8/2/2020 9:00 AM', 'b2');
 CountDownTimer('8/2/2020 9:00 AM', 'b3');
 
 CountDownTimer('8/22/2020 10:00 AM', 'tran1');
 CountDownTimer('8/22/2020 6:00 PM', 'tran2');

 CountDownTimer('8/10/2020 3:00 PM', 'saint1');
 CountDownTimer('8/10/2020 3:00 PM', 'saint3');
 CountDownTimer('8/8/2020 5:00 PM', 'kind');


// CountDownTimer('4/3/2020 1:00 PM', '');

    Today("today");

 function Today(id) {

    var now = new Date();



     var _second = 1000;

     var _minute = _second * 60;

     var _hour = _minute * 60;

     var _day = _hour * 24;



    
     document.getElementById(id).innerHTML = now;
     return
 }




 function CountDownTimer(dt, id) {

     var end = new Date(dt);



     var _second = 1000;

     var _minute = _second * 60;

     var _hour = _minute * 60;

     var _day = _hour * 24;

     var timer;



     function showRemaining() {

         var now = new Date();

         var distance = end - now;



         //시간 종료 시 뜨는 문구

         if (distance < 0) {

             clearInterval(timer);

             document.getElementById(id).innerHTML = '오늘의 판매시간이 지났습니다.';
              document.getElementById(id).style.color = "rgb(99,120,162)";

             return;

         }

         var days = Math.floor(distance / _day);

         var hours = Math.floor((distance % _day) / _hour);

         var minutes = Math.floor((distance % _hour) / _minute);

         var seconds = Math.floor((distance % _minute) / _second);


         //document.getElementById(id).innerHTML = days + '일 ';
        if(hours!=0){
         document.getElementById(id).innerHTML = hours + '시간 ';
        
         document.getElementById(id).innerHTML += minutes + '분 ';

         document.getElementById(id).innerHTML += seconds + '초 남음';
        }
        else{
         document.getElementById(id).innerHTML = minutes + '분 ';

         document.getElementById(id).innerHTML += seconds + '초 남음';

        }

        document.getElementById(id).style.color = "rgb(255,0,0)";
     }

     timer = setInterval(showRemaining, 1000);

 }