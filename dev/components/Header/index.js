var changeHeader = (function () {
	/*Dependencia*/
	require('./optimizedScroll.js')

	const header = document.querySelector('.Header');
	const clase  = 'Header--light';
	let laTiene = false;
		
	function suscribeEvents () {		
		window.addEventListener("optimizedScroll", onScroll);
	}

	function onScroll () {
		let listaClases = header.classList;		

		if(window.scrollY >= 200){
			for(var i=0; i<listaClases.length; ++i){
			    if(listaClases[i] === clase){          
			       laTiene = true;  
			    }
			}
			if(!laTiene){
				listaClases.add(clase);
			}			
		} else{
			if(laTiene){
				listaClases.remove(clase);
				laTiene = false;
			}
		}
		
	}

	return {
		init : function () {
			suscribeEvents();	
		} 
	};	
})();

module.exports = changeHeader;