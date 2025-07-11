// server/routes/MailRoutes.js
const express = require("express");
const { sendMailtoCyrcle } = require("../controllers/mailController");
const router = express.Router();
const mailLimiter = require("../middleware/mailLimiter");

router.post("/email", mailLimiter, sendMailtoCyrcle);

module.exports = router;
