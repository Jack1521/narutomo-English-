let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' is not listed in the message list`
    delete msgs[text]
    m.reply(`Successfully deleted message in message list with name '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/

module.exports = handler