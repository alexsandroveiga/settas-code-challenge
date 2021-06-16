import { Connection, createConnection } from 'typeorm'

export const connection = async (): Promise<Connection> => createConnection()
