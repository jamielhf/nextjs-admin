const cookieParser = require('cookie-parser')
const {
  parse
} = require('url')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser('4EqStMNyab8'));

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })