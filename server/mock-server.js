const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, "data");
const SUB_FILE = path.join(DATA_DIR, "subscribers.json");

function readSubscribers() {
  try {
    const raw = fs.readFileSync(SUB_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    return [];
  }
}

function writeSubscribers(list) {
  try {
    fs.writeFileSync(SUB_FILE, JSON.stringify(list, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("Failed to write subscribers", e);
    return false;
  }
}

app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  console.log("Newsletter signup received:", email);
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const list = readSubscribers();
  const exists = list.find(
    (s) => s.email.toLowerCase() === email.toLowerCase()
  );
  if (exists)
    return res
      .status(200)
      .json({ status: "ok", message: "Already subscribed" });

  const entry = { email, createdAt: new Date().toISOString() };
  list.push(entry);
  if (!writeSubscribers(list))
    return res.status(500).json({ error: "Failed to save" });

  // emulate small delay
  setTimeout(() => res.json({ status: "ok" }), 300);
});

// admin endpoint to list subscribers (not authenticated in mock)
app.get("/api/subscribers", (req, res) => {
  const list = readSubscribers();
  res.json(list);
});

// Serve static files if running in production (helps simple deploys)
if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "..");
  app.use(express.static(root));
}

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Mock API listening on http://localhost:${port}`)
);
