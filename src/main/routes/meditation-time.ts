import { adaptRoute } from '@/main/adapters'
import { makeAddMeditationTimeController, makeLoadMeditationTimeByDeviceController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/time', adaptRoute(makeAddMeditationTimeController()))

  router.get('/time/:id', adaptRoute(makeLoadMeditationTimeByDeviceController()))
}
