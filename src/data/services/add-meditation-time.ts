import { AddMeditationTime } from '@/domain/usecases'
import { AddMeditationTimeRepository, TimestampConverter } from '@/data/contracts'

export class AddMeditationTimeService implements AddMeditationTime {
  constructor (
    private readonly timestampConverter: TimestampConverter,
    private readonly addMedidationTimeRepository: AddMeditationTimeRepository
  ) {}

  async add (meditationTime: AddMeditationTime.Params): Promise<AddMeditationTime.Result> {
    const meditationTimeData = this.addMedidationTimeRepository.addMeditationTime({
      ...meditationTime,
      startTime: this.timestampConverter.convert(meditationTime.startTime),
      endTime: this.timestampConverter.convert(meditationTime.endTime)
    })

    return meditationTimeData
  }
}
