const config = require("./config")();
process.env.PORT = config.port;

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT;

const emailRoutes = require("./routes/MailRoutes.js");
app.use("/api", emailRoutes);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
	console.log(`Server is on port: ${PORT}`);
});
