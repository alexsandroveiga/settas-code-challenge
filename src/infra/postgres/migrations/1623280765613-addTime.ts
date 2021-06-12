import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class addTime1623280765613 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.createTable(
      new Table({
        name: 'meditations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'device_id',
            type: 'varchar'
          },
          {
            name: 'start_time',
            type: 'timestamp with time zone'
          },
          {
            name: 'end_time',
            type: 'timestamp with time zone'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('meditations')
    await queryRunner.query('DROP EXTENSION "uuid-ossp"')
  }
}
