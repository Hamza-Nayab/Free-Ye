import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors()); // Enable CORS for API calls from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Send Lorem Ipsum data on all requests
app.use((req, res) => {
  res.status(200).json({
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  });
});

// Error Handling Middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Vite setup for development
if (app.get("env") === "development") {
  import("./vite").then(({ setupVite }) => setupVite(app, null));
} else {
  import("./vite").then(({ serveStatic }) => serveStatic(app));
}

// Export for Vercel (No manual `server.listen()`)
export default app;