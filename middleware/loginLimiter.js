const rateLimit = require("express-rate-limit");
const logger = require("../config/logger");


const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    message:
      "Too many login attempts from this IP, please try again after a 60 second pause",
  },
  handler: (req, res, next, options) => {
    logger.error(
      `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin},`,
      "errorLog.log"
    );
  },
  standardHeader: true,
  legacyHeaders: false,
});
