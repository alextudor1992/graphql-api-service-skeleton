import { Request } from 'express'

export const onHealthCheck: (req: Request) => Promise<any> = async (request) => {
  return request.res.status(200).send()
}
