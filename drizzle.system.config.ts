
import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

export default defineConfig({
    schema: [
        './src/server/db/system-schema.ts',
    ],
    out: './migrations/system',
    migrations: {
        table: 'system_migrations',
    },
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})