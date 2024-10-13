module.exports = {
  config: {
  name: "s",
  version: "1.0.0",
  permission: 2,
  credits: "🌺💥 🄻🄸🄺🄷🄾🄽 - 🄰🄷🄼🄴🄳 💥🌺",
  prefix: 'awto',
  description: "𝙷𝙾𝚈𝚃𝙾 𝚃𝚄𝙼𝙸 𝙽𝙾𝚈𝚃𝙾 𝙰𝚁 𝙺𝙴𝚆 𝙽𝙰",
  category: "without prefix",
  cooldowns: 5
},

start: async function({ nayan, args, events, Users, NAYAN }) {
  try {

  const axios = require("axios")
  const info = args.join(" ")
  const msg = info.split("-");
  const number = msg[0].trim();
  const limit = msg[1].trim();

  if (!info){
    NAYAN.react("❌")
    return nayan.reply(" Number & limit not found", events.threadID, events.messageID)
  }

  if (!number || !limit){
    NAYAN.react("❌")
    return nayan.reply("Number & limit not found", events.threadID, events.messageID)
  }

    NAYAN.react("⏳")

    const res = await axios.get(`http://5.9.12.94:15280/call?mobileNo=${number}&countryDialingCode=880`)

  const data = res.data.status
    if (data.error){
      NAYAN.react("🖕")
      return nayan.reply(data.error, events.threadID, events.messageID)

    }



  nayan.reply(data, events.threadID, events.messageID)

} catch (error){
    nayan.reply("Sms not send", events.threadID, events.messageID)
}
}
}
