// 網站的圖片鎖住ㄌ
import axios from 'axios'
import cheerio from 'cheerio'
// import template from './template/template.js'
// import textTemplate from './template/text-template.js'
import tTemplate from '../template/t-template.js'
// import { url } from 'inspector'
import fs from 'fs'

const attractions = []
const fetchData = async () => {
  try {
    const { data } = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0001121')
    const $ = cheerio.load(data)
    $('ul .card-info').each(function () {
      attractions.push(
        // $(this).text()
        [
          $(this).find('.card-title').text(),
          $(this).find('.hashtag').text()
        ]
      )
    })
  } catch (error) {
    console.log(error)
  }
}

const replyAttractions = (event) => {
  console.log(attractions)
  const bubbles = attractions.map(attraction => {
    const bubble = JSON.parse(JSON.stringify(tTemplate))
    console.log(attraction[0])
    bubble.body.contents[0].text = attraction[0]
    bubble.body.contents[1].text = attraction[1]
    return bubble
  })
  fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 10)
      }
    },
    {
      type: 'flex',
      altText: '景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(10, 20)
      }
    },
    {
      type: 'flex',
      altText: '景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(20, 30)
      }
    }
  ])
}

const replyAttractions2 = (event) => {
  console.log(attractions)
  const bubbles = attractions.map(attraction => {
    const bubble = JSON.parse(JSON.stringify(tTemplate))
    console.log(attraction[0])
    bubble.body.contents[0].text = attraction[0]
    bubble.body.contents[1].text = attraction[1]
    return bubble
  })
  fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(30, 40)
      }
    },
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(40, 50)
      }
    },
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(50, 59)
      }
    }
  ])
}

const replyAttractions3 = (event) => {
  console.log(attractions)
  const bubbles = attractions.map(attraction => {
    const bubble = JSON.parse(JSON.stringify(tTemplate))
    // bubble.hero.url = attraction[0]
    console.log(attraction[0])
    bubble.body.contents[0].text = attraction[0]
    bubble.body.contents[1].text = attraction[1]
    return bubble
  })
  fs.writeFileSync('3-bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '秘密景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(59, 64)
      }
    }
  ])
}

export default {
  fetchData,
  attractions,
  replyAttractions,
  replyAttractions2,
  replyAttractions3
}
