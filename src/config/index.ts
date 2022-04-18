import path from 'path'

const config = {
  service: {
    name: process.env.SERVICE_NAME,
    url: process.env.SERVICE_URL,
    port: process.env.SERVICE_PORT,
  },
  runtime: process.env.NODE_ENV,
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  db: {
    port: parseInt(process.env.DB_PORT),
    type: process.env.DB_TYPE,
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    entities: [path.resolve(__dirname + '../orm/entities/*.ts')],
    migrations: [path.resolve(__dirname + '../orm/migration/**/*.ts')],
    subscribers: [path.resolve(__dirname + '../orm/subscribers/**/*.ts')],
    synchronize: true,
  },
  graphql: {
    gateway: {
      schema: process.env.GRAPHQL_GATEWAY_SCHEMA_URL,
    },
  },
}

export default config
