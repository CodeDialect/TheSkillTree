import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: ["student", "instructor", "admin"] }).notNull().default("student"),
  name: text("name").notNull(),
  email: text("email").notNull()
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  instructorId: integer("instructor_id").references(() => users.id).notNull(),
  category: text("category", { 
    enum: ["math", "public_speaking", "ela", "other"] 
  }).notNull()
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => users.id).notNull(),
  instructorId: integer("instructor_id").references(() => users.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  status: text("status", { 
    enum: ["pending", "confirmed", "cancelled"] 
  }).notNull().default("pending")
});

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => users.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  enrolledAt: timestamp("enrolled_at").notNull().defaultNow(),
  completed: boolean("completed").notNull().default(false)
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  email: true,
  role: true
});

export const insertCourseSchema = createInsertSchema(courses);
export const insertAppointmentSchema = createInsertSchema(appointments);
export const insertEnrollmentSchema = createInsertSchema(enrollments);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Appointment = typeof appointments.$inferSelect;
export type Enrollment = typeof enrollments.$inferSelect;
