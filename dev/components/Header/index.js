var changeHeader = (function () {
	const header = document.querySelector('.Header');
	
	function suscribeEvents () {
		header.addEventListener('scroll',onScroll);
	}

	function onScroll () {
		if(window.scrollY >= 214){
			headerclassList.toggle('Header--light');
		} else{
			headerclassList.toggle('Header--light');
		}

		// menu.classList.toggle('MainMenu-list--show')
	}

	return {
		init : function () {
			suscribeEvents();	
		} 
	};	
})();

module.exports = changeHeader;