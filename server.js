/**
 * File: server.js
 * Desc: simple express HTTP server to serve the built react app
 */

const express = require("express");
const path = require("path");

const port = process.env.PORT || 5555;
// create express instance
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "build")));

// route for server root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Express server started on port ${port}`));
