import { AddMeditationTimeService } from '@/data/services'
import { DateFnsAdapter } from '@/infra/converters'
import { MeditationTimePostgresRepository } from '@/infra/postgres/repositories'
import { Controller } from '@/presentation/contracts'
import { AddMeditationTimeController } from '@/presentation/controllers'

export const makeAddMeditationTimeController = (): Controller => {
  const converter = new DateFnsAdapter()
  const repo = new MeditationTimePostgresRepository()
  const loader = new AddMeditationTimeService(converter, repo)
  return new AddMeditationTimeController(loader)
}
