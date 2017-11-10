$("document").ready(function(){
	var answer = '' ; // du lieu hien thi tren screen
	var operator =''; // operator to determine an operation on numbers and give a final answer to be displayed
	var tempoNum = [];
	var convArr = [];
	var history = [];
	var temp =0;
	$('#clear').on('click', function(){
		$('#answer').html('0');
		$('#equation').html('');
		convArr = [];
		tempoNum = [];
		history = [];
	});
	$('#CE').on('click',function(){
		tempoNum.pop() ;
		history.pop();
		$('#equation').html(history.join(''));
		$('#answer').html(tempoNum.join(''));
		if (tempoNum.length === 0) $('#answer').html(0);
	})
	$('#ans').on('click',function(){
		
			tempoNum.push(temp);
			history.push(temp);
			$('#equation').html(history.join(''));
			$('#answer').html(tempoNum.join(''));
	
	})
	$('#doc').on('click',function(){
		if ( tempoNum.indexOf('.') === -1){
			tempoNum.push('.');
			history.push('.');
			$('#equation').html(history.join(''));
			$('#answer').html(tempoNum.join(''));
		}
	})
	$('#open').on('click', function(){
		$('#answer').html('Its hard to solve');
		$('#equation').html('_____olo_____');
		convArr = [];
		tempoNum = [];
		history = [];
	})
	$('#close').on('click', function(){
		$('#answer').html('Its hard to solve');
		$('#equation').html('_____olo_____');
		convArr = [];
		tempoNum = [];
		history = [];
	})
	$('#num0').on('click', function(){
		press(0);
	})
	$('#num1').on('click', function(){
		press(1);
	})
	$('#num2').on('click', function(){
		press(2);
	})
	$('#num3').on('click', function(){
		press(3);
	})
	$('#num4').on('click', function(){
		press(4);
	})
	$('#num5').on('click', function(){
		press(5);
	})
	$('#num7').on('click', function(){
		press(7);
	})
	$('#num6').on('click', function(){
		press(6);
	})
	$('#num8').on('click', function(){
		press(8);
	})
	$('#num9').on('click', function(){
		press(9);
	})
	$('#num-neg').on('click',function(){
		press('-');
	})
	
	$('#add').on('click',function(){
		oper('+');
	})
	$('#sub').on('click',function(){
		oper('-');
	})
	$('#mul').on('click',function(){
		oper('*');
	})
	$('#div').on('click',function(){
		oper('/');
	})
	$('#num-index').on('click',function(){
		oper('^');
	})
	$('#percent').on('click',function(){
		oper('%');
	})
	$('#inverse').on('click',function(){
		oper("^-1");
	})
	$('#factorial').on('click',function(){
		oper("!");
	})
	$('#sqrt').on('click',function(){
		oper('sqrt');
	})
	$('#sin').on('click',function(){
		oper('sin');
	})
	$('#cos').on('click',function(){
		oper('cos');
	})
	
	
	function press(num){
		if (tempoNum.length < 15){
			tempoNum.push(num );
			history.push(num );
			$('#equation').html(history.join(''));
			$('#answer').html(tempoNum.join(''));
		}
	}
	function oper(operator){

		//if( history.length !== 0){
		//	if ( operator === 'cos' || operator === 'sin' ||)
		//		var convSum = Number(history[history.length-1]);
		//	if (typeof convSum === 'number' && !isNaN(convSum) ){
			history.push(operator);
			$('#equation').html(history.join(''));
			if ( tempoNum.length !== 0 ){
				convArr.push(Number(tempoNum.join("")));

			}
			convArr.push(operator);
			tempoNum = [];

				//console.log(tempoNum);
		//	}

		//}
	}
	$('#equal').on('click',function(){
		convArr.push(Number(tempoNum.join('')));
		//console.log(tempoNum);
		//console.log(convArr);
		
		cal();

	})
	
	function cal(){
		//console.log(convArr[convArr.length-1]);
		//console.log(typeof convArr[convArr.length-2]);

		if (isNaN(convArr[convArr.length-1])){
			return $('#answer').html('Error Input');
		}


		for (let i = 0 ; i < convArr.length; i++){

			if (convArr.indexOf('^') !== -1){
				//console.log(convArr.indexOf('^'));
				sum('^');
			}
			if (convArr.indexOf('!') !== -1){
				sum('!');
			}
			if (convArr.indexOf('sqrt') !== -1){
				sum('sqrt');
			}
			if (convArr.indexOf('%') !== -1){
				sum('%');
			}
			if (convArr.indexOf("^-1") !== -1){
				sum("^-1");
			}

			
			let a=convArr.indexOf('sin'),
			b=convArr.indexOf('cos');
			if (a > b){
				if ( a !== -1){
					sum('sin');
				}
				if ( b !== -1){
					sum('cos');
				}
			}
			else{
				if ( b !== -1){
					sum('cos');
				}
				if ( a !== -1){
					sum('sin');
				}			
			}
			// mul and div
			a=convArr.indexOf('*'),
			b=convArr.indexOf('/');
			if (a <b){
				if ( a !== -1){
					sum('*');
				}
				if ( b !== -1){
					sum('/');
				}
			}
			else{
				if ( b !== -1){
					sum('/');
				}
				if ( a !== -1){
					sum('*');
				}			
			}
			// plus and sub
			a=convArr.indexOf('+'),
			b=convArr.indexOf('-');
			if (a <b){
				if ( a !== -1){
					sum('+');
				}
				if ( b !== -1){
					sum('-');
				}
			}
			else{
				if ( b !== -1){
					sum('-');
				}
				if ( a !== -1){
					sum('+');
				}			
			}
			temp = convArr[0];
			$('#answer').html(convArr[0].toPrecision(4));
			$('#equation').html('');
			convArr = [];
			tempoNum = [];
			history = [];
		}
		function sum(operator){
			//console.log(convArr.indexOf(operator));
			var indSquare = convArr.indexOf(operator);
			let sum;
			if (operator === '*'){
				sum = convArr[indSquare-1] * convArr[indSquare+1];
				convArr.splice(indSquare - 1, 3, sum);
			}else if(operator === '/'){
				sum = convArr[indSquare-1] / convArr[indSquare+1];
				convArr.splice(indSquare - 1, 3, sum);
			}
			else if(operator === '+'){
				sum = convArr[indSquare-1] + convArr[indSquare+1];
				convArr.splice(indSquare - 1, 3, sum);
			}
			else if(operator === '-'){
				sum = convArr[indSquare-1] - convArr[indSquare+1];
				convArr.splice(indSquare - 1, 3, sum);
			}
			
			else if(operator === '^'){
				sum = Math.pow(convArr[indSquare-1], convArr[indSquare+1]);
				convArr.splice(indSquare - 1, 3, sum);
				
			}
			else if(operator === "^-1"){
				sum = Math.pow(convArr[indSquare-1],-1);
				convArr.splice(indSquare - 1, 2, sum);
			}
			else if(operator === '%'){
				sum = convArr[indSquare-1] /100;
				convArr.splice(indSquare - 1, 2, sum);
			}
			else if(operator === '!'){
				sum =1;
				for (let i = 1; i <= convArr[indSquare-1]; i++){
					sum *= i;
				}
				convArr.splice(indSquare - 1, 2, sum);
			}
			else if(operator === 'sqrt'){
				if (typeof convArr[indSquare-1] === 'number'){
					sum = convArr[indSquare-1]*Math.pow(convArr[indSquare+1],1/2) ;
					convArr.splice(indSquare - 1, 3, sum);
				}else{
					sum = Math.pow(convArr[indSquare+1],1/2) ;
					convArr.splice(indSquare , 2, sum);
				}
			}
			else if(operator === 'sin'){
				console.log(typeof convArr[indSquare]);

				if (typeof convArr[indSquare-1] === 'number'){
					sum = convArr[indSquare-1]*Math.sin(convArr[indSquare+1]) ;
					convArr.splice(indSquare - 1, 3, sum);
				}else{
					sum = Math.sin(convArr[indSquare+1]) ;
					convArr.splice(indSquare , 2, sum);
				}
			}
			else if(operator === 'cos'){
				if (typeof convArr[indSquare-1] === 'number'){
					sum = convArr[indSquare-1]*Math.cos(convArr[indSquare+1]) ;
					convArr.splice(indSquare - 1, 3, sum);
				}else{
					sum = Math.cos(convArr[indSquare+1]) ;
					convArr.splice(indSquare , 2, sum);
				}
			}
			console.log(convArr);
			tempoNum = [];
		}
	}
});
// Error
// 10%*2
// 2+3* 
// press sqrt first
// num-neg only -
// sqrt(sin)