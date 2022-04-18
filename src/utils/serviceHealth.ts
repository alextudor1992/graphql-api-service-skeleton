import express from 'express'

export const onHealthCheck: (req: express.Request) => Promise<any> = async (request) => {
  return request.res.status(200).send()
}
