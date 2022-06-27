export default {
  type: 'bubble',
  // hero: {
  //   type: 'image',
  //   url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
  //   size: 'full',
  //   aspectRatio: '3:1.5',
  //   aspectMode: 'cover'
  // },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl',
        color: '#f5f9fc'
      },
      {
        type: 'text',
        color: '#afd3e8',
        text: 'hello, world'
      }
    ],
    background: {
      type: 'linearGradient',
      angle: '0deg',
      startColor: '#15384C',
      endColor: '#15384C'
    }
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: 'WEBSITE',
          uri: 'https://www.taiwan.net.tw/m1.aspx?sNo=0001121'
        }
      }
    ],
    flex: 0,
    background: {
      type: 'linearGradient',
      angle: '0deg',
      startColor: '#15384C',
      endColor: '#15384C'
    }
  }
}
