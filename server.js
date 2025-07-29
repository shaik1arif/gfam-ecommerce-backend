import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let projects = [];
let users = []; // simple dummy users

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = { name, email, password };
  users.push(newUser);
  res.status(201).json({ token: "dummy-token", name });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ token: "dummy-token", name: user.name });
});

app.get("/projects", (req, res) => res.json(projects));

app.post("/projects", (req, res) => {
  const newProject = { _id: Date.now().toString(), ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.delete("/projects/:id", (req, res) => {
  const index = projects.findIndex((p) => p._id === req.params.id);
  if (index !== -1) {
    projects.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: "Not found" });
  }
});

app.get("/", (req, res) => res.send("API running"));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
