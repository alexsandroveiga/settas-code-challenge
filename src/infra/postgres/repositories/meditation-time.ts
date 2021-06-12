import { AddMeditationTimeRepository, LoadMeditationTimeByDeviceRepository } from '@/data/contracts'
import { MeditationTimeModel } from '@/data/models'
import { getRepository, Repository } from 'typeorm'
import { MeditationTime } from '@/infra/postgres/entities'

export class MeditationTimePostgresRepository implements AddMeditationTimeRepository, LoadMeditationTimeByDeviceRepository {
  private readonly ormRepository: Repository<MeditationTime>

  constructor () {
    this.ormRepository = getRepository(MeditationTime)
  }

  async addMeditationTime (data: AddMeditationTimeRepository.Params): Promise<MeditationTimeModel> {
    const meditation = this.ormRepository.create({
      device_id: data.deviceId,
      start_time: data.startTime,
      end_time: data.endTime
    })

    await this.ormRepository.save(meditation)

    return ({
      deviceId: meditation.device_id,
      startTime: meditation.start_time,
      endTime: meditation.end_time
    })
  }

  async loadMeditationTime (id: string): Promise<MeditationTimeModel[]> {
    const meditationTime = await this.ormRepository.find({
      where: {
        device_id: id
      }
    })

    return meditationTime.map(meditation => ({
      deviceId: meditation.device_id,
      startTime: meditation.start_time,
      endTime: meditation.end_time
    }))
  }
}
