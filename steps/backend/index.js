import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import express from 'express'
import cors from 'cors'
import 'dotenv'

const app = express()
app.use(express.json({limit: '50mb'}))
const port = 900
const db = new JsonDB(new Config("shop", true, true, '/'));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send(db.getData("/"))
})

app.get('/catalog', (req, res) => {
  res.send(db.getData("/catalog/"))
})

app.post('/catalog', (req, res) => {
  const newGood = req.body
  if(newGood.name) {
    db.push("/catalog/" + newGood.name + '/', newGood);
    res.send(db.getData("/catalog/"))
  } else {
    res.status(400).send("name is required")
  }
})

app.delete('/catalog/:name', (req, res) => {
  const removedItem = req.params.name
  db.delete("/catalog/" + removedItem)
  res.send(db.getData("/catalog/"))
})

app.get('/posts', (req, res) => {
  res.send(db.getData("/posts/"))
})

app.post('/posts', (req, res) => {
  const newCheckout = req.body
  const oldCard = db.getData("/posts/")

  if(typeof newCheckout.length === "number") {

    const newArray = oldCard.concat(newCheckout.filter(f => !oldCard.map(i => i.name).includes(f.name)))
    db.push("/posts", newArray, true);
  } else {

    db.push("/posts[]", newCheckout, true);
  }
  res.send(db.getData("/posts/"))
})

app.put('/posts', (req, res) => {
  const {name, amount} = req.body
  const oldCard = db.getData("/posts/")
  const newCard = oldCard.map(i => {
    if(i.name === name) {
      i.amount = i.amount + amount
    }
    return i
  })
  db.push("/posts", newCard, true);

  res.send(db.getData("/posts/"))
})

app.delete('/posts/:key', (req, res) => {
  const removedItem = req.params.key
  const index = db.getIndex("/posts", Number(removedItem), 'id' )
  db.delete(`/posts[${index}]`);
  res.send(db.getData("/posts"))
})

app.delete('/posts', (req, res) => {
  db.delete(`/posts`);
  db.push("/posts", []);
  res.send("OK")
})

app.listen(port, () => {
  const defaultData = db.getData("/")
  if(!defaultData.catalog || !defaultData.posts) {
    db.push("/", {"catalog": {}, "posts": []});
  }
  console.log(`Example app listening on port ${port}`)
})