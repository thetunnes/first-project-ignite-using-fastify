import { app } from './app'

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP server running at port 3333'))
