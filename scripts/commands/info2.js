const fs = require("fs");
module.exports.config = {
  name: "info2",
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
	if (event.body.indexOf("999")==0 || (event.body.indexOf(" ")==0 || (event.body.indexOf("info2")==0 || (event.body.indexOf("Info2")==0)))) {
		var msg = {
				body: "╭──────────────────╮\n🌺 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐁𝐎𝐓 𝐆𝐑𝐎𝐔𝐏🌺\n╰──────────────────╯\n├─❯ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍-:\n🔴𝙽𝙰𝙼𝙴:           𝙻𝙸𝙺𝙷𝙾𝙽 𝚇𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈\n🟠𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽: 𝙸𝚂𝙻𝙰𝙼\n🟢𝙰𝙳𝚁𝙴𝚂𝚂:	 	𝙳𝙷𝙰𝙺𝙰\n🔵𝙶𝙴𝙽𝙳𝙴𝚁:		 𝙼𝙰𝙻𝙴\n🟣𝙰𝙶𝙴: 				18+\n🟢𝚁𝙴𝙻𝙰𝚃𝙸𝙾𝙽-𝚂𝙷𝙸𝙿: 𝚂𝙸𝙽𝙶𝙻𝙴\n🔴𝚆𝙾𝚁𝙺:			 𝚂𝚃𝚄𝙳𝚈\n⚪𝙶𝙼𝙰𝙸𝙻:			 𝙼𝙰𝚇𝙹𝙸𝙷𝙰𝙳59@𝙶𝙼𝙰𝙸𝙻.𝙲𝙾𝙼\n🔷𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺: https://www.facebook.com/likhonahmed01\n🔶𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿: 	+8801761838316\n💠𝚃𝙴𝙻𝙴𝙶𝚁𝙰𝙼: @𝙻𝙸𝙺𝙷𝙾𝙽𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈\n\n━━━━━━━━━━━━━━━━━━━━\n╭•┄┅════❁🌺❁════┅┄•╮\n   ├─❯𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍-:\n\n    𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 -: 𝚁𝙰𝙸𝙷𝙰𝙽 𝙱𝙾𝚃=/🩷🪽\n    𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗-: [  .  ]\n    𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍-: ʅιƙԋσɳ\n╰•┄┅════❁🌺❁════┅┄•╯"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
