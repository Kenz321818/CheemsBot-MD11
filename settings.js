//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: gapunya" //ur yt chanel name
global.socialm = "GitHub: gapunya" //ur github or insta name
global.location = "Indonesia, Jawa Barat, Pangandaran" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '6285351978603' //ur owner number
global.ownername = '自分で見つけてください' //ur owner name
global.websitex = "-"
global.wagc = "-"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'cari sendiri' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+6285351978603"
global.creator = "6285351978603@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285351978603"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
