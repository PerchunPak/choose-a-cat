import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
} from "drizzle-orm/pg-core";

export const comparison = pgTable("comparison", {
  id: serial("id").primaryKey(),
  user: text("user")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  result: boolean("result").notNull(),
  a: text("a").references(() => image.id, { onDelete: "restrict" }),
  b: text("b").references(() => image.id, { onDelete: "restrict" }),
});

export const image = pgTable("image", {
  id: text("id").primaryKey(),
  uploadedBy: text("uploadedBy")
    .notNull()
    .references(() => user.id, { onDelete: "restrict" }),
  hash: text("hash").notNull(),
});

/*** BetterAuth ***/

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

/*** BetterAuth ***/
