

var marks = 185;

if ( marks >= 80 && marks <= 80) {
	alert('A+');
}
else if ( marks >=85 && marks <= 80 )  {
   alert('A');
}

else {
	alert('you are dead');
}

function clock() {
	var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    dinrat = 'AM';

    if ( hours > 12) {
    	hours = hours - 12;
    }
     if ( hours < 12){
     	dinrat = 'AM';
     }

     if ( hours < 10){
     	hours = '0' + hours;
     }
document.getElementById('clock').innerHTML= hours + ':' + minutes + ':' + seconds + dinrat;

}

setInterval(clock, 100);