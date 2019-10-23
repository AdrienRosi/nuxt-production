const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()

let config = require('./nuxt.config.js')
config.dev = false

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()

  app.use(nuxt.render)

  app.listen(port, host)
}
start()
