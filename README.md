# centralbl.js
 An API Wrapper for https://tcbl.glitch.me/

 **Posting Bot Stats coming soon**

## How to use
```javascript
const API = require("centralbl.js")

async function uwu() {

 //promise with async/await
 const Result = await API.get.bot("634561188822384656")
 console.log(Result)
 
 //promise with then/catch
 API.get("634561188822384656").then(res => {
  console.log(res)
 })
}
uwu()
```

Result:
```javascript
//{
//    "msg": "Sucessfull connection.",
//    "code": 200,
//    "id": "634561188822384656",
//    "owner": "251143265271808001",
//    "owners": [],
//    "library": "discord.js",
//    "monthlyUpvotes": 2,
//    "totalUpvotes": 2,
//   "website": "https://recreatebot.glitch.me",
//    "votes": [
//        {
//            "timestamp": 1591283926118,
//            "id": "251143265271808001"
//        }
//    ],
//    "githubUrl": "none",
//    "supportServerInvite": "https://discord.gg/zUnqUyP",
//    "prefix": "re! [can be changed]",
//    "vanityUrl": null,
//    "inviteUrl": "https://discordapp.com/api/oauth2/authorize?client_id=634561188822384656&permissions=0&scope=bot",
//    "tags": [
//        "Fun",
//        "Leveling",
//        "Utility"
//    ],
//    "shardID": 0,
//    "serverCount": 0,
//    "shardCount": 0
//}
```