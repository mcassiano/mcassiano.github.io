function registerClick(socialNetwork) {
	ga('send', 'event', 'button', 'social', socialNetwork);
	return true;
}