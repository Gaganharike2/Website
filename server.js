// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serve files in /public

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle search POST request
app.post("/search", (req, res) => {
  const query = req.body.search;
  console.log("User searched for:", query);
  // In production: use this to search DB or redirect
  res.send(`<h1>Results for "${query}" will appear here (future implementation)</h1>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
