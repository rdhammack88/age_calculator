window.onload = function() {

	var calculateBtn = document.getElementById('calculate');
	
	function calculateAge() {
		var age = document.getElementById('age').value;		
		var checkboxValues = document.querySelectorAll('input[type="checkbox"]');
		
		for( var i = 0; i < checkboxValues.length; i++ ) {
			if( checkboxValues[i].checked ) {
				switch(checkboxValues[i].value) {
					case 'months':
						document.getElementById('months').innerHTML = "Your age in months is " +  Math.floor(age * 12) + "<br/>";
						break;
					case 'weeks':
						document.getElementById('weeks').innerHTML = "Your age in weeks is " + Math.floor(age * 52) + "<br/>";
						break;
					case 'days':
						document.getElementById('days').innerHTML = "Your age in days is " + Math.floor((age * 365) - (Math.floor(age/4))) + "<br/>";
						break;
					case 'hours':
						document.getElementById('hours').innerHTML = "Your age in hours is " + Math.floor(((age * 365) - (Math.floor(age/4))) * 24) + "<br/>";
						break;
					case 'minutes':
						document.getElementById('minutes').innerHTML = "Your age in minutes is " + Math.floor(((age * 365) - (Math.floor(age/4))) * 24 * 60) + "<br/>";
						break;
					case 'seconds':
						document.getElementById('seconds').innerHTML = "Your age in seconds is " + Math.floor(((age * 365) - (Math.floor(age/4))) * 24 * 60 * 60) + "<br/>";
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
		}
	}
	
	calculateBtn.addEventListener('click', calculateAge);
}