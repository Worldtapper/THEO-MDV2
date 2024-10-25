const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_38_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI1LFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDcVRpYkh1ZGN3NWRFY1NGcFR0c0U1UEVDK0tlZHJMU3pqSFpQSWRkbERrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvS1hDQU8xbVExaXFPSUhOdkpKUTZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMwMDY5ZTA4LTNmNTgtNGJjNi1hOTY2LWI5ZDYwYzg5ZTVkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyMzcsXG4gICAgICA2NyxcbiAgICAgIDU0LFxuICAgICAgNzksXG4gICAgICAxNDUsXG4gICAgICAxLFxuICAgICAgMjE4LFxuICAgICAgMTczLFxuICAgICAgMzEsXG4gICAgICAxNTMsXG4gICAgICAxNTgsXG4gICAgICAyMCxcbiAgICAgIDIwNixcbiAgICAgIDIxOCxcbiAgICAgIDQwLFxuICAgICAgMTU4LFxuICAgICAgMTYsXG4gICAgICAyMTYsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMjU1LFxuICAgICAgMjIyLFxuICAgICAgMjEwLFxuICAgICAgMTgwLFxuICAgICAgMjM4LFxuICAgICAgODIsXG4gICAgICAyMTUsXG4gICAgICAyNDUsXG4gICAgICAxMjIsXG4gICAgICA0OCxcbiAgICAgIDE5NyxcbiAgICAgIDE2OSxcbiAgICAgIDE2NixcbiAgICAgIDg3LFxuICAgICAgMTY2LFxuICAgICAgMTgwLFxuICAgICAgMzEsXG4gICAgICAxMTcsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSG5wUk1RbElidXVBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZMcW1DcHZTV29lejR0MEtOdDRHRVVuTGk2N2wwb0RZVGc0d09IbFA5UTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUtPUTcramFxbVRSUzlZK1V6eHp2cXQvYnRIMDNVVW9rUFh4K1ZDUUwxM25FQXBraHlMamZ0MytxU1JsaUI4emxqdFdvQWFxWjJnbDVqM2ZUT3QyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVjE4SEF3NnI4OEoyVzlLSFZ1UGErdUx6S3l2RU1RSEUvdFdLZHJmMys4TlZJRW9qTFVJSGdJbmp6Z0FzUmNjSkw1N1FveW8zaHN6RmVtYXJTYmZtQkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY2NTg3OTg3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5ODA2NjM0NjE5MDg0OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY2NTg3OTg3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5ODU2MjgxXG59Igp9" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
