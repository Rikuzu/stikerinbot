let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${this.ucapan()}

${user.banned ? 'kamu dibanned' : `Nomor ini adalah salah satu bot WhatsApp, bot yang diambil dari stikerin lalu diubah dikit oleh owner Khael\nJika berminat dan ingin bot ini masuk ke grup kalian chat owner Khael => wa.me/32460222094?text=bang+add+botnya+ke+grup+gue+dong+nanti+gw+topup+in (Gratis!!)`}
`.trim(), watermark, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? ',owner' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
