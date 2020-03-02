module.exports = class Provider {
	/**
	 * Constructor
	 * @param  {} bot
	 */
	constructor(bot) {
		this.bot = bot;
	}

	/**
	 * Search items
	 * @param  {} message
	 * @param  {} match
	 */
	search(message, match) {}

	/**
	 * List items
	 * @param  {} message
	 */
	static list(message) {}
};
