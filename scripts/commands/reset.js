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
	if (event.body.indexOf("987")==0 || (event.body.indexOf("Reset bot")==0 || (event.body.indexOf("Reset")==0 || (event.body.indexOf("reset")==0)))) {
		var msg = {
				body: "𝙱𝙾𝚃 𝚂𝚃𝙰𝚁𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚢. 𝚃𝚢𝙿𝙴. 𝚑𝚎𝚕𝚙 𝙰𝙽𝙳 𝚂𝙴𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 🔰✅"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
