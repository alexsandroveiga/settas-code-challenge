import { LoadMeditationTimeByDeviceService } from '@/data/services'
import { MeditationTimePostgresRepository } from '@/infra/postgres/repositories'
import { Controller } from '@/presentation/contracts'
import { LoadMeditationTimeByDeviceController } from '@/presentation/controllers'

export const makeLoadMeditationTimeByDeviceController = (): Controller => {
  const repo = new MeditationTimePostgresRepository()
  const loader = new LoadMeditationTimeByDeviceService(repo)
  return new LoadMeditationTimeByDeviceController(loader)
}
