

	function OnFocusInput(x,y) {

		var x = document.querySelectorAll('input');
    	var i;
    	for(i=0; i<x.length; i++)
			{   
				x[i].parentNode.style.backgroundColor= "#d2d2d2";
	 		}
	 		var y = document.activeElement.style.backgroundColor= "#aaf7f4";
	 		var y = document.activeElement.style.width= "100%";
	



// var form = document.getElementById("form");
// form.addEventListener("focus", function( event ) {
//  event.target.style.background = "pink";    
// }, true);
	
	}
			
	
