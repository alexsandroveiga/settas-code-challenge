import { MeditationTime } from '@/domain/entities'

export interface AddMeditationTime {
  add: (data: AddMeditationTime.Params) => Promise<AddMeditationTime.Result>
}

export namespace AddMeditationTime {
  export type Params = {
    deviceId: string
    startTime: number
    endTime: number
  }
  export type Result = MeditationTime
}
