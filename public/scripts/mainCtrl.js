window.myPostman = window.myPostman || {};

window.myPostman.controller = (function (){

	// dependencies
	var translations = window.myPostman.translations;
	var dataService = window.myPostman.dataService;
	var consts = window.myPostman.consts;
	if (!translations || !dataService || !consts) throw 'Dependencies not found; please verify that all dependencies are loaded prior to this script';
	

	// DOM elements
	var typeCombo = document.getElementById('typeSelect');
	var goBtn = document.getElementById('goBtn');
	var urlText = document.getElementById('urlText');
	var resultsText = document.getElementById('resultsText');
	
	function init(){
		initComboBox();
		initButton();
	}

		
	function initButton() {
		goBtn.innerHTML = translations['go'];
		goBtn.onclick = displayData;
	}

	function initComboBox() {
		for (var i = 0; i < consts.responseFormats.length; ++i) {
			var value = consts.responseFormats[i];
			var text = translations.responseFormats[value] || value;
			var option = document.createElement('option');
			option.value = value;
			option.text = text;
			typeCombo.appendChild(option);
		}

		function onFormatChange() {
			urlText.value = 'GET ' + dataService.getUrl(typeCombo.value);
		}

		typeCombo.onchange = onFormatChange;
		onFormatChange();	// first initalization 
	}

	function displayData(){
		var format = typeCombo.value;
		dataService.getData(format, function(response) {
			// TODO:  more info from the response here
			resultsText.innerHTML = "";
			var node = document.createTextNode(response);
			resultsText.appendChild(node);
			setHighlighting(format);
		});
	}

	function setHighlighting(format) {
		resultsText.className = 'language-' + consts.prismStylingFormats[format];
		Prism.highlightElement(resultsText);
	}

	return {
		init: init
	}
})();

window.myPostman.controller.init();