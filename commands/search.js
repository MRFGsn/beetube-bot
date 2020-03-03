/*
 * Handle "/search [provider] [whatever] -[flag]"
 */
module.exports = bot => (message, match) => {
	// console.log(match.groups);
	const chatId = message.chat.id;
	bot.sendChatAction(chatId, "typing");
	bot.sendMessage(chatId, "This feature will be available soon \u{1F6A7}", {
		parse_mode: "Markdown",
	});
};
