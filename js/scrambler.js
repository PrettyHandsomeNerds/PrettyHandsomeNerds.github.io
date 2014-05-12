
function scrambler(words) {
	var split = words.split(" ");
	var finalText = "";
	for(var i = 0; i < split.length; i++) {
	  	var firstChar = split[i].substr(0,1);
	    var lastChar = split[i].substr(split[i].length - 1);
	    var inbetween = split[i].substr(1, split[i].length - 2);

	    if (inbetween && split[i].length > 3) {
	    	scrambled = firstChar + scram(inbetween) + lastChar;
	    }
	    else if (split[i].length == 3)
	    {
	    	scrambled = lastChar + inbetween + firstChar;
	    }
	    else if (split[i].length == 2)
	    {
	    	scrambled = firstChar + lastChar;
	    }
	    else
	    {
	    	scrambled = firstChar;
	    }

	    finalText += scrambled + " ";
	}

	return finalText
}


function scram(inbetween) {
	var org = inbetween;
	var scram = inbetween.split('').sort(function(){return 0.5-Math.random()}).join('');

	while (scram == org) {
		scram = inbetween.split('').sort(function(){return 0.5-Math.random()}).join('');
	}
	return scram;
}