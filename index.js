import 'dotenv/config'
import linebot from 'linebot'
import schedule from 'node-schedule'
import data from './command/data.js'

data.fetchData()
schedule.scheduleJob('0 0 * * *', () => {
  data.fetchData()
})

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  if (data.attractions.length === 0) {
    event.reply('資料讀取中，請稍後再試')
  } else if (event.message.type === 'text') {
    if (event.message.text == '推薦景點') {
      data.replyAttractions2(event)
    } else if (event.message.text == '私房景點') {
      data.replyAttractions4(event)
    } else if (event.message.text == '熱門景點') {
      data.replyTop10Attractions(event)
    }
    else if (event.message.text == '更多景點') {
      data.replyAttractions3(event)
    }
    else {
      event.reply('可輸入 熱門景點 或 推薦景點 或是 更多景點 私房景點 作為選擇喔~')
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動123456')
})
