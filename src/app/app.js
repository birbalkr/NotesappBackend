import express from "express";
import authRoutes from "../routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import notesRoutes from "../routes/notes.routes.js";
import config from "../config/config.js";

const app = express();

app.use(cors({
    origin: config.CLIENT_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/notes", notesRoutes);



export default app;