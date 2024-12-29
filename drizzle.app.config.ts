
import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

export default defineConfig({
    schema: [
        './src/server/db/app-schema.ts',
    ],
    out: './migrations/app',
    dialect: 'postgresql',
    migrations: {
        table: 'app_migrations',
    },
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})