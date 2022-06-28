import data from '../command/data.js'
export default  {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "image",
        "url": `{data.attractions[0]}`,
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "2:3",
        "gravity": "top"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": `{data.attractions[1]}`,
                "size": "xl",
                "color": "#ffffff",
                "weight": "bold"
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "contents": [
              {
                "type": "text",
                "text": `{data.attractions[2]`,
                "color": "#ebebeb",
                "size": "sm",
                "flex": 0
              }
            ],
            "spacing": "lg"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "filler"
                  },
                  // {
                  //   "type": "icon",
                  //   "url": "https://www.kindpng.com/picc/m/229-2294863_website-icon-png-white-transparent-png.png",
                  //   "color": "#ffffff",
                  // },
                  {
                    "type": "text",
                    "text": "WEBSITE",
                    "color": "#ffffff",
                    "flex": 0,
                    "offsetTop": "-2px",
                    "action": {
                      "type": "uri",
                      "label": "action",
                      "uri": "https://www.taiwan.net.tw/m1.aspx?sNo=0001121"
                    }
                  },
                  {
                    "type": "filler"
                  }
                ],
                "spacing": "sm"
              },
              {
                "type": "filler"
              }
            ],
            "borderWidth": "1px",
            "cornerRadius": "4px",
            "spacing": "sm",
            "borderColor": "#ffffff",
            "margin": "xxl",
            "height": "40px"
          }
        ],
        "position": "absolute",
        "offsetBottom": "0px",
        "offsetStart": "0px",
        "offsetEnd": "0px",
        "backgroundColor": "#03303Acc",
        "paddingAll": "20px",
        "paddingTop": "18px"
      }
    ],
    "paddingAll": "0px"
  }
}
