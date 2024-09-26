const fs = require("fs");
module.exports = {
  config:{
	name: "intro",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "intro",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("😊")==0) {
		var msg = {
				body: "𝐒𝐄𝐈𝐊𝐇 𝐋𝐈𝐊𝐇𝐎𝐍 𝐀𝐇𝐌𝐄𝐃",
				attachment: fs.createReadStream(__dirname + `/Likhon/Intro.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
