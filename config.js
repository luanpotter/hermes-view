define(function () {

	// @if ENV == 'dev'
	return {
		withCredentials: false,
		mocks: false,
	};
	// @endif

	// @if ENV == 'test'
	return {
		withCredentials: true,
		mocks: true,
	};
	// @endif

	// @if ENV == 'pi'
	return {
		withCredentials: true,
		mocks: false,
	};
	// @endif
});
