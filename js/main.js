$('#scramble').on( "click", function() {
	var string = $('#inputText').val();

	$('#firstScram').fadeOut(1000, function() {
		$('#scrambledText').text(somethingClever(string));
		$('#main').addClass('blur');
		$('#secondScram').fadeIn(1000);
	});


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
        name: 'Word scrambler',
        caption: '-',
        description: '-',
        link: 'http://prettyhandsomenerds.github.io/',
        picture: 'http://prettyhandsomenerds.github.io/img/book.png'
    } 
    fbShare(shareData);
});