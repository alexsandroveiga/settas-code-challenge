import { LoadMeditationTimeByDevice } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts'

export class LoadMeditationTimeByDeviceController implements Controller {
  constructor (
    private readonly loadMeditationTimeByDevice: LoadMeditationTimeByDevice
  ) {}

  async handle (request: LoadMeditationTimeByDeviceController.Request): Promise<HttpResponse> {
    try {
      const meditationTime = await this.loadMeditationTimeByDevice.loadMeditationTime(request.id)

      return ok(meditationTime)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadMeditationTimeByDeviceController {
  export type Request = {
    id: string
  }
}
