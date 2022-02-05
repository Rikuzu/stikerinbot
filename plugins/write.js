let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    let img = 'https://telegra.ph/file/5b94da0fc1fafa4aa1be7.jpg'
    if (!args[0]) return m.reply(`Harap masukkan tujuan dan nama file\nContoh: ${ usedPrefix + command } plugins/join.js`)
    require('fs').writeFileSync(`./${args[0]}`, m.quoted.text)
    conn.sendButtonLoc(m.chat, await(await fetch(img)).buffer(), `Berhasil menyimpan sebagai ${args[0]}`, watermark, 'Menu', '.?', m)
}
handler.help = ['write']
handler.tags = ['owner']

handler.command = /^write$/i


handler.owner = true

module.exports = handler
