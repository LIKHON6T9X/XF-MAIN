const fs = require("fs");
module.exports.config = {
  name: "reset",
  version: "2.0.0",
  permission: 2,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("987")==0 || (event.body.indexOf(" ")==0 || (event.body.indexOf("Reset")==0 || (event.body.indexOf(" ")==0)))) {
		var msg = {
				body: "╭──────────────────╮\n🌺 𝙱𝙾𝚃 𝚁𝙴𝚂𝙴𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻🌺\n╰──────────────────╯"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
