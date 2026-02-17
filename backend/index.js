const express = require("express");
const app = express();

app.use(express.json());

// Health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
