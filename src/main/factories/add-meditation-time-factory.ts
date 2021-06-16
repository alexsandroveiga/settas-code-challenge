import { AddMeditationTimeService } from '@/data/services'
import { AddMeditationTime } from '@/domain/usecases'
import { DateFnsAdapter } from '@/infra/converters'
import { MeditationTimePostgresRepository } from '@/infra/postgres/repositories'

export const makeAddMeditation = (): AddMeditationTime => {
  const converter = new DateFnsAdapter()
  const repo = new MeditationTimePostgresRepository()
  return new AddMeditationTimeService(converter, repo)
}
