$('#scramble').on( "click", function() {
	var string = $('#inputText').val();

	$('#firstScram').fadeOut(1000, function() {
		$('#scrambledText').text(somethingClever(string));
		$('#main').addClass('blur');
		$('#secondScram').fadeIn(1000);
	});

	var urlHash = encodeURI(string);
	window.ph_string = urlHash;
	window.location.hash = urlHash;	
});

$('#inputText').focus(function() {
	$(this).val('');
}).blur(function() {
	if($(this).val() == '') {
		$(this).val('Input text to be scrambled here');
	}
});

$(document).on('click', '#share-button', function() {
    var shareData = {
        name: 'Pretty Handsome Scramble',
        caption: '',
        description: 'In the world of Pretty Handsome Nerds things are often upside down, but always make sense. That is why we created a Pretty Handsome Scramble - an ultimate tool for future communication that‚ we hope, will become a language one day. A Pretty Handsome Language, that is.',
        link: 'http://prettyhandsomenerds.github.io#' + window.ph_string,
        picture: 'http://prettyhandsomenerds.github.io/img/book.png'
    } 
    fbShare(shareData);
});