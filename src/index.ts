import 'reflect-metadata'
import { createApolloServer } from '@api'

const startServer = async () => {
  const serverInfo = await createApolloServer().listen()
  console.debug('Service available on port', serverInfo.port)
}

void startServer()
