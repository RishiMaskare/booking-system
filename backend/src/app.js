import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.static("public")); // Serve static files Example: /public/image.png (accessible via URL)
app.use(express.json({ limit: "16kb" })); // Parse incoming JSON requests. limit: prevents large payload attacks
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded data (form submissions)
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the Booking System API");
});

//routes import
// import userRouter from "./routes/user.route.js";
// app.use("/api/v1/users", userRouter);

// import { ApiError } from "./utils/ApiError.js";

// app.use((err, req, res, next) => {
//   if (err instanceof ApiError) {
//     return res.status(err.statusCode).json({
//       success: false,
//       message: err.message,
//       errors: err.errors || [],
//     });
//   }
//   // Fallback for unexpected errors
//   return res.status(500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//   });
// });

export { app };
