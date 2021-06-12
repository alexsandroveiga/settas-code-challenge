import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('meditations')
export class MeditationTime {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  device_id: string

  @Column()
  start_time: Date

  @Column()
  end_time: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
