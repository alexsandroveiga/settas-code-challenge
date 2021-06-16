import { Controller } from '@/presentation/contracts'
import { AddMeditationTimeController } from '@/presentation/controllers'
import { makeAddMeditationTimeValidation, makeAddMeditation } from '@/main/factories'

export const makeAddMeditationTimeController = (): Controller => {
  return new AddMeditationTimeController(makeAddMeditation(), makeAddMeditationTimeValidation())
}
