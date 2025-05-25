
import { pgTable, bigserial, timestamp, varchar, text, integer } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  createdate: timestamp('createdate', { withTimezone: true }).defaultNow(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  category: varchar('category', { length: 100 }),
  name: varchar('name', { length: 255 }).notNull(),
  link: text('link'),
  description: text('description'),
  technology: text('technology'),
  challenge: text('challenge'),
  mobileview: text('mobileview'),
  tabletview: text('tabletview'),
  desktopview: text('desktopview'),
});

export const contacts = pgTable('contacts', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  message: text('message').notNull(),
});

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Projects = typeof projects.$inferSelect;


