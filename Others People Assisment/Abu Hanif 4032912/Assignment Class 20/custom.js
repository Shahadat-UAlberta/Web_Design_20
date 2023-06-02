

	
	/*if, else, else if er use*/




	/*var marks = 33;

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
		alert('fail');
	}*/



 			/*Array er use*/

/*
 	var fruits = ['Apple','Orange','Banna','Anar'],

 		show = document.getElementById('demo');

 	show.innerHTML = fruits ['1'];
*/

 		/*Assosuity vray*/

 	/*var fruits = {'a' : 'Apple', 'b' : 'Orange', 'c' : 'Banna', 'd' : 'Anar'},

 		show = document.getElementById('demo');

 	show.innerHTML = fruits ['b'];*/





 			/*Clock Create*/



 	function ghori() {

 		var time = new Date();

 		gonta = time.getHours() ;

 		minit = time.getMinutes() ;

 		sec = time.getSeconds() ;

 		dinrat = ' PM';


 		// AM, PM
 		if ( gonta < 12 ) {

 			dinrat = ' AM'
 		}

 		// 24-12

 		if( gonta > 12) {

 			gonta = gonta - 12;
 		}
 		

 		// Addin 0 before hour

 		if (gonta < 10 ) {

 			gonta = '0' + gonta;
 		}

 		// Addin 0 before minute

 		if (minit < 10 ) {

 			minit = '0' + minit;
 		}

 		// Addin 0 before ssec

 		if (sec < 10 ) {

 			sec = '0' + sec;
 		}


 	document.getElementById('clock').innerHTML = gonta + ':' + minit + ':' + sec + dinrat ;

 	}

 	setInterval(ghori, 100);