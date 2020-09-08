const axios = require("axios")
const { version } = require("./package.json")

async function bot(id) {
    if(typeof id != "string") throw Error("ID Given was not a string");
    if(id.length != 18) throw Error("Invalid ID");
    if(isNaN(id)) throw Error("Invalid ID");

    const botresult = await axios.get(`https://tcbl.glitch.me/api/bot/${id}`)
    return botresult.data
}

async function user(id) {
    if(typeof id != "string") throw Error("ID Given was not a string");
    if(id.length != 18) throw Error("Invalid ID");
    if(isNaN(id)) throw Error("Invalid ID");

    const userresult = await axios.get(`https://tcbl.glitch.me/api/bot/${id}`)
    return userresult.data
}

module.exports = {
    get: {
        bot,
        user
    },
    version
}