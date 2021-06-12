import { AddMeditationTime } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts'

export class AddMeditationTimeController implements Controller {
  constructor (
    private readonly addMeditationTime: AddMeditationTime
  ) {}

  async handle (request: AddMeditationTimeController.Request): Promise<HttpResponse> {
    try {
      const meditationTime = await this.addMeditationTime.add(request)

      return ok(meditationTime)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddMeditationTimeController {
  export type Request = {
    deviceId: string
    startTime: number
    endTime: number
  }
}
