import axios from 'axios'
import cheerio from 'cheerio'
import template from '../template/template.js'
import allTemplate from '../template/all-template.js'
import tTemplate from '../template/t-template.js'
// import { url } from 'inspector'
import fs from 'fs'

const attractions = []
const fetchData = async () => {
  try {
    const { data } = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0001121')
    const $ = cheerio.load(data)
    $('ul .card').each(function () {
      attractions.push(
        // console.log($(this).find('img').find('data-src'))
        [
          $(this).find('img').attr('data-src'),
          $(this).find('.card-title').text(),
          $(this).find('.hashtag').text()
        ]
      )
    })
  } catch (error) {
    console.log(error)
  }
  // console.log(attractions)
}

// const replyTop10Attractions = (event) => {
//   // console.log(attractions)
//   const bubbles = attractions.map(attraction => {
//     const bubble = JSON.parse(JSON.stringify(tTemplate))
//     // console.log(attraction[0])
//     bubble.hero.url = attraction[0]
//     bubble.body.contents[0].text = attraction[1]
//     bubble.body.contents[1].text = attraction[2]
//     return bubble
//   })
//   fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
//   event.reply([
//     {
//       type: 'flex',
//       altText: '熱門景點',
//       contents: {
//         type: 'carousel',
//         contents: bubbles.slice(0,10)
//       }
//     }
//   ])
// }
const replyTop10Attractions = (event) => {
  console.log(attractions)
  const bubbles = attractions.map(attraction => {
    const bubble = JSON.parse(JSON.stringify(allTemplate))
    // console.log(attraction[0])
    bubble.body.contents[0].url = attraction[0]
    bubble.body.contents[1].contents[0].contents[0].text = attraction[1]
    bubble.body.contents[1].contents[1].contents[0].text = attraction[2]
    return bubble
  })
  fs.writeFileSync('try-bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '熱門景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(0, 10)
      }
    }
  ])
}

const replyAttractions2 = (event) => {
  // console.log(attractions)
  const bubbles = attractions.map(attraction => {
    const bubble = JSON.parse(JSON.stringify(allTemplate))
    // console.log(attraction[0])
    bubble.body.contents[0].url = attraction[0]
    bubble.body.contents[1].contents[0].contents[0].text = attraction[1]
    bubble.body.contents[1].contents[1].contents[0].text = attraction[2]
    return bubble
  })
  fs.writeFileSync('bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '推薦景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(10, 15)
      }
    },
    {
      type: 'flex',
      altText: '推薦景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(15, 20)
      }
    },
    {
      type: 'flex',
      altText: '推薦景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(20, 25)
      }
    }
  ])
}

const replyAttractions3 = (event) => {
  // console.log(attractions)
  const contents = attractions.map(attraction => {
    const content = JSON.parse(JSON.stringify(template))
    // console.log(attraction[0])
    // content.hero.url = attraction[0]
    content.body.contents[0].text = attraction[1]
    content.body.contents[1].text = attraction[2]
    return content
  })
  fs.writeFileSync('33-contents.json', JSON.stringify(contents, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: contents.slice(25, 31)
      }
    },
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: contents.slice(31, 37)
      }
    },
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: contents.slice(37, 43)
      }
    },
    {
      type: 'flex',
      altText: '更多景點',
      contents: {
        type: 'carousel',
        contents: contents.slice(43, 48)
      }
    }
  ])
}

const replyAttractions4 = (event) => {
  // console.log(attractions)
  const bubbles = attractions.map(attraction => {
    const bubble = JSON.parse(JSON.stringify(allTemplate))
    // bubble.hero.url = attraction[0]
    // console.log(attraction[1])
    bubble.body.contents[0].url = attraction[0]
    bubble.body.contents[1].contents[0].contents[0].text = attraction[1]
    bubble.body.contents[1].contents[1].contents[0].text = attraction[2]
    return bubble
  })
  fs.writeFileSync('3-bubbles.json', JSON.stringify(bubbles, null, 2))
  event.reply([
    {
      type: 'flex',
      altText: '私房景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(48, 53)
      }
    },
    {
      type: 'flex',
      altText: '私房景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(53, 58)
      }
    },
    {
      type: 'flex',
      altText: '私房景點',
      contents: {
        type: 'carousel',
        contents: bubbles.slice(58, 63)
      }
    }
  ])
}

export default {
  fetchData,
  attractions,
  replyTop10Attractions,
  replyAttractions2,
  replyAttractions3,
  replyAttractions4
}
// try