// Budayakan membaca NGENTOT || Important to read MOTHERFUCKER
// ------------------------------------------------------------------------ \\
// Source Code by @stikerin || thanks to @Nurutomo - @arriefb & others contributors
// This Source code has recode by me @Khael
// Follow my Social Media: @khaelll._ (Instagram) & Khael-san (Facebook)
// U can use my Source Code or take plugins but don't forget to put my name!
// Last, use u'r APIkey AssHole!!!
// This script is more towards WhatsApp bot that run on Heroku or the web so on
// ------------------------------------------------------------------------ \\

let fs = require('fs')
let chalk = require('chalk')

global.owner = ['6282211984550']

global.APIs = { // API Prefix
	amel: 'https://melcanz.com',
	bx: 'https://bx-hunter.herokuapp.com',
	rey: 'https://server-api-rey.herokuapp.com',
	dhnjing: 'https://dhnjing.xyz',
	hardianto: 'https://hardianto-chan.herokuapp.com',
	neoxr: 'https://api.neoxr.eu.org',
	nrtm: 'https://nurutomo.herokuapp.com',
	pencarikode: 'https://pencarikode.xyz',
	waifupics: 'https://api.waifu.pics',
	xteam: 'https://api.xteam.xyz',
	zeks: 'https://api.zeks.me',
	leys: 'https://leyscoders-api.herokuapp.com',
	dap: 'https://api.dapuhy.xyz',
	lolhum: 'https://api.lolhuman.xyz',
}
global.APIKeys = { // put your APIkey here
  'https://melcanz.com': 'trial',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'cd6537ea8548c561', // Don't stole my Apikey AssHole!! register on the website right away!
  'https://api.zeks.xyz': 'ShiroNeko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.dapuhy.xyz': 'Kontolodon', // backup 'Dappangentot' || Don't stole my Apikey AssHole!! register on the website right away!
  'https://api.lolhuman.xyz': 'NgentotRusa',
}

// Sticker WM
global.packname = 'Made by ♥️ with Agil'
global.author = 'I hope u are fine'

global.watermark = '© Agil Ussani Rahman'
global.wm = '© Agill'
global.wait = '```Waitt```'
global.eror = '*Mungkin ada yang error*'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'Hampir benar'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
