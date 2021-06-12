import { TimestampConverter } from '@/data/contracts'

import { fromUnixTime } from 'date-fns'

export class DateFnsAdapter implements TimestampConverter {
  convert (timestamp: number): Date {
    return fromUnixTime(timestamp)
  }
}
