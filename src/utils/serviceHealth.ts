import { Request } from 'express'

export const onHealthCheck = async (request: Request) =>
  Promise.resolve(request.res.status(200).send().end())
