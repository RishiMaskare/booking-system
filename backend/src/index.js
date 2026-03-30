import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";
import { app } from "./app.js";

try {
  await connectDB();

  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  });
} catch (err) {
  console.log("Error:", err);
}
