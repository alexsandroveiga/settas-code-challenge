import { AddMeditationTime } from '@/domain/usecases'

export interface AddMeditationTimeRepository {
  addMeditationTime: (data: AddMeditationTimeRepository.Params) => Promise<AddMeditationTimeRepository.Result>
}

export namespace AddMeditationTimeRepository {
  export type Params = {
    deviceId: string
    startTime: Date
    endTime: Date
  }
  export type Result = AddMeditationTime.Result
}
