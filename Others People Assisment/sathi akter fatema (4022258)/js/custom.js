
function ghori() {
	var time = new Date(),
	ghonta = time.getHours(),
	minit = time.getMinutes(),
	sec = time.getSeconds(),
	dinrat = ' pm'; 

	//am-pm

	if(ghonta <12){
		dinrat = ' Am'
	}

	//24-12

	if (ghonta > 12){
		ghonta = ghonta-12;
	}

	//am-pm

	if(ghonta <12){
		dinrat = ' Am'
	}

	//adding 0 before hour

	if( ghonta < 10) {
		ghonta = '0' + ghonta;
	}

	//adding 0 before minit

	if( minit < 10) {
		minit = '0' + minit;
	}

	//adding 0 before hour

	if( sec < 10) {
		sec = '0' + sec;
	}

	document.getElementById('clock').innerHTML = ghonta + ':'+ minit + ':' + sec + dinrat ;
}



setInterval(ghori, 100);





























/*var mitu = 150,
	nitu = 120,
	Nitu = 100,
	mitu = 50,
	headerArea = 65;

alert(nitu);
document.write(nitu);
var nitu = 120,
    intro = document.getElementById('intro');


intro.style.color='red'
intro.innerHTML= 'we love javascript'*/


/*function box(){
	alert('ballons ure gece')
}



var marks = 69;
if ( marks >= 80 && marks <=100 ) {
	alert('A+');
}

else if(marks >= 70 && marks <=79 ){
	alert('A')
}

else if(marks >=60 && marks <=69){
	alert('A-')
}

else if(marks >=50 && marks <=59){
	alert('B')
}

else if(marks >=40 && marks <=49){
	alert('C')
}
else {
	alert('ajk bashay ay khobor ase')
}

var fruits = {'a' : 'Apple', 'b' : 'Orange', 'c' : 'Olive', 'd' : 'Banana', 'e':'Mango'};

var  intro = document.getElementById('intro');

	intro.innerHTML = fruits['a']*/