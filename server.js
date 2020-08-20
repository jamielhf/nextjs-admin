const cookieParser = require('cookie-parser')
const {
  parse
} = require('url')
const express = require('express')
const next = require('next')
const axios = require('axios')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler();
// 登录权限
const isAuthenticated = async (req, res, next) => {
  if (!req.signedCookies.token) {
    res.redirect('/login');
  } else {
    axios.defaults.headers['Authorization'] = 'Bearer ' + req.signedCookies.token;
    next()
  }
}
app.prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser('4EqStMNyab8'));

    server.get('/', isAuthenticated, (req, res) => {
      return app.render(req, res, '/article', req.query)
    })
    server.get('/login', (req, res) => {
      return app.render(req, res, '/login', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })