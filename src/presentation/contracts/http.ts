export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error
})
