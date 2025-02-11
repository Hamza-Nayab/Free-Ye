import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  // Example route
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "OK" });
  });

  // Example CRUD operation using storage
  app.post("/api/user", async (req, res) => {
    const user = req.body;
    try {
      await storage.insertUser(user);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}