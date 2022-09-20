import {JsonDB} from 'node-json-db'
import {Config} from 'node-json-db/dist/lib/JsonDBConfig.js'
import express from 'express'
import cors from 'cors'
import 'dotenv'

const app = express()
app.use(express.json({limit: '50mb'}))
const port = 900
const db = new JsonDB(new Config("shop", true, true, '/'));


const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

app.use(express.json())

app.get('/', async (req, res) => {
  const data = await db.getData("/")
  res.send(data)
})

app.get('/catalog', (req, res) => {
  db.getData("/catalog/").then(data => {
    res.send(data)
  })

})

app.post('/catalog', (req, res) => {
  const newGood = req.body
  if (newGood.name) {
    db.push("/catalog/" + newGood.name + '/', newGood).then(() => {
      db.getData("/catalog/").then(data => {
        res.send(data)
      })
    })

  } else {
    res.status(400).send("name is required")
  }
})

app.delete('/catalog/:name', (req, res) => {
  const removedItem = req.params.name
  db.delete("/catalog/" + removedItem).then(() => {
    db.getData("/catalog/").then(data => {
      res.send(data)
    })
  })
})

app.get('/posts', (req, res) => {
  db.getData("/posts/").then(data => {
    res.send(data)
  })
})

app.post('/posts', async (req, res) => {
  const newCheckout = req.body
  const oldCard = await db.getData("/posts/")
  if (typeof newCheckout.length === "number") {
    const newArray = oldCard.concat(newCheckout.filter(f => !oldCard.map(i => i.name).includes(f.name)))
    db.push("/posts", newArray, true).then(() => {
      db.getData("/posts/").then(data => {
        res.send(data)
      })
    })
  } else {
    db.push("/posts[]", newCheckout, true).then(() => {
      db.getData("/posts/").then(data => {
        res.send(data)
      })
    })
  }
})

app.put('/posts', async (req, res) => {
  const {id} = req.body
  const oldCard = await db.getData("/posts/")
  const newCard = oldCard.map(i => {
    if (i.id === id) {
      return req.body
    }
    return i
  })
  db.push("/posts", newCard, true).then(() => {
    db.getData("/posts/").then(data => {
      res.send(data)
    })
  })


})

app.delete('/posts/:key', (req, res) => {
  const removedItem = req.params.key
  db.getIndex("/posts", Number(removedItem), 'id').then(index => {
    db.delete(`/posts[${index}]`).then(() => {
      db.getData("/posts").then(data => {
        res.send(data)
      })
    })
  })
})

app.delete('/posts', async (req, res) => {
  await db.delete(`/posts`);
  await db.push("/posts", []);
  res.send("OK")
})

app.listen(port, () => {
  // const defaultData = db.getData("/")
  // if(!defaultData.catalog || !defaultData.posts) {
  //   db.push("/", {"catalog": {}, "posts": []});
  // }
  console.log(`Example app listening on port ${port}`)
})