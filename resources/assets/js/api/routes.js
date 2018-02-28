/**
 * This is a class that handles the API routes of the app.
 */

export default class {
	/**
	 * Get all web and app URLs.
	 * @return {Object}
	 */
	getRoutes() {
		return {
			notes: 'api/notes/',
			addNote: 'api/addNote',
			deleteNote: 'api/deleteNote/',
			updateNote: 'api/updateNote/',
			addSource: 'api/addSource'
		}
	}

	/**
	 * Prepare the absolute URL of a given path.
	 * Use a global JavaScript variable for the base URL.
	 * @param {String} field
	 * @return {String}
	 */
	prepareUrl(path) {
		if(window.baseUrl) {
			return window.baseUrl + path;			
		}

		return path;
	}

	/**
	 * Get an absolute URL from all routes based on a given path
	 * @param {String} path
	 * @param {String} type (web|api)
	 * @return {String}
	 */
	getUrl(path) {
		let routes = this.getRoutes();

		if(path && routes.hasOwnProperty([path])) {
			return this.prepareUrl(routes[path]);
		}

		return this.prepareUrl('not-found');
	}
}