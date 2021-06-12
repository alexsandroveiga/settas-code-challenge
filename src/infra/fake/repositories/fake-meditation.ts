import { AddMeditationTimeRepository, LoadMeditationTimeByDeviceRepository } from '@/data/contracts'
import { MeditationTimeModel } from '@/data/models'
import { meditation } from '@/infra/fake/data-sources'

export class FakeMeditationRepository implements AddMeditationTimeRepository, LoadMeditationTimeByDeviceRepository {
  async addMeditationTime (data: AddMeditationTimeRepository.Params): Promise<MeditationTimeModel> {
    meditation.push(data)

    return ({
      ...data,
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime)
    })
  }

  async loadMeditationTime (id: string): Promise<MeditationTimeModel[]> {
    return meditation.filter(meditation => meditation.deviceId === id)
  }
}
