import '@utils/logging'
import 'reflect-metadata'
import { createApolloSubgraph } from '@api'

createApolloSubgraph()
  .listen()
  .then((serverInfo) => {
    console.debug('Service accessible at', serverInfo.url)
  })
