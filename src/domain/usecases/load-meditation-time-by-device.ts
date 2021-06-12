import { MeditationTime } from '@/domain/entities'

export interface LoadMeditationTimeByDevice {
  loadMeditationTime: (id: string) => Promise<LoadMeditationTimeByDevice.Result>
}

export namespace LoadMeditationTimeByDevice {
  export type Result = MeditationTime[]
}
