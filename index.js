const express = require('express');
const app = express();

const waifuData = [
  {
    "waifuname": "makima",
    "link": "https://i.imgur.com/V2XN8TF.jpg",
    "stars": "☆☆☆☆",
    "possibility": "20%%",
    "price": "310",
    "waifuid": "8631"
  },
  {
    "waifuname": "miko",
    "link": "https://i.imgur.com/ZRl5rLg.jpg",
    "stars": "☆☆☆☆☆",
    "possibility": "10%",
    "price": "390",
    "waifuid": "763"
  },
  {
    "waifuname": "asuka",
    "link": "https://i.imgur.com/D7nSozj.jpg",
    "stars": "☆",
    "possibility": "80%",
    "price": "98",
    "waifuid": "35184"
  },
  {
    "waifuname": "marin kitagawa",
    "link": "https://i.imgur.com/OoabntJ.jpg",
    "stars": "☆☆☆☆",
    "possibility ": "20%",
    "price": "310",
    "waifuid": "9087"
  },
  {
    "waifuname": "rem",
    "link": "https://i.ibb.co/m5fH9sL/image.jpg",
    "stars": "☆☆☆☆☆",
    "possibility": "10%%",
    "price": "390",
    "waifuid": "589"
  },
  {
    "waifuname": "ayumi",
    "link": "https://i.imgur.com/uJkqIGV.jpg",
    "stars": "☆",
    "possibility": "80%",
    "price": "98",
    "waifuid": "94721"
  },
  {
    "waifuname": "sakura",
    "link": "https://i.imgur.com/00Z79OQ.jpg",
    "stars": "☆☆",
    "possibility": "50%%",
    "price": "130",
    "waifuid": "9801"
  },
  {
    "waifuname": "hinata",
    "link": "https://i.imgur.com/Wq3YfOn.jpg",
    "stars": "☆☆",
    "possibility": "50%%",
    "price": "130",
    "waifuid": "7980"
  },
  {
    "waifuname": "anya",
    "link": "https://i.imgur.com/K150gL8.jpg",
    "stars": "☆",
    "possibility": "80%",
    "price": "98",
    "waifuid": "26791"
  },
  {
    "waifuname": "nezuko",
    "link": "https://i.imgur.com/QGIsWPd.jpg",
    "stars": "☆",
    "possibility": "80%%",
    "price": "98",
    "waifuid": "1000"
  },
  {
    "waifuname": "hu tao",
    "link": "https://i.imgur.com/QGIsWPd.jpg",
    "stars": "☆☆",
    "possibility": "50%%",
    "price": "130",
    "waifuid": "4136"
  },
  {
    "waifuname": "aqua",
    "link": "https://i.imgur.com/WgVyk9K.jpghttps://i.imgur.com/PMXE0kP.jpg",
    "stars": "☆☆☆",
    "possibility": "30%%",
    "price": "260",
    "waifuid": "991"
  },
  {
    "waifuname": "miku nakano",
    "link": "https://i.imgur.com/4L6SawB.jpg",
    "stars": "☆☆",
    "possibility": "50%%",
    "price": "130",
    "waifuid": "7610"
  },
  {
    "waifuname": "elaina",
    "link": "https://i.imgur.com/PMXE0kP.jpg",
    "stars": "☆☆☆",
    "possibility": "30%%",
    "price": "260",
    "waifuid": "451"
  },
  {
    "waifuname": "momoka",
    "link": "https://i.imgur.com/I6NUTBk.jpg",
    "stars": "☆",
    "possibility": "80%",
    "price": "98",
    "waifuid": "77110"
  }
];

app.get('/', (req, res) => {
  res.json(waifuData);
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});