window.myPostman = window.myPostman || {};
window.myPostman.dataService = {
	getUrl: function(format) {
		return '/spaces?format=' + format;
	} ,
	getData: function(format, callback) {
		var url = this.getUrl(format);
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState !== XMLHttpRequest.DONE) return;
			if (httpRequest.status !== 200) {
				console.error('Error fetching data from server; status- ' + httpRequest.status);
			}

			// TODO: return other interesting things, like headers 
			callback(httpRequest.responseText);
		};

		httpRequest.open('GET', url);
		httpRequest.send();
	}
};