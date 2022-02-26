let fetch = require('node-fetch')
let axios = require('axios')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!\n\ncontoh:\n.nekopoisearch isekai harem monogatari`
  await m.reply(wait)
  let info = await fetch(global.API('lolhum', '/api/nekopoisearch', { query: text }, 'apikey'))
  if (!info.ok) throw await info.text()
	let res = await axios(global.API('lolhum', '/api/nekopoisearch', {query: text}, 'apikey'))
					res = res.data.result
                    ini_txt = ""
                    for (var x of res) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    ini_txt += `\n*Dont forget to donate for support Atena Bot*`
                    let wm = "〔 Nekopoi Search〕\n"
			m.reply(wm + ini_txt)
	}
handler.help = ['nekopoisearch <link>']
handler.tags = ['anime']
handler.command = /^neko(search|poisearch)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
//Credit: KhaelSan
//cuk credit gw jgn dihapus lah biar gw terkenal dikt:/