const express = require("express");
const router = require("./routes");
const PORT = 8000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));