(function () {
	const showMenu = require('./components/MainMenu');
	const changeHeader = require('./components/Header');
	const loadCSS = require('./lib/loadCSS.js')

	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {
		loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
		showMenu.init();
		changeHeader.init();

	}
}())