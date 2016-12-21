function (keyPresses, isAlpha) {

	return keyPresses.
		map(function (e) { return String.fromCharCode(e.keyCode); }).
		filter(function (character) { return isAlpha(character); }).
		distinctUntilChanged().
		scan(function (stringSoFar, character) {
			return stringSoFar + character;
		}, '');
}
  