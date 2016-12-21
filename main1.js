// Wait till a button is clicked
    document.getElementById("submitBtn").addEventListener("click", function(){
//Collect Data
	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var city = document.getElementById('city').value;

//Do something with Data

	var message = "My name is " + name + " " + " I'm  " + age + " years old, and I live in " + city + "."
	//Display Data

	document.getElementById("qa").innerHTML = message;	
