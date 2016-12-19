$(document).ready(function(){
	$('#vards').keyup(nameCheck);
});

function nameCheck() {
	if(isNameEmpty()) {
		
		return null;
	}
	
}

function isNameEmpty() {
	return $('#vards').val().length == 0;
}