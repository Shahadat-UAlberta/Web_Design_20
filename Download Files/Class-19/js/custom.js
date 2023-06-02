
function ghori() {

	var time = new Date(),
	ghonta = time.getHours(),
	minit = time.getMinutes(),
	sec = time.getSeconds(),
	dinrat = ' PM';

	// AM/PM

	if ( ghonta < 12 ) {
		dinrat = ' AM';
	}

	// 24 - 12

	if ( ghonta > 12 ) {
		ghonta = ghonta - 12;
	}


	// adding 0 before hour

	if (ghonta < 10) {
		ghonta = '0' + ghonta;
	}

	// adding 0 before Minute

	if (minit < 10) {
		minit = '0' + minit;
	}

	// adding 0 before Second

	if (sec < 10) {
		sec = '0' + sec;
	}



	document.getElementById('clock').innerHTML= ghonta + ':' + minit + ':' + sec + dinrat ;

}


setInterval(ghori, 100);






























/*var mitu = 150,
	nitu = 120,
	Nitu = 100,
	mitu = 50,
	headerArea = 65;


alert( nitu );
document.write(nitu); 
var nitu = 20,
	intro = document.getElementById('intro');

intro.style.color='green';

intro.innerHTML = 'We Are Learning JavaScript.';*/

/*
function box() {
	alert('Balloons uira gese!');
}


var marks = 82;

if ( marks >= 80 && marks <= 100 ) {
	alert('A+');
}


else if ( marks >= 70 && marks <= 79 ) {
	alert('A');
}

else if ( marks >= 60 && marks <= 69 ) {
	alert('A-');
}

else if ( marks >= 50 && marks <= 59 ) {
	alert('B');
}

else if ( marks >= 40 && marks <= 49 ) {
	alert('C');
}

else if ( marks >= 33 && marks <= 39 ) {
	alert('D');
}

else {
	alert('Ajk Basay Aaay! Khobor ase!');
}


var fruits = { 'a' : 'Apple', 'b' : 'Orange', 'c' : 'Olive', 'd' : 'Banana', 'e' : 'Mango' };

var intro = document.getElementById('intro');

	intro.innerHTML = fruits['b'];*/



































