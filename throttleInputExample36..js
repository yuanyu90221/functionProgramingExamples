function (clicks, saveData, name) {
	return clicks.
		// TODO: Throttle the clicks so that it only happens every one second
		throttleTime(1000).
		concatMap(function () {
			return saveData(name);
		});
}