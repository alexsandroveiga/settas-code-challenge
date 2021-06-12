import { LoadMeditationTimeByDevice } from '@/domain/usecases'
import { LoadMeditationTimeByDeviceRepository } from '@/data/contracts'

export class LoadMeditationTimeByDeviceService implements LoadMeditationTimeByDevice {
  constructor (
    private readonly loadMeditationTimeByDevice: LoadMeditationTimeByDeviceRepository
  ) {}

  async loadMeditationTime (id: string): Promise<LoadMeditationTimeByDevice.Result> {
    return this.loadMeditationTimeByDevice.loadMeditationTime(id)
  }
}
