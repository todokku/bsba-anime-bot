const Composer = require('telegraf/composer')
const composer = new Composer()
const { onlyPrivate } = require('../middlewares')

composer.command('about',
  onlyPrivate,
  Composer.reply(`I'm <a href="https://bsba.gq">BSBA</a> website bot.
For now, I can search for torrents on <a href="https://${process.env.HOST}">${process.env.HOST}</a> (＾◡＾)っ.
More features will arrive soon! ( ͡~ ͜ʖ ͡°)

I'm still in beta, so please be patient! ( ﾉ ﾟｰﾟ)ﾉ

My source code at <a href="https://github.com/sakhib-orzklv/bsba-bot">github</a>`, {
    parse_mode: 'HTML'
  })
)

module.exports = app => {
  app.use(composer.middleware())
}
