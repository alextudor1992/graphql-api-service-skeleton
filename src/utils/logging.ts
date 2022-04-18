import * as Sentry from '@sentry/node'
import config from '@config'

Sentry.init({
  dsn: config.sentry.dsn,
  environment: config.runtime,
  onFatalError: async (error) => {
    Sentry.captureException(error)
    await Sentry.flush(2000)
  },
})

export function setTranscation(transaction: string) {
  Sentry.configureScope((scope) => scope.setTransactionName(transaction));
}
