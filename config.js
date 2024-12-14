//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2347077816250";
global.sudo = process.env.SUDO || "2347077816250";
global.owner = process.env.OWNER_NUMBER || "2347077816250";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lQL05pMk45UkgwVmRBb2ptbzJ1eU9JM3NKUUlpTTBnbnllVUN3Yzgyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm9kTmk0K21Ja0J1WGMwcUwwdjRLdDZ1WFUyMVB0OS9NN0RLSDNCU1l3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RklDK0YrUU05SUpCcjZCRzRBTVN0Y2tIcTJ6SjJMbkxkdjllbkpBUW4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZFNnK29JUTc0NTBZSUxTb1p2ckZDaW1UMmlmczFyenZYVjJabmRrQkJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MZ0Y3bFJCZWE4MkhIOS81WDEvZHFURjE3Uzd4cWJRcjhXZnVTQXR4V0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ2UWF2bWszVndrdGRCamFMdE9qcHQ4cG50SENOMlVDZHdaTFowTnZZeWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJxZzVLQ0NHTmplTHRZckYzcjJGYi83d1hkcHV6aSswY3dWWXhydnZXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWkybnBUQU10d2ZlQUx0bzZXVGVWZExXWHdRRTZ5MlNuTUFDQWpLazlDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpRUHEyQ3JpOHdWZFc0Zy9vZkhyL1RFUFNNYkkwTGNYQUZyUWhJK3pZREtmMTY4d3ZMUUFJN01XRkVMRGlVUEtodDk2OUVwdCsvenRJejhadUxkRWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJWUGJJSlc1c1ZGak13b1ZWZjZzVzRtWU9Hd3dCVnpqNWxBbTNjWlNoRFlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzc4MTYyNTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjVGMDkzRjI5ODE4QjY4N0RBNUZEQUNFMkRGRDUwRTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDE2NDY3Mn1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOG9Jdjc4ZVhTVGlVekxzaEl0V2RydyIsInBob25lSWQiOiI3OGNiOWUwNi1hM2I1LTQ3NTctYWQ4Yi04NGZhM2ZlMDlkMGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0ExOE1YbVMvRW1NZk1ZWXZ0QjZ6U0l4TWZvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlmRlpNcWFNYkIzUk1sL1lNc0hDNEZwOUM1cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZV1kzTjlTMiIsIm1lIjp7ImlkIjoiMjM0NzA3NzgxNjI1MDo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNoYXJwIEJsYWRlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdk14ZUFGRUsrQjlib0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWQ2pHL0Q5TExPbFk3a3RMN0hESGloYjd0eXdVelVjYm93SEk2eGc5WlVVPSIsImFjY291bnRTaWduYXR1cmUiOiI1RWpMb1J1VHNEbEVFM1VhSFdtL09ZMUVyOVNwTDZNL3JhWS9RRDZWKzdlWEw3WDdWaEo1cW9VOThDcUpLckhWeEtiUG96d3NSM0VTNUlhc1BBMGpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTmhmVm45VVJuVEQwVzdQbzRJN2NGTHI3eUJjMVZ2L3FFenlCQ1RrU0NBcFpsRXFmdUxsYTVCeU1KelFsTjlKdzlaZ0JDL1FHYk5vN0F6NURCbmo3aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc3ODE2MjUwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlFveHZ3L1N5enBXTzVMUyt4d3g0b1crN2NzRk0xSEc2TUJ5T3NZUFdWRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDE2NDY2OX0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
