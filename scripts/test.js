
//var months = document.getElementById('months');
//var weeks = document.getElementById('weeks');
//var days = document.getElementById('days');
//var hours = document.getElementById('hours');
//var minutes = document.getElementById('minutes');
//var seconds = document.getElementById('seconds');
////var monthsAge, weeksAge, daysAge, hoursAge, minutesAge, secondsAge;
//
//
//function calculateAge() {
//    var age = document.getElementById('age').value;
//    console.log(age);
//    
//    months.innerHTML = "Your age in months is " +  (age * 12);
//    weeks.innerHTML = "Your age in weeks is " + (age * 52);
//    days.innerHTML = "Your age in days is " + ((age * 365) - (Math.floor(age/4)));
//    hours.innerHTML = "Your age in hours is " + (((age * 365) - (Math.floor(age/4))) * 24);
//    minutes.innerHTML = "Your age in minutes is " + (((age * 365) - (Math.floor(age/4))) * 24 * 60);
//    seconds.innerHTML = "Your age in seconds is " + (((age * 365) - (Math.floor(age/4))) * 24 * 60 * 60);
//}

window.onload = function() {

	//var calculatedAgeText = document.getElementById('calculatedAgeContent').innerTEXT;
	function calculateAge() {
		var age = document.getElementById('age').value;
    //console.log(age);
		
		var checkboxValues = document.querySelectorAll('input[type="checkbox"]');
	console.log(checkboxValues);
		
		for( var i = 0; i < checkboxValues.length; i++ ) {
			if( checkboxValues[i].checked ) {
//				console.log(checkboxValues[i].value);
				let checkedAgeCalculation = checkboxValues[i];
				
				switch(checkboxValues[i].value) {
					case 'months':
						document.getElementById('months').innerHTML = "Your age in months is " +  (age * 12) + "<br/>";
						break;
					case 'weeks':
						document.getElementById('weeks').innerHTML = "Your age in weeks is " + (age * 52) + "<br/>";
						break;
					case 'days':
						document.getElementById('days').innerHTML = "Your age in days is " + ((age * 365) - (Math.floor(age/4))) + "<br/>";
						break;
					case 'hours':
						document.getElementById('hours').innerHTML = "Your age in hours is " + (((age * 365) - (Math.floor(age/4))) * 24) + "<br/>";
						break;
					case 'minutes':
						document.getElementById('minutes').innerHTML = "Your age in minutes is " + (((age * 365) - (Math.floor(age/4))) * 24 * 60) + "<br/>";
						break;
					case 'seconds':
						document.getElementById('seconds').innerHTML = "Your age in seconds is " + (((age * 365) - (Math.floor(age/4))) * 24 * 60 * 60) + "<br/>";
						break;
				}	
			} else if( !checkboxValues[i].checked ) {
				switch(checkboxValues[i].value) {
					case 'months':
						document.getElementById('months').innerHTML = "";
						break;
					case 'weeks':
						document.getElementById('weeks').innerHTML = "";
						break;
					case 'days':
						document.getElementById('days').innerHTML = "";
						break;
					case 'hours':
						document.getElementById('hours').innerHTML = "";
						break;
					case 'minutes':
						document.getElementById('minutes').innerHTML = "";
						break;
					case 'seconds':
						document.getElementById('seconds').innerHTML = "";
						break;
				}	
			}
			
//			} else if( !checkboxValues[i].checked ) {
//				document.getElementById('months').innerHTML = '';
//				document.getElementById('weeks').innerHTML = '';
//			}
		}
		
		
		
		
		
		
		
	}
	
	
	var calculateBtn = document.getElementById('calculate');
	calculateBtn.addEventListener('click', calculateAge);
	
	


	
}