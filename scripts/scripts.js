window.onload = function() {
	// Calculate button
	var calculateBtn = document.getElementById('calculate');
	
	function calculateAge() {
		var age = parseInt(document.getElementById('age').value);
		var checkboxValues = document.querySelectorAll('input[type="checkbox"]');
		var errorDiv = document.getElementById('hiddenError');
		var errorMessage = document.getElementById('errorMessage');
		var checkedboxes = [];
		console.log(checkboxValues.checked);
		
		// Verify age has a value, and that it is greater than 0
		if( !age || age <= 0 ) { 
			errorMessage.innerHTML = 'Please enter a valid age to calculate';
			errorDiv.classList.remove('hidden');
			return; 
		} // End of age check conditional
				
		for( var i = 0; i < checkboxValues.length; i++ ) {
			errorDiv.classList.add('hidden');
			if( checkboxValues[i].checked ) {
				checkedboxes.push(checkboxValues[i].value);
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
				} // End of switch statement
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
				} // End of switch statement	
			} // End of else if statement
		} // End of for loop
		
		console.log(checkedboxes.length);
		if( checkedboxes.length <= 0 ) { 
			errorMessage.innerHTML = 'Please check at least one format to calculate your age with';
			errorDiv.classList.remove('hidden');
			return; 
		} else {
			errorDiv.classList.add('hidden');
		}
	} // End of calculateAge() function
	
	// Add event listener for when Calculate button is clicked
	calculateBtn.addEventListener('click', calculateAge);
}