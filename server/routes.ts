import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { insertCourseSchema, insertAppointmentSchema, insertEnrollmentSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Course routes
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getAllCourses();
    res.json(courses);
  });

  app.post("/api/courses", async (req, res) => {
    const result = insertCourseSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid course data" });
    }
    const course = await storage.createCourse(result.data);
    res.status(201).json(course);
  });

  // Appointment routes
  app.post("/api/appointments", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    const result = insertAppointmentSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid appointment data" });
    }
    
    const appointment = await storage.createAppointment({
      ...result.data,
      studentId: req.user.id,
    });
    res.status(201).json(appointment);
  });

  app.get("/api/appointments", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    const appointments = await storage.getUserAppointments(req.user.id);
    res.json(appointments);
  });

  // Enrollment routes
  app.post("/api/enrollments", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    const result = insertEnrollmentSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid enrollment data" });
    }
    
    const enrollment = await storage.createEnrollment({
      ...result.data,
      studentId: req.user.id,
    });
    res.status(201).json(enrollment);
  });

  const httpServer = createServer(app);
  return httpServer;
}
