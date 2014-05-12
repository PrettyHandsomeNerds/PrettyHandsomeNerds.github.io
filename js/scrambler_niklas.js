function somethingClever(string) {
	var arr = string.split(' '),
		result = new Array();
	$.each(arr, function(index, word) {
		var len = word.length;
		if ( len > 3 ) {
			var newWord = word,
				i = 0;
			while (word == newWord && i < 5) {
				newWord = word.substring(0, 1) + word.substring(1, len-1).split('').sort(function(){return 0.5-Math.random()}).join('') + word.substring(len-1);
				i++;
			}
			result.push(newWord)
		} else if ( len < 4 && len != 1 ) {
			if ( Math.random() > 0.5 ) {
				result.push(word.substring(0, 1) + word.substring(1, len-1) + word.substring(len-1));
			} else {
				result.push(word.substring(len-1) + word.substring(1, len-1) + word.substring(0, 1));
			}
		} else {
			result.push(word);
		}
	});
	return result.join(' ');
}