const API = require("./index")

async function uwu() {
    await API.get.bot("634561188822384656").then(result => console.log(result))
}

uwu()