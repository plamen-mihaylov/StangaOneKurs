function OnFocusInput() {

	var x = document.querySelectorAll('input');

	for ( i=0; i < x.length; i++ ) {

		x[i].parentNode.style.backgroundColor= "#d2d2d2";

	}

	document.activeElement.style.backgroundColor= "#aaf7f4";
	document.activeElement.style.width= "100%";

// var form = document.getElementById("form");
// form.addEventListener("focus", function( event ) {
//  event.target.style.background = "pink";    
// }, true);


}


