const mineflayer = require('mineflayer')

function connect() {
  const bot = mineflayer.createBot({
    host: 'sultanboxx.skymc.io',
    port: 25565,
    username: 'AFK_Bot',
    version: '1.21',
    auth: 'offline'
  })

  bot.once('spawn', () => {
    console.log('Bot sunucuya girdi!')

    setInterval(() => {
      bot.look(bot.entity.yaw + 1, bot.entity.pitch, true)
    }, 10000)
  })

  bot.on('end', () => {
    console.log('Bağlantı kesildi. 10 saniye sonra tekrar bağlanıyor...')
    setTimeout(connect, 10000)
  })

  bot.on('error', err => {
    console.log('Hata:', err.message)
  })
}

connect()
