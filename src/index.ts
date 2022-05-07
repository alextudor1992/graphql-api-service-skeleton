import 'reflect-metadata'
import { createApolloServer } from '@api'

createApolloServer()
  .listen()
  .then((serverInfo) => {
    console.debug('Service accessible at', serverInfo.url)
  })
