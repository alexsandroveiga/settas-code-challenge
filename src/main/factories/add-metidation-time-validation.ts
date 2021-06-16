import { ValidationComposite, RequiredFieldValidation } from '@/validation'
import { Validation } from '@/presentation/contracts'

export const makeAddMeditationTimeValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['deviceId', 'startTime', 'endTime']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
