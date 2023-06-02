
// Clock funtion




function ghori() {
	var time = new Date(),
	gonta = time.getHours(),
	munit = time.getMinutes(),
	secon = time.getSeconds(),
	dinrat = ' PM';

//am pm

	if ( gonta < 12 ) {
		gonta = ' AM' ;
	}


//24 - 12

	if ( gonta > 12 ) {
		gonta = gonta - 12 ;
	}


// adding 0 before hour

	if ( gonta < 10 ) {
		gonta = '0' + gonta;
	}

// adding 0 before munit
	
	if ( munit < 10 ) {
		munit = '0' + munit;
	}
	
// adding 0 before secon
	
	if ( secon < 10 ) {
		secon = '0' + secon;
	}



document.getElementById('clock').innerHTML = gonta + ' : ' + munit + ' : ' + secon + dinrat;

}

function gori() {
	setInterval( ghori,1000 );
}


























var engli = document.getElementById('english'),
	english = 87.5;


if ( english >= 90 && english <= 100 ) {
	engli.style.color='green',
	engli.innerHTML='Golden A+';
}

else if ( english >= 80 && english <= 89 ) {
	engli.style.color='green',
	engli.innerHTML='A+';
}
else if ( english >= 65 && english <= 79 ) {
	engli.style.color='green',
	engli.innerHTML='A';
}

else if ( english >= 50 && english <= 64 ) {
	engli.style.color='green',
	engli.innerHTML='B';
}


else if ( english >= 40 && english <= 49 ) {
	engli.style.color='green',
	engli.innerHTML='C';
}

else if ( english >= 33 && english <= 39 ) {
	engli.style.color='green',
	engli.innerHTML='D';
}

else{
	engli.innerHTML='Tumi Fail',
	engli.style.color='red';
}







