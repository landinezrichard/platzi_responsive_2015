(function () {
	const showMenu = require('./components/MainMenu');
	const changeHeader = require('./components/Header');

	document.addEventListener('DOMContentLoaded', onDOMload);

	function onDOMload() {
		showMenu.init();
		changeHeader.init();
	}
}())