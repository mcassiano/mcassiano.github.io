$(document).ready(function() {
	$.getJSON("http://www.splashbase.co/api/v1/images/random", function(data) {
		$("body").css("background-image", "url(" + data.url + ") no-repeat");
		$("body").css("background-size", "100%");
	});
});