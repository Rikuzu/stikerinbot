let fetch = require('node-fetch')
let axios = require('axios')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan link!`
  await m.reply(wait)
  let info = await fetch(global.API('lolhum', '/api/nekopoi', { url: text }, 'apikey'))
  if (!info.ok) throw await info.text()
  if (!info.ok) throw `Link tidak valid!`
  await axios(global.API('lolhum', '/api/nekopoi', {url: text}, 'apikey'))
  	              .then(({data}) => {
     	           let { thumb, sinopsis, anime, producers, duration, size, link } = data.result
    				ini_txt = `Title : ${anime}\n`
                    ini_txt += `Porducers : ${producers}\n`
                    ini_txt += `Duration : ${duration}\n`
                    ini_txt += `Size : ${size}\n`
                    ini_txt += `Sinopsis : ${sinopsis}\n`
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_txt += `\n*Dont forget to donate for support Atena Bot*`
                    let wm = "〔 Nekopoi 〕\n"
			conn.sendFile(m.chat, thumb, 'nekopoi.jpg', wm + ini_txt, m)
  	})
}
handler.help = ['nekopoi <link>']
handler.tags = ['anime']
handler.command = /^(nekopoi)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
//Credit: KhaelSan
//cuk credit gw jgn dihapus lah biar gw terkenal dikt:/