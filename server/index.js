import express, { urlencoded } from "express";
import cors from "cors";
// Added named import for urlencoded
import { PORT, MONGO_URL } from "./config.js";

import mongoose from "mongoose";
import { route } from "./routes/passwordRoute.js"; // Changed import to use named import

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(cors());
// Routes for password operations
app.use("/api/pass", route);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`app is connected to database`);
    app.listen(PORT, () => {
      console.log(`server is connected to http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
