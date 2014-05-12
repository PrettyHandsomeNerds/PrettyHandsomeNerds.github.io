if ( window.location.hash.length > 0 ) {
	var urlHash = decodeURI(window.location.hash).substring(1, window.location.hash.length).split('----'),
		string = urlHash[0],
		name = urlHash[1];

	$('#firstScram').fadeOut(0, function() {
		$('#scrambledText').text(string);
		$('#inputName').val(name);
		$('#main').addClass('blur');
		$('#secondScram').fadeIn(0);
	});
}

$('#scramble').on( "click", function() {
	var string = somethingClever($('#inputText').val()),
		name = $('#inputName').val();

	$('#firstScram').fadeOut(1000, function() {
		$('#scrambledText').text(string);
		$('#main').addClass('blur');
		$('#secondScram').fadeIn(1000);
	});

	setUrlHash(string, name)
});

$('#inputName').on('keyup', function() {
	var string = somethingClever($('#inputText').val()),
		name = $('#inputName').val();

	setUrlHash(string, name)
});

function setUrlHash(string, name) {
	var urlHash = encodeURI(string + '----' + name);
	window.ph_urlHash = urlHash;
	window.location.hash = urlHash;	
} 

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
        link: 'http://prettyhandsomenerds.github.io#' + window.ph_urlHash,
        picture: 'http://prettyhandsomenerds.github.io/img/book.png'
    } 
    fbShare(shareData);
});