const rateLimit = require('express-rate-limit');

// Limite : max 3 messages par IP toutes les 5 minutes
const mailLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3,
  message: 'Trop de messages envoyés. Réessaie dans quelques minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = mailLimiter;
