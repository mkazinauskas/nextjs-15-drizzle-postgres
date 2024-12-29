import {
    index, integer,
    pgTable,
    timestamp,
    uuid, varchar
} from 'drizzle-orm/pg-core'

export const usersTable = pgTable(
    'users',
    {
        uuid: uuid('uuid').defaultRandom().primaryKey(),
        version: integer('version').default(0).notNull(),
        email: varchar('email', { length: 255 }).unique().notNull(),
        createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
        updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
    },
    (table) => [
        index('user_email_idx').on(table.email)
    ]
)