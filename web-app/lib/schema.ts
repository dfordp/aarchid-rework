import {
  pgTable,
  text,
  timestamp,
  uuid,
  check,
} from 'drizzle-orm/pg-core'
import { InferInsertModel, sql } from 'drizzle-orm'

export const waitlist = pgTable(
  'waitlist',
  {
    id: uuid('id').primaryKey().defaultRandom().notNull(),
    email: text('email').unique().notNull(),
    role: text('role').notNull().default('teacher'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    check(
      'role_check',
      sql`${table.role} IN ('teacher', 'student', 'institution')`
    ),
  ]
)

export type NewWaitlistEntry = InferInsertModel<typeof waitlist>
