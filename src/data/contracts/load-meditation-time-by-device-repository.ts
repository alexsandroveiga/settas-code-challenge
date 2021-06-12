import { MeditationTimeModel } from '@/data/models'

export interface LoadMeditationTimeByDeviceRepository {
  loadMeditationTime: (id: string) => Promise<MeditationTimeModel[]>
}
