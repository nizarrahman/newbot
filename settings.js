
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6281386945391'] //ur owner number
global.ownername = "Nizar" //ur owner name
global.ytname = "Website: https://www.nizarr.my.id" //ur yt chanel name
global.socialm = "Insta: https://instagram.com/nizarrrahman.f_" //ur github or insta name
global.location = "Cianjur, Jawa Barat, Indonesia" //ur location

//bot bomdy 
global.ownernomer = "6281386945391" //ur number
global.premium = ['6281386945391'] //ur premium number
global.botname = '𝘽𝙤𝙩 𝙉𝙖𝙞 𝙎𝙩𝙤𝙧𝙚' //ur bot name
global.linkz = "https://chat.whatsapp.com/BWHiCcMOZG39gYt1HCc2ue" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD6' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "𝘽𝙤𝙩 𝙉𝙖𝙞 𝙎𝙩𝙤𝙧𝙚\n\n\nA whatsapp bot developed by\nNizar Rahman\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6281386945391" //ur sticker watermark author
global.wm = "𝘽𝙤𝙩 𝙉𝙖𝙞 𝙎𝙩𝙤𝙧𝙚." //ur watermark

// Other
global.sessionName = 'Nizar'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Succes!',
    admin: 'Emang Lu Admin?!',
    botAdmin: 'Gw Bukan Admin Tod!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Khusus Grup!',
    private: 'Gunakan Di Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
