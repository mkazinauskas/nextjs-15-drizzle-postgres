import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL!, {
    idle_timeout: 20
})

export const db = drizzle(sql)